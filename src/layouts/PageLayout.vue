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
    </div>

  </div>
</template>

<script>
  export default {
    name: "PageLayout",
    components:{}
  }
</script>

<style scoped>
  .page-layout .head{
    background-color: white;
    padding: 22px 24px;
  }
  .page-layout .content{
    margin: 22px;
    background-color: white;
  }
</style>