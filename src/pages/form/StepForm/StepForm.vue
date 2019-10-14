<template>
  <div class="ant-pro-step-form">
    <a-steps class="steps" :current="currentTab">
      <a-step title="填写转账信息"/>
      <a-step title="确认转账信息"/>
      <a-step title="完成"/>
    </a-steps>
    <Step1 v-if="currentTab === 0" @nextStep="nextStep"/>
    <Step2 v-else-if="currentTab === 1" @nextStep="nextStep" @prevStep="prevStep"/>
    <Step3 v-else-if="currentTab === 2" @finish="finish"/>
  </div>
</template>

<script>
	import Step1 from "@/pages/form/StepForm/Step1";
	import Step2 from "@/pages/form/StepForm/Step2";
	import Step3 from "@/pages/form/StepForm/Step3";

	export default {
		name: "stepForm",
		components: {Step3, Step2, Step1},
		data() {
			return {
				description: '将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。',
				currentTab: 0
			}
		},
		created() {
		},
		methods: {
			nextStep() {
				if (this.currentTab < 2) {
					this.currentTab += 1
				}
			},
			prevStep() {
				if (this.currentTab > 0) {
					this.currentTab -= 1
				}
			},
			finish() {
				this.currentTab = 0
			}
		}
	}
</script>

<style scoped lang="less">
  .ant-pro-step-form {
    padding: 24px;

    .steps {
      max-width: 750px;
      margin: 16px auto;
    }
  }
</style>