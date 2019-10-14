/**
 * create by hy ON 2019/5/12
 */
import {Icon, Menu} from "ant-design-vue";
import {asyncRouterMap as router} from '@/route/router.config'
import logo from "../../assets/logo.svg"

const {Item, SubMenu} = Menu;

export default {
	name: "Menu",
	props: {
		isMobile: {
			propTypes: Boolean,
			required: false,
			default: false
		},
		collapse: {
			propTypes: Boolean,
			required: false,
			default: false
		}
	},
	methods: {
		renderMenu(routes){
			return routes.map((r, index) => {
				if(r.children){
					return this.renderSubMenu(r, index);
				}else {
					return this.renderMenuItem(r, index);
				}
			});
		},
		renderSubMenu(route, index){
			const dom = route.children.map((r, i) => {
				if(r.children){
					return this.renderSubMenu(r, index+""+i);
				}else {
					return this.renderMenuItem(r, index+""+i);
				}
			});
			return <SubMenu>
				<span slot='title'><Icon type={route.meta.icon}/><span>{route.meta.title}</span></span>
				{dom}
			</SubMenu>
		},
		renderMenuItem(route, index){
			return <Item key={index}>
				<router-link to={route.path}>{route.meta.title}</router-link>
			</Item>
		},
	},
	render() {
		const {collapse} = this;
		return (<div class="pro-menu">
				<div class={`${collapse ? 'center' : ''} menu-title`}>
					<img src={logo} alt={'Antd'}/>
					{!collapse && <span>Preview</span>}
				</div>
				<Menu mode="inline"
				      inlineCollapsed={collapse}
				      theme="dark"
				      defaultSelectedKeys={["1"]}
				      defaultOpenKeys={["1"]}>
					{this.renderMenu(router[0].children)}
				</Menu>
			</div>
		)
	}
}