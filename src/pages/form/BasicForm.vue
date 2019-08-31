<!--------- 基础表单 --------->
<template>
  <a-card>
    <a-form :form="form" layout="horizontal" @submit="handleSubmit">
      <a-form-item label="标题" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-input v-decorator="[
'name',
{rules: [{ required: true, message: '请输入标题' }]}
]"
                 placeholder="给目标起个名字"/>
      </a-form-item>
      <a-form-item label="起止日期" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-range-picker style="width: 100%"
                        v-decorator="[
'beginDate',
{ rules: [{ type: 'array', required: true, message: '请选择起止日期' }]}]"/>
      </a-form-item>
      <a-form-item label="目标描述" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-textarea rows="4"
                    placeholder="请输入目标描述"
                    v-decorator="['goal', {rules: [{ required: true, message: '请输入目标描述' }]}]"/>
      </a-form-item>
      <a-form-item
        label="衡量标准" :wrapper-col="wrapperCol" :label-col="labelCol">
        <a-textarea
          rows="4"
          placeholder="请输入衡量标准"
          v-decorator="[
'standard',
{rules: [{ required: true, message: '请输入衡量标准' }]}
]"/>
      </a-form-item>
      <a-form-item :wrapper-col="wrapperCol" :label-col="labelCol">
<span slot="label">客户
<span class="tips">(选填)</span>
<a-tooltip title="目标的服务对象">
<a-icon type="question-circle-o"/>
</a-tooltip>
</span>
        <a-input
          placeholder="请描述你服务的客户，内部客户直接 @姓名／工号"
          v-decorator="['client']"/>
      </a-form-item>
      <a-form-item :wrapper-col="wrapperCol" :label-col="labelCol">
        <span slot="label">邀评人<span class="tips">(选填)</span></span>
        <a-input v-decorator="['invites']" placeholder="请直接 @姓名／工号，最多可邀请 5 人"/>
      </a-form-item>
      <a-form-item :wrapper-col="wrapperCol" :label-col="labelCol">
        <span slot="label">权重<span class="tips">(选填)</span></span>
        <a-input-number v-decorator="['weight']" :min="0" :max="100"/>
        <span> %</span>
      </a-form-item>
      <a-form-item label="目标公开" :wrapper-col="wrapperCol" :label-col="labelCol" help="客户、邀评人默认被分享">
        <a-radio-group v-model="value">
          <a-radio :value="1">公开</a-radio>
          <a-radio :value="2">部分公开</a-radio>
          <a-radio :value="3">不公开</a-radio>
        </a-radio-group>
        <a-input v-decorator="['publicUsers']" v-if="value===2" placeholder="公开给"/>
      </a-form-item>
      <div style="text-align: center">
        <a-button type="primary" html-type="submit">提交</a-button>
      </div>
    </a-form>
  </a-card>
</template>

<script>
	import ATextarea from "ant-design-vue/es/input/TextArea";

	export default {
		name: "BasicForm",
		components: {ATextarea},
		data() {
			return {
				description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
				wrapperCol: {lg: {span: 10}, md: {span: 14}, sm: {span: 15}},
				labelCol: {lg: {span: 7}, md: {span: 7}, sm: {span: 6}},
				form: this.$form.createForm(this),
				value: 1,
			}
		},
		methods: {
			handleSubmit(e) {
				e.preventDefault();
				this.form.validateFieldsAndScroll((err, values) => {
					if (err) return;

					const params = {
						...values,
						public: this.value,
					};
					console.log(params);
					this.$message.success('提交成功');
				});
			}
		}
	}
</script>

<style scoped lang="less">
  .tips {
    color: grey;
  }
</style>