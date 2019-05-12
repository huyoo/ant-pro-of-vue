/**
 * 菜单路由配置
 * create by hy ON 2019/5/12
 */
import BasicLayout from "@/layouts/BasicLayout";
import PageLayout from "@/layouts/PageLayout";
import BasicForm from "@/pages/form/BasicForm";
import stepForm from "@/pages/form/stepForm";
import BlankLayout from "@/layouts/BlankLayout";
import Exception404 from "@/pages/exception/404"
import Exception403 from "@/pages/exception/403"
import Exception500 from "@/pages/exception/500"

export default [
	{
		path: '/',
		name: 'index',
		meta: {title: '首页'},
		component: BasicLayout,
		children: [
			{
				path: '/form',
				name: 'form',
				meta: {title: '表单页', icon: 'form'},
				component: PageLayout,
				children: [
					{
						path: '/form/basicForm',
						name: 'basicForm',
						meta: {title: '基础表单'},
						component: BasicForm
					}, {
						path: '/form/stepForm',
						name: 'stepForm',
						meta: {title: '分步表单'},
						component: stepForm
					}
				]
			}, {
				path: '/table',
				name: 'table',
				meta: {title: '列表页', icon: 'table'},
				component: PageLayout,
				children: [
					{
						path: '/form/basicForm',
						name: 'basicForm',
						meta: {title: '基础表单'},
						component: BasicForm
					}, {
						path: '/form/stepForm',
						name: 'stepForm',
						meta: {title: '分步表单'},
						component: stepForm
					}
				]
			},{
				path: '/exception',
				name: 'exception',
				component: BlankLayout,
				meta: {title: '异常页', icon: 'warning'},
				children: [
					{
						path: '/exception/404',
						name: '404',
						meta: {title: '404'},
						component: Exception404
					}, {
						path: '/exception/403',
						name: '403',
						meta: {title: '403'},
						component: Exception403
					},{
						path: '/exception/500',
						name: '500',
						meta: {title: '500'},
						component: Exception500
					},
				]
			}
		]
	}
]
