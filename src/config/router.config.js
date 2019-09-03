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
import TableList from "@/pages/list/TableList";
import StandardList from "@/pages/list/StandardList";
import Success from "@/pages/result/Success";
import Fail from "@/pages/result/Fail";
import AdvanceProfile from "@/pages/profile/AdvanceProfile";
import BasicProfile from "@/pages/profile/BasicProfile";

export default [
	{
		path: '/',
		name: 'index',
		meta: {title: '首页'},
		component: BasicLayout,
		children: [
			{
				path: '/dashboard',
				name: 'form',
				meta: {title: '仪表盘', icon: 'dashboard'},
				component: PageLayout,
				// children: [
				// 	{
				// 		path: '/form/basicForm',
				// 		name: 'basicForm',
				// 		meta: {title: '基础表单'},
				// 		component: BasicForm
				// 	}, {
				// 		path: '/form/stepForm',
				// 		name: 'stepForm',
				// 		meta: {title: '分步表单'},
				// 		component: stepForm
				// 	}
				// ]
			},{
				path: '/form',
				name: 'form',
				meta: {title: '表单页', icon: 'form'},
				component: PageLayout,
				children: [
					{
						path: '/form/basic-form',
						name: 'basicForm',
						meta: {title: '基础表单'},
						component: BasicForm
					}, {
						path: '/form/step-form',
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
						path: '/table/table-list',
						name: 'TableList',
						meta: {title: '查询表格'},
						component: TableList
					}, {
						path: '/table/standard-list',
						name: 'StandardList',
						meta: {title: '标准表格'},
						component: StandardList
					}
				]
			}, {
				path: '/profile',
				name: 'profile',
				meta: {title: '详情页', icon: 'profile'},
				component: BlankLayout,
				children: [
					{
						path: '/profile/basic-profile',
						name: 'basicProfile',
						meta: {title: '基础详情页'},
						component: BasicProfile
					}, {
						path: '/profile/advance-profile',
						name: 'advanceProfile',
						meta: {title: '高级详情页'},
						component: AdvanceProfile
					}
				]
			}, {
				path: '/result',
				name: 'result',
				meta: {title: '结果页', icon: 'check-circle'},
				component: BlankLayout,
				children: [
					{
						path: '/result/success',
						name: 'success',
						meta: {title: '成功页'},
						component: Success
					}, {
						path: '/result/fail',
						name: 'fail',
						meta: {title: '失败页'},
						component: Fail
					}
				]
			}, {
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
			},
			// {
			// 	path: '/form',
			// 	name: 'form',
			// 	meta: {title: '个人页', icon: 'user'},
			// 	component: PageLayout,
				// children: [
				// 	{
				// 		path: '/form/basicForm',
				// 		name: 'basicForm',
				// 		meta: {title: '基础表单'},
				// 		component: BasicForm
				// 	}, {
				// 		path: '/form/stepForm',
				// 		name: 'stepForm',
				// 		meta: {title: '分步表单'},
				// 		component: stepForm
				// 	}
				// ]
			// },
			/*{
				path: '/form',
				name: 'form',
				meta: {title: '组件库', icon: 'tool'},
				component: PageLayout,
			},*/
		]
	}
]
