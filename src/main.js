// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "@/components/component_regist"
import Router from 'vue-router'
import routes from '@/config/router.config'

//路由注册
Vue.use(Router);
let router = new Router({
	routes: routes
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {App},
	template: '<App/>'
});
