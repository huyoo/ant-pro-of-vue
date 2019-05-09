<template>
  <div class="page-layout">
    <div class="head">
      <a-breadcrumb>
        <a-breadcrumb-item>首页</a-breadcrumb-item>
        <a-breadcrumb-item>表单页</a-breadcrumb-item>
        <a-breadcrumb-item>基础表单</a-breadcrumb-item>
      </a-breadcrumb>
      <h1>基础表单</h1>
      <span>表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。</span>
    </div>
    <div class="content">
      <router-view/>
      <page-footer/>
    </div>
  </div>
</template>

<script>
	import {PageFooter} from "@/components";
  export default {
    name: "PageLayout",
    components:{
	    PageFooter
    }
  }
</script>

<style scoped lang="less">
  .page-layout{
    .head{
      background-color: white;
      padding: 22px 24px;
    }
    .content{
      margin: 22px;
      background-color: white;
    }
  }
</style>