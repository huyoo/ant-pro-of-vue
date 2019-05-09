<template>
  <div class="basic-layout">
    <div class="menu" :style="sideMenuStyle">
      <side-menu :is-mobile="isMobile" :collapse="collapse"/>
    </div>
    <div class="content">
      <page-header/>
      <router-view/>
      <page-footer/>
    </div>
  </div>
</template>

<script>
	import {SideMenu, PageHeader, PageFooter} from "@/components";

	export default {
		name: "BasicLayout",
		data() {
			return {
				isSideMenu: true,
				isMobile: false,
				collapse: false,
				sideMenuStyle: {
					flex: '0 0 256px',
				}
			}
		},
		components: {
			SideMenu,
			PageHeader,
			PageFooter
		},
		computed: {},
		watch: {},
		methods: {
			dealClientWdith(){
				const clientWidth = document.documentElement.clientWidth;
				if (clientWidth > 1200) {
					this.isMobile = false;
					this.collapse = false;
					this.sideMenuStyle = {
						flex: '0 0 256px',
					}
				} else if(clientWidth<=1200 && clientWidth >=576){
					this.isMobile = false;
					this.collapse = true;
					this.sideMenuStyle = {flex: '0 0 80px',}
				} else if (clientWidth < 576) {
					this.isMobile = true;
					this.collapse = true;
					this.sideMenuStyle = {flex: '0 0 80px',}
				}
      }
		},
    created(){
	    this.dealClientWdith();
    },
		mounted() {
			let _this = this;
			window.onresize = () => {
				_this.dealClientWdith();
			}
		}
	}
</script>

<style scoped lang="less">
  .basic-layout {
    display: flex;
    flex-flow: row;

    .menu {
      position: relative;
      z-index: 10;
      box-shadow: 2px 0 6px rgba(0, 0, 0, 0.4);
    }

    .content {
      display: flex;
      flex: auto;
      flex-direction: column;
      min-height: 100vh;
      background-color: #f0f2f5;
    }
  }
</style>