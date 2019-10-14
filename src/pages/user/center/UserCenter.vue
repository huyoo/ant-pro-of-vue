<template>
  <div class="ant-pro-user-center">
    <a-row :gutter="24">
      <a-col :md="24" :lg="7">
        <a-card :bordered="false">
          <div class="account-center-avatarHolder">
            <div class="avatar">
              <img src="avatar()">
            </div>
            <div class="username">{{ nickname }}</div>
            <div class="bio">海纳百川，有容乃大</div>
          </div>
          <div class="account-center-detail">
            <p>
              <i class="title"></i>交互专家
            </p>
            <p>
              <i class="group"></i>蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED
            </p>
            <p>
              <i class="address"></i>
              <span>浙江省</span>
              <span>杭州市</span>
            </p>
          </div>
          <a-divider/>

          <a-divider :dashed="true"/>

        </a-card>
      </a-col>
      <a-col :md="24" :lg="17">
        <a-card :tab-list="tabList" :active-tab-key="activeKey" @tabChange="this.onTabChange">
          <Article v-if="activeKey === 'article'"/>
          <Application v-else-if="activeKey === 'app'"/>
          <Project v-else-if="activeKey === 'project'"/>
          <ProjectLog v-else/>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
	import Article from "@/pages/user/center/Article";
	import Application from "@/pages/user/center/Application";
	import Project from "@/pages/user/center/Project";
  import ProjectLog from "@/pages/user/center/ProjectLog";

	export default {
		name: "UserCenter",
		components: {ProjectLog, Project, Application, Article},
		data() {
			return {
				nickname: "test",
				activeKey: 'article',
				tabList: [
					{
						key: 'article',
						tab: '文章(8)'
					},
					{
						key: 'app',
						tab: '应用(8)'
					},
					{
						key: 'project',
						tab: '项目(8)'
					},
					{
						key: 'log',
						tab: '项目更新日志'
					}
				],
			}
		},
		methods: {
			onTabChange(key) {
				this.activeKey = key
			}
		}
	}
</script>

<style scoped lang="less">
  @import "UserCenter.less";
</style>