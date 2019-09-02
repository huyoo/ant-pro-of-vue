<template>
  <span class="process-dot"><span class="dot" :style="this.getColor"></span>{{this.translateStatus}}</span>
</template>

<script>
	export default {
		name: "ProcessDot",
		props: {
			status: {
				propTypes: String,
				required: true
			},

		},
		computed: {
			translateStatus() {
				if (this.status === 'processing') {
					return '进行中'
				} else {
					return '成功'
				}
			},
			getColor() {
				if (this.status === 'processing') {
					return {backgroundColor: '#1890ff'}
				} else {
					return {backgroundColor: '#52c41a'}
				}
			}
		}
	}
</script>

<style scoped lang="less">
  .process-dot {
    .dot {
      display: inline-block;
      margin-right: 7px;
      margin-top: 8px;
      vertical-align: top;
      width: 6px;
      height: 6px;
      border-radius: 5px;
    }
  }
</style>