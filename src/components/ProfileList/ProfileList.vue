<template>
  <div class="profile-list">
    <div  style="margin-bottom: 20px;color: rgba(0,0,0,.85); font-weight: 700;font-size: 16px;line-height: 1.5;" :style="this.headStyle">{{this.title}}</div>
    <slot name="content"></slot>
  </div>
</template>

<script>
	export default {
		name: "ProfileList",
		props: {
			title: {
				type: String,
				required: true
			},
			content: {
				type: String,
				required: false
			},
		headStyle: {
				type: String,
        required: false
    }
		}
	}
</script>

<style scoped lang="less">

</style>