import Vue from 'vue'
import Router from 'vue-router'
import PageLayout from "@/layouts/PageLayout";
import BasicForm from "@/pages/form/BasicForm";
import stepForm from "@/pages/form/stepForm";
import BasicLayout from "@/layouts/BasicLayout";

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
				}
			]
		},
	]
})
