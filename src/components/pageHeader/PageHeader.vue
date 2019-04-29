<template>
  <div class="page-header">
    <span class="menu-fold"><a-icon :type="menuType"/></span>
    <div class="tool-bar">
      <span>查找</span>
      <span>文档</span>
      <span>通知</span>
      <span>个人中心</span>
      <span>多语言</span>
    </div>
  </div>
</template>

<script>
	export default {
		name: "PageHeader",
    data(){
			return {
				menuType: 'menu-fold'
      }
    }
	}
</script>

<style scoped>
  .page-header{
    height: 64px;
    line-height: 64px;
    font-size: 20px;
    background-color: white;
  }
  .page-header .menu-fold{
    padding: 22px 24px;
  }
  .page-header .tool-bar{
    float: right;
    padding: 0 24px;
    font-size: 16px;
  }
</style>