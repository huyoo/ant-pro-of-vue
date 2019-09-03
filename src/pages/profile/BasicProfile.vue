<!--基础详情页-->
<template>
  <page-view>
    <div class="ant-pro-profile" slot>
      <profile-list title="退款申请">
        <a-row slot="content">
          <a-col v-bind="this.colLayout">取货单号：1000000000</a-col>
          <a-col v-bind="this.colLayout">状态：已取货</a-col>
          <a-col v-bind="this.colLayout">销售单号：1234123421</a-col>
          <a-col v-bind="this.colLayout">子订单：3214321432</a-col>
        </a-row>
      </profile-list>

      <a-divider style="margin-bottom: 32px"/>

      <profile-list title="用户信息">
        <a-row slot="content">
          <a-col v-bind="this.colLayout">用户姓名：付小小</a-col>
          <a-col v-bind="this.colLayout">联系电话：18100000000</a-col>
          <a-col v-bind="this.colLayout">常用快递：菜鸟仓储</a-col>
          <a-col v-bind="this.colLayout">取货地址：浙江省杭州市西湖区万塘路18号</a-col>
          <a-col v-bind="this.colLayout">备注：无</a-col>
        </a-row>
      </profile-list>

      <a-divider style="margin-bottom: 32px"/>

      <div class="profile-list-table-title">退货商品</div>
      <a-table style="margin-bottom: 24px" row-key="id" :columns="goodsColumns" :dataSource="loadGoodsData"></a-table>

      <div class="profile-list-table-title">退货进度</div>
      <a-table style="margin-bottom: 24px" row-key="key" :columns="scheduleColumns"
               :dataSource="loadScheduleData"></a-table>
    </div>
  </page-view>
</template>

<script>
	import AListItem from "ant-design-vue/es/list/Item";
	import ProfileList from "@/components/ProfileList/ProfileList";
	import ARow from "ant-design-vue/es/grid/Row";
	import ACol from "ant-design-vue/es/grid/Col";
	import ProcessDot from "@/components/ProcessDot/ProcessDot";
	import PageView from "@/layouts/PageView";

	export default {
		name: "BasicProfile",
		components: {PageView, ProcessDot, ACol, ARow, AListItem, ProfileList},
		data() {
			return {
				colLayout: {
					xs: 8
				},
				goodsColumns: [
					{
						title: '商品编号',
						dataIndex: 'id',
						key: 'id',
						customRender: value => <a href="/">{value}</a>
					},
					{
						title: '商品名称',
						dataIndex: 'name',
						key: 'name'
					},
					{
						title: '商品条码',
						dataIndex: 'barcode',
						key: 'barcode'
					},
					{
						title: '单价',
						dataIndex: 'price',
						key: 'price',
						align: 'right'
					},
					{
						title: '数量（件）',
						dataIndex: 'num',
						key: 'num',
						align: 'right'
					},
					{
						title: '金额',
						dataIndex: 'amount',
						key: 'amount',
						align: 'right'
					}
				],
				// 加载数据方法 必须为 Promise 对象
				loadGoodsData: [
					{
						id: '1234561',
						name: '矿泉水 550ml',
						barcode: '12421432143214321',
						price: '2.00',
						num: '1',
						amount: '2.00'
					},
					{
						id: '1234562',
						name: '凉茶 300ml',
						barcode: '12421432143214322',
						price: '3.00',
						num: '2',
						amount: '6.00'
					},
					{
						id: '1234563',
						name: '好吃的薯片',
						barcode: '12421432143214323',
						price: '7.00',
						num: '4',
						amount: '28.00'
					},
					{
						id: '1234564',
						name: '特别好吃的蛋卷',
						barcode: '12421432143214324',
						price: '8.50',
						num: '3',
						amount: '25.50'
					}
				],
				scheduleColumns: [
					{
						title: '时间',
						dataIndex: 'time',
						key: 'time'
					},
					{
						title: '当前进度',
						dataIndex: 'rate',
						key: 'rate'
					},
					{
						title: '状态',
						dataIndex: 'status',
						key: 'status',
						customRender: value => <process-dot status={value}/>
					},
					{
						title: '操作员ID',
						dataIndex: 'operator',
						key: 'operator'
					},
					{
						title: '耗时',
						dataIndex: 'cost',
						key: 'cost'
					}
				],
				loadScheduleData: [
					{
						key: '1',
						time: '2017-10-01 14:10',
						rate: '联系客户',
						status: 'processing',
						operator: '取货员 ID1234',
						cost: '5mins'
					},
					{
						key: '2',
						time: '2017-10-01 14:05',
						rate: '取货员出发',
						status: 'success',
						operator: '取货员 ID1234',
						cost: '1h'
					},
					{
						key: '3',
						time: '2017-10-01 13:05',
						rate: '取货员接单',
						status: 'success',
						operator: '取货员 ID1234',
						cost: '5mins'
					},
					{
						key: '4',
						time: '2017-10-01 13:00',
						rate: '申请审批通过',
						status: 'success',
						operator: '系统',
						cost: '1h'
					},
					{
						key: '5',
						time: '2017-10-01 12:00',
						rate: '发起退货申请',
						status: 'success',
						operator: '用户',
						cost: '5mins'
					}
				]
			}
		}
	}
</script>

<style scoped lang="less">
  @import "../../common/base";

  .ant-pro-profile {
    padding: 12px;
    margin: 12px;
    background-color: white;
    .profile-list {
      .ant-row > div {
        font-size: 14px;
        line-height: 1.5;
        padding-bottom: 16px;
        color: @fontColor;
      }
    }

    .profile-list-table-title {
      font-size: 16px;
      line-height: 1.5;
      padding-bottom: 16px;
      color: @titleColor;
    }
  }

</style>