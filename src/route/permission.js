/**
 * 权限拦截验证
 * create by hy ON 2019/9/26
 */
import router from './index'
import store from '@/store/store'
import Vue from "vue";
import {asyncRouterMap} from "@/route/router.config";

const whiteList = ['login', 'register', 'registerResult']; // no redirect whitelist
const defaultRoutePath = '/dashboard/workplace';

router.beforeEach((to, from, next) => {
    // console.log(store);

    //如果没有token 跳转到登录页
    if (!store.state.login.token) {
        if (to.path === '/login') {
            next();
        } else {
            next({path: '/login'});
        }
        return;
    }

    if (to.path === '/login') {
        next('/dashboard');
    } else {
        // console.log(store);

        if (store.state.permission.addRouters.length === 0) {
            store.dispatch('GenerateRoutes')
                .then(() => {
                    next();
                    router.addRoutes(asyncRouterMap);
                })
        } else {
            next();
        }
    }
});