<template>
  <div class="exception">
        <div class="exception-img" :style="this.getImgUrl" :alt="this.type"/>
    <div class="tips">
      <h6>{{this.type}}</h6>
      <h1>{{this.config[type].desc}}</h1>
      <a-button type="primary">返回首页</a-button>
    </div>

      <page-footer/>
  </div>
</template>

<script>
	import PageFooter from '../pageFooter/PageFooter'
	import config from './typeConfig'

	export default {
		name: "ExceptionPage",
    data(){
			return {
				config: config
      }
    },
		props: {
			type: {
				propTypes: String,
				required: true,
			}
		},
		components: {
			PageFooter
		},
    computed: {
			getImgUrl(){
				return `background-image: url(${config[this.type].img})`
      }
    }
	}
</script>

<style scoped lang="less">
.exception{
  .exception-img {
    float: left;
    height: 360px;
    background: no-repeat 50% 50%;
    background-size: contain;
  }
  .tips{
    float: left;
  }
}
  @media screen and (max-width: 576px){
    .exception-img {
      width: 100%;
    }
    .tips{
      width: 100%;
    }
  }
  @media screen and (min-width: 576px){
    .exception-img {
      width: 50%;
    }
    .tips{
      width: 50%;
    }
  }
</style>