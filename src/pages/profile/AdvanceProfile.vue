<!--高级详情页-->
<template>
  <div class="antd-advance-profile">
    <div class="profile-page-header">
      <breadcrumb-pro/>
      <div>
        <a-row>
          <a-col v-bind="this.colLayout">创建人：曲丽丽</a-col>
          <a-col v-bind="this.colLayout">订购产品：XX 服务</a-col>
          <a-col v-bind="this.colLayout">创建时间：2017-07-07</a-col>
          <a-col v-bind="this.colLayout">联单据：12421</a-col>
          <a-col v-bind="this.colLayout">生效日期：2017-07-07 ~ 2017-08-08</a-col>
          <a-col v-bind="this.colLayout">备注：请于两个工作日内确认</a-col>
        </a-row>
      </div>
    </div>

    <a-tabs default-active-key="1" class="profile-tabs">
      <a-tab-pane tab="详情" key="1"></a-tab-pane>
      <a-tab-pane tab="规则" key="2"></a-tab-pane>
    </a-tabs>

    <div style="margin: 12px 24px">
      <a-card title="流程进度">
        <a-steps progressDot :current="1">
          <a-step>
            <span style="font-size: 14px" slot="title">创建项目</span>
            <template slot="description">
              <div style="font-size: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;"
                   slot="description">
                <div style="margin: 8px 0 4px">
                  曲丽丽
                  <a-icon style="margin-left: 8px" type="dingding-o"/>
                </div>
                <div>2016-12-12 12:32</div>
              </div>
            </template>
          </a-step>
          <a-step title="部门初审">
            <span style="font-size: 14px" slot="title">部门初审</span>
            <template slot="description">
              <div style="fontSize: 12px; color: rgba(0, 0, 0, 0.45); position: relative; left: 42px;text-align: left;"
                   slot="description">
                <div style="margin: 8px 0 4px">
                  周毛毛
                  <a-icon style="margin-left: 8px; color: #00A0E9" type="dingding-o"/>
                </div>
                <div><a href="">催一下</a></div>
              </div>
            </template>
          </a-step>
          <a-step title="财务复核">
            <span style="font-size: 14px" slot="title">财务复核</span>
          </a-step>
          <a-step title="完成">
            <span style="font-size: 14px" slot="title">完成</span>
          </a-step>
        </a-steps>
      </a-card>

      <a-card title="用户信息" style="margin-top: 24px">
        <a-row>
          <a-col v-bind="this.colLayout">用户姓名：付小小</a-col>
          <a-col v-bind="this.colLayout">会员卡号：32943898021309809423</a-col>
          <a-col v-bind="this.colLayout">身份证：3321944288191034921</a-col>
          <a-col v-bind="this.colLayout">联系方式：18112345678</a-col>
          <a-col :span="12">联系地址：曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口</a-col>
        </a-row>
        <profile-list title="信息组" style="margin-top: 12px">
          <a-row slot="content">
            <a-col v-bind="this.colLayout">某某数据：725</a-col>
            <a-col v-bind="this.colLayout">该数据更新时间：2017-08-08</a-col>
            <a-col v-bind="this.colLayout">某某数据：725</a-col>
            <a-col v-bind="this.colLayout">该数据更新时间：2017-08-08</a-col>
          </a-row>
        </profile-list>

        <div style="margin-bottom: 12px">信息组</div>
        <a-card title="多层信息组"  :headStyle="{backgroundColor: '#fafafa'}">
          <profile-list title="组名称">
            <a-row slot="content">
              <a-col v-bind="this.colLayout">负责人：林东东</a-col>
              <a-col v-bind="this.colLayout">角色码：1234567</a-col>
              <a-col v-bind="this.colLayout">所属部门：XX公司 - YY部</a-col>
              <a-col v-bind="this.colLayout">过期时间：2017-08-08</a-col>
              <a-col :span="12">描述：这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长...</a-col>
            </a-row>
          </profile-list>

          <a-divider style="margin-bottom: 32px"/>

          <profile-list title="组名称" style="margin-top: 12px">
            <a-row slot="content">
              <a-col :span="24">学名：Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗..</a-col>
            </a-row>
          </profile-list>

          <a-divider style="margin-bottom: 32px"/>

          <profile-list title="组名称" style="margin-top: 12px">
            <a-row slot="content">
              <a-col v-bind="this.colLayout">负责人：付小小</a-col>
              <a-col v-bind="this.colLayout">角色码：1234568</a-col>
            </a-row>
          </profile-list>
        </a-card>
      </a-card>

      <a-card title="用户近半年来电记录" style="margin-top: 24px"></a-card>

      <div style="margin-top: 24px">
        <advance-profile-tabs/>
      </div>
    </div>
  </div>
</template>

<script>
	import PageView from "@/layouts/PageView";
	import BreadcrumbPro from "@/components/BreadcrumbPro/BreadcrumbPro";
	import ProfileList from "@/components/ProfileList/ProfileList";
  import AdvanceProfileTabs from "@/pages/profile/AdvanceTable/AdvanceProfileTabs";

	export default {
		name: "AdvanceProfile",
		components: {AdvanceProfileTabs, ProfileList, BreadcrumbPro, PageView},
		data() {
			return {
				colLayout: {span: 12}
			}
		}
	}
</script>

<style scoped lang="less">
  @import "AdvanceProfile.less";

  .profile-tabs {
    background-color: white !important;
  }

  .ant-tabs-bar {
    margin-bottom: 0 !important;
  }

  .ant-row > div {
    font-size: 14px;
    line-height: 1.5;
    padding-bottom: 16px;
    color: @fontColor;
  }
</style>