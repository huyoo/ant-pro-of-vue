<template>
  <div>
    <a-form :form="form" style="max-width: 500px; margin: 40px auto 0;">
      <a-alert :closable="true"
               message="确认转账后，资金将直接打入对方账户，无法退回。"
               style="margin-bottom: 24px;"
      />
      <a-form-item label="付款账户"
                   :labelCol="labelCol"
                   :wrapperCol="wrapperCol"
                   class="stepFormText"
      >
        {{paymentUser}}
      </a-form-item>
      <a-form-item label="收款账户"
                   :labelCol="labelCol"
                   :wrapperCol="wrapperCol"
                   class="stepFormText"
      >
        {{receiver}}
      </a-form-item>
      <a-form-item label="收款人姓名"
                   :labelCol="labelCol"
                   :wrapperCol="wrapperCol"
                   class="stepFormText"
      >
        {{name}}
      </a-form-item>
      <a-form-item label="转账金额"
                   :labelCol="labelCol"
                   :wrapperCol="wrapperCol"
                   class="stepFormText"
      >
        ￥ {{money}}
      </a-form-item>
      <a-divider/>
      <a-form-item label="支付密码"
                   :labelCol="labelCol"
                   :wrapperCol="wrapperCol"
                   class="stepFormText"
      >
        <a-input type="password"
                 style="width: 80%;"
                 v-decorator="['paymentPassword', { initialValue: '123456', rules: [{required: true, message: '请输入支付密码'}] }]"/>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button :loading="loading" type="primary" @click="nextStep">提交</a-button>
        <a-button style="margin-left: 8px" @click="prevStep">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
	import {mapState} from 'vuex';
	import {Alert as AAlert} from 'ant-design-vue'

	export default {
		name: "Step2",
		components: {AAlert},
		data() {
			return {
				labelCol: {lg: {span: 5}, sm: {span: 5}},
				wrapperCol: {lg: {span: 19}, sm: {span: 19}},
				form: this.$form.createForm(this),
				loading: false,
				timer: 0
			}
		},
		computed: mapState({
			paymentUser: state => state.stepForm.paymentUser,
			payType: state => state.stepForm.payType,
			receiver: state => state.stepForm.receiver,
			name: state => state.stepForm.name,
			money: state => state.stepForm.money,
		}),
		methods: {
			nextStep() {
				const that = this;
				const {form: {validateFields}} = this;
				that.loading = true;

				validateFields((err, values) => {
						if (err) {
							that.loading = false;
							return;
						}
						that.timer = setTimeout(function () {
							that.loading = false;
							that.$emit('nextStep')
						}, 1500)
					}
				)
			},
			prevStep() {
				this.$emit('prevStep')
			}
		},
	}
</script>

<style scoped lang="less">
  .stepFormText {
    margin-bottom: 24px;

    .ant-form-item-label, .ant-form-item-control {
      line-height: 22px;
    }
  }
</style>