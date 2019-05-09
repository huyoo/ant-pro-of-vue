<template>
  <div class="pro-menu">
    <div :class="[collapse?'center':'','menu-title']">
      <img src="../../assets/logo.svg">
      <span v-if="!collapse">123456</span>
    </div>
    <a-menu mode="inline"
            :inlineCollapsed="collapse"
            theme="dark">
      <a-sub-menu>
        <span slot="title"><a-icon type="form"/><span>表单页</span></span>
        <a-menu-item key="1">
          <router-link to="/form/basicForm">基础表单</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/form/stepForm">分步表单</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
	import {Menu} from "ant-design-vue";

	const {Item, SubMenu} = Menu;

	export default {
		name: "Menu",
		components: {
			AMenu: Menu,
			ASubMenu: SubMenu,
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
		}
	}
</script>

<style scoped lang="less">
  .pro-menu {
    min-height: 100vh;
    color: rgba(255, 255, 255, 0.65);
    background: #001529;
    .menu-title {
      color: white;
      font-size: 20px;
      font-weight: 600;
      vertical-align: middle;
      img {
        width: 20px;
        height: auto;
        transform: rotateX(180deg);
      }
    }
    .center{
      text-align: center;
    }
  }
</style>