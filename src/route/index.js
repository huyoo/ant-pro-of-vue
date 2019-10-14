/**
 * 路由注册
 * create by hy ON 2019/9/26
 */
import Vue from 'vue'
import Router from 'vue-router'
import {constantRouterMap, asyncRouterMap} from '@/route/router.config'

Vue.use(Router);
let router= new Router({
	routes: constantRouterMap
});

export default router;