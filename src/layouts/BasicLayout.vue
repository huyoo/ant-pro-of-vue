<template>
  <div class="basic-layout">
    <div class="menu">
      <side-menu/>
    </div>
    <div class="content">
      <page-header/>
      <router-view/>
      <page-footer/>
    </div>
  </div>
</template>

<script>
	import {SideMenu, PageHeader,PageFooter } from "@/components";

	export default {
		name: "BasicLayout",
    components:{
			SideMenu,
	    PageHeader,
	    PageFooter
    }
	}
</script>

<style scoped>
  .basic-layout{
    display: flex;
    flex-flow: row;
  }
  .basic-layout .menu{
    flex: 0 0 256px;
    min-width: 256px;
    max-width: 256px;
    width: 256px;
    position: relative;
    z-index: 10;
    box-shadow: 2px 0 6px rgba(0, 0, 0, 0.4);
  }
  .basic-layout .content{
    display: flex;
    flex: auto;
    flex-direction: column;
    min-height: 100vh;
    background-color: #f0f2f5;
  }
</style>