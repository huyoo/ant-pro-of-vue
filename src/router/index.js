import Vue from 'vue'
import Router from 'vue-router'
import PageLayout from "@/layouts/PageLayout";
import BasicForm from "@/pages/form/BasicForm";
import stepForm from "@/pages/form/stepForm";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";
import Exception404 from "@/pages/exception/404"
import Exception403 from "@/pages/exception/403"
import Exception500 from "@/pages/exception/500"


Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: BasicLayout,
			children: [
				{
					path: '/form',
					name: 'form',
					component: PageLayout,
					children: [
						{
							path: '/form/basicForm',
							name: 'basicForm',
							component: BasicForm
						}, {
							path: '/form/stepForm',
							name: 'stepForm',
							component: stepForm
						}
					]
				}, {
					path: '/exception',
					name: 'exception',
					component: BlankLayout,
					children: [
						{
							path: '/exception/404',
							name: '404',
							component: Exception404
						}, {
							path: '/exception/403',
							name: '403',
							component: Exception403
						},{
							path: '/exception/500',
							name: '500',
							component: Exception500
						},
					]
				}
			]
		},
	]
})
