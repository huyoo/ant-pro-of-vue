<!-- 已舍弃的菜单 -->
<template>
  <div class="pro-menu">
    <div :class="[collapse?'center':'','menu-title']">
      <img src="../../assets/logo.svg">
      <span v-if="!collapse">123456</span>
    </div>
    <a-menu mode="inline"
            :inlineCollapsed="collapse"
            theme="dark"
            :defaultSelectedKeys="['1']"
            :defaultOpenKeys="['1']">
<!--      <sub-menu v-for="(route, index) in routes" :route="route" :index="index"/>-->
<!--      <a-sub-menu>-->
<!--        <span slot="title"><a-icon type="form"/><span>表单页</span></span>-->
<!--        <a-menu-item key="1">-->
<!--          <router-link to="/form/basicForm">基础表单</router-link>-->
<!--        </a-menu-item>-->
<!--        <a-menu-item key="2">-->
<!--          <router-link to="/form/stepForm">分步表单</router-link>-->
<!--        </a-menu-item>-->
<!--      </a-sub-menu>-->
<!--      <a-sub-menu>-->
<!--        <span slot="title"><a-icon type="warning"/><span>异常页</span></span>-->
<!--        <a-menu-item key="3">-->
<!--          <router-link to="/exception/404">404</router-link>-->
<!--        </a-menu-item>-->
<!--        <a-menu-item key="4">-->
<!--          <router-link to="/exception/403">403</router-link>-->
<!--        </a-menu-item>-->
<!--        <a-sub-menu key="5">-->
<!--          <span slot="title"><span>asas</span></span>-->
<!--          <a-menu-item key="51">-->
<!--            <router-link to="/sasa">asas</router-link>-->
<!--          </a-menu-item>-->
<!--        </a-sub-menu>-->
<!--      </a-sub-menu>-->
    </a-menu>
  </div>
</template>

<script>
	import {Menu} from "ant-design-vue";
	import router from '@/config/router.config'
	const {Item, SubMenu:ASubMenu} = Menu;

	export default {
		name: "Menu",
		components: {
			AMenu: Menu,
			ASubMenu: ASubMenu,
			AMenuItem: Item,
		},
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
    data(){
			return {
				routes: router[0].children
      }
    },
	}
</script>

<style scoped lang="less">
  .pro-menu {
    min-height: 100vh;
    color: rgba(255, 255, 255, 0.65);
    background: #001529;

    .menu-title {
      height: 64px;
      padding-left: 24px;
      overflow: hidden;
      color: white;
      font-size: 20px;
      font-weight: 600;
      vertical-align: middle;
      line-height: 64px;

      img {
        width: 32px;
        height: auto;
        transform: rotateX(180deg);
      }

      span {
        vertical-align: middle;
        margin-left: 12px;
      }
    }

    .center {
      padding-left: 0;
      text-align: center;
    }
  }
</style>