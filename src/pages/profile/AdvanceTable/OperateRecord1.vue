<template>
  <a-table row-key="id" :columns="columns" :dataSource="data"></a-table>
</template>

<script>
	import ProcessDot from "@/components/ProcessDot/ProcessDot";

	export default {
		name: "OperateRecord1",
		components: {ProcessDot},
		data() {
			return {
				columns: [
					{
						title: '操作类型',
						dataIndex: 'type',
						key: 'type'
					},
					{
						title: '操作人',
						dataIndex: 'name',
						key: 'name'
					},
					{
						title: '执行结果',
						dataIndex: 'status',
						key: 'status',
						customRender: value => <process-dot status={value}/>
					},
					{
						title: '操作时间',
						dataIndex: 'updatedAt',
						key: 'updatedAt'
					},
					{
						title: '备注',
						dataIndex: 'remark',
						key: 'remark'
					}
				],
				data: [
					{
						key: 'op1',
						type: '订购关系生效',
						name: '曲丽丽',
						status: 'agree',
						updatedAt: '2017-10-03  19:23:12',
						remark: '-'
					},
					{
						key: 'op2',
						type: '财务复审',
						name: '付小小',
						status: 'reject',
						updatedAt: '2017-10-03  19:23:12',
						remark: '不通过原因'
					},
					{
						key: 'op3',
						type: '部门初审',
						name: '周毛毛',
						status: 'agree',
						updatedAt: '2017-10-03  19:23:12',
						remark: '-'
					},
					{
						key: 'op4',
						type: '提交订单',
						name: '林东东',
						status: 'agree',
						updatedAt: '2017-10-03  19:23:12',
						remark: '很棒'
					},
					{
						key: 'op5',
						type: '创建订单',
						name: '汗牙牙',
						status: 'agree',
						updatedAt: '2017-10-03  19:23:12',
						remark: '-'
					}
				]
			}
		}
	}
</script>

<style scoped>

</style>