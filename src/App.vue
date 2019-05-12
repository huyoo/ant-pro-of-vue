<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'ant-design-vue/dist/antd.css'
export default {
  name: 'App'
}
</script>

<style lang="less">
  @import "components/menu/style.less";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
</style>
