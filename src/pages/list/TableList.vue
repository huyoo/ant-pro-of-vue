<template>
  <div class="table-list">
    <a-form>
      <a-row>
        <a-col :sm="24" :md="8">
          <a-form-item label="规则名称">
            <a-input v-decorator="['name']" placeholder="请输入" style="width: 100%;"/>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">全部</a-select-option>
              <a-select-option value="1">关闭</a-select-option>
              <a-select-option value="2">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="调用次数">
            <a-input-number v-decorator="['number']" placeholder="请输入" style="width: 100%"/>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="更新日期">
            <a-date-picker v-decorator="['date']" placeholder="请输入更新日期" style="width: 100%"></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">关闭</a-select-option>
              <a-select-option value="1">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="8" v-if="showAdvanceFrom">
          <a-form-item label="使用状态">
            <a-select v-decorator="['status4']" placeholder="请选择" style="width: 100%">
              <a-select-option value="0">关闭</a-select-option>
              <a-select-option value="1">运行中</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :sm="24" :md="showAdvanceFrom ? 24: 8"
               :style="{textAlign:showAdvanceFrom ? 'right' :'left', paddingRight: '12px'}">
          <a-button type="primary">查询</a-button>
          <a-button>重置</a-button>
          <span v-if="showAdvanceFrom" class="btn" @click="toggleForm">收起<a-icon type="up"/></span>
          <span v-else="showAdvanceFrom" class="btn" @click="toggleForm">展开<a-icon type="down"/></span>
        </a-col>
      </a-row>
    </a-form>
    <div style="margin-bottom: 10px">
      <a-button type="primary">
        <a-icon type="plus"/>
        新增
      </a-button>
    </div>
    <a-table row-key="key" :columns="columns" :dataSource="data"/>
  </div>
</template>

<script>
    import AFormItem from "ant-design-vue/es/form/FormItem";
    import ARow from "ant-design-vue/es/grid/Row";
    import ACol from "ant-design-vue/es/grid/Col";
    import moment from "moment";

    export default {
        name: "TableList",
        components: {ACol, ARow, AFormItem},
        data() {
            return {
                columns: [
                    {
                        title: '规则编号',
                        dataIndex: 'name'
                    },
                    {
                        title: '描述',
                        dataIndex: 'desc',
                    },
                    {
                        title: '服务调用次数',
                        dataIndex: 'callNo',
                        sorter: true,
                        needTotal: true,
                        customRender: (text) => text + ' 次'
                    },
                    {
                        title: '状态',
                        dataIndex: 'status',
                    },
                    {
                        title: '上次调度时间',
                        dataIndex: 'updatedAt',
                        sorter: true,
                        customRender: value => moment(value).format('YYYY-MM-DD HH:mm:ss')
                    },
                    {
                        title: '操作',
                        dataIndex: 'action',
                        width: '150px',
                        scopedSlots: {customRender: 'action'}
                    }
                ],
                data: [
                    {
                        "key": 22,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
                        "name": "TradeCode 22",
                        "title": "一个任务名称 22",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 13,
                        "status": 1,
                        "updatedAt": "2017-07-12T00:00:00.000Z",
                        "createdAt": "2017-07-12T00:00:00.000Z",
                        "progress": 24
                    }, {
                        "key": 45,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
                        "name": "TradeCode 45",
                        "title": "一个任务名称 45",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 20,
                        "status": 2,
                        "updatedAt": "2017-07-23T00:00:00.000Z",
                        "createdAt": "2017-07-23T00:00:00.000Z",
                        "progress": 78
                    }, {
                        "key": 35,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
                        "name": "TradeCode 35",
                        "title": "一个任务名称 35",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 27,
                        "status": 1,
                        "updatedAt": "2017-07-18T00:00:00.000Z",
                        "createdAt": "2017-07-18T00:00:00.000Z",
                        "progress": 86
                    }, {
                        "key": 44,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
                        "name": "TradeCode 44",
                        "title": "一个任务名称 44",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 32,
                        "status": 2,
                        "updatedAt": "2017-07-23T00:00:00.000Z",
                        "createdAt": "2017-07-23T00:00:00.000Z",
                        "progress": 77
                    }, {
                        "key": 36,
                        "disabled": true,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png",
                        "name": "TradeCode 36",
                        "title": "一个任务名称 36",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 60,
                        "status": 1,
                        "updatedAt": "2017-07-19T00:00:00.000Z",
                        "createdAt": "2017-07-19T00:00:00.000Z",
                        "progress": 38
                    }, {
                        "key": 19,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
                        "name": "TradeCode 19",
                        "title": "一个任务名称 19",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 66,
                        "status": 1,
                        "updatedAt": "2017-07-10T00:00:00.000Z",
                        "createdAt": "2017-07-10T00:00:00.000Z",
                        "progress": 18
                    }, {
                        "key": 43,
                        "disabled": false,
                        "href": "https://ant.design",
                        "avatar": "https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png",
                        "name": "TradeCode 43",
                        "title": "一个任务名称 43",
                        "owner": "曲丽丽",
                        "desc": "这是一段描述",
                        "callNo": 70,
                        "status": 0,
                        "updatedAt": "2017-07-22T00:00:00.000Z",
                        "createdAt": "2017-07-22T00:00:00.000Z",
                        "progress": 29
                    },
                ],
                form: this.$form.createForm(this),
                value: 1,
                showAdvanceFrom: false
            }
        },
        methods: {
            toggleForm() {
                this.showAdvanceFrom = !this.showAdvanceFrom;
            },
        }
    }
</script>

<style scoped lang="less">
  .table-list {
    padding: 24px;

    .btn {
      color: #1890ff;
      cursor: pointer;
    }

    /deep/ .ant-form-item {
      width: 90%;
      display: inline-block;

      .ant-form-item-control-wrapper {
        display: inline-block;
        width: 75%;
      }
    }
  }
</style>
