<template>
  <a-tabs default-active-key="1" class="advance-profile-tabs-table">
    <a-tab-pane tab="操作日志一" key="1">
      <operate-record1 key="table1"/>
    </a-tab-pane>
    <a-tab-pane tab="操作日志二" key="2">
      <operate-record1 key="table2"/>
    </a-tab-pane>
    <a-tab-pane tab="操作日志三" key="3">
      <operate-record1 key="table3"/>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
    import OperateRecord1 from "@/pages/profile/AdvanceTable/OperateRecord1";

    export default {
        name: "AdvanceProfileTabs",
        components: {OperateRecord1}
    }
</script>

<style scoped lang="less">
  .advance-profile-tabs-table {
    background-color: white !important;

    /deep/ .ant-tabs-tabpane {
      padding: 0 24px;
    }
  }
</style>
