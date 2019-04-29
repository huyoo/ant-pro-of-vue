<template>
  <div class="pro-menu">
    <div class="menu-title"><img src="../../assets/logo.svg">123456</div>
    <a-menu mode="inline" style="width: 256px" theme="dark">
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
		}
	}
</script>

<style scoped>
  .pro-menu{
    min-height: 100vh;
    color: rgba(255, 255, 255, 0.65);
    background: #001529;
  }
  .pro-menu .menu-title{
    color: white;
    font-size: 20px;
    font-weight: 600;
    vertical-align: middle;
  }
  .pro-menu .menu-title img{
    width: 20px;
    height: auto;
    transform: rotateX(180deg);
  }
</style>