<template>
  <a-locale-provider :locale="locale">
    <div id="app">
      <router-view/>
    </div>
  </a-locale-provider>
</template>

<script>
	import {LocaleProvider} from 'ant-design-vue'
	import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
	import 'ant-design-vue/dist/antd.css'
	import moment from 'moment';
	import 'moment/locale/zh-cn';

	moment.locale('zh-cn');

	export default {
		name: 'App',
		components: {ALocaleProvider: LocaleProvider},
		data() {
			return {
				locale: zhCN
			}
		}
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
