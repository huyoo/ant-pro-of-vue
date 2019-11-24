// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import "@/components/component_regist"
import route from "@/route";
import store from "@/store/store";
import "@/route/permission"
import '@/mock'

Vue.config.productionTip = false;
Vue.prototype.$event = new Vue();

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router: route,
    components: {App},
    template: '<App/>'
});
