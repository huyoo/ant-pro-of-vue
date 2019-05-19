<!--------- 基础表单 --------->
<template>
  <a-card>
    <a-form :form="form" layout="horizontal" @submit="handleSubmit">
      <a-form-item label="标题" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-input/>
      </a-form-item>
      <a-form-item label="起止日期" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-input/>
      </a-form-item>
      <a-form-item label="目标描述" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-input/>
      </a-form-item>
      <div style="text-align: center">
        <a-button type="primary" html-type="submit">提交</a-button>
      </div>

    </a-form>
  </a-card>
</template>

<script>
	export default {
		name: "BasicForm",
		components: {},
		data() {
			return {
				description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
				form: this.$form.createForm(this),
				wrapperCol: {lg: {span: 10}, sm: {span: 17}},
				labelCol: {lg: {span: 7}, sm: {span: 7}}
			}
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFields((err, values) => {
					if (!err) {
						console.log(values);
					}
				});
			}
		}
	}
</script>

<style scoped>

</style>