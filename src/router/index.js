import Vue from 'vue'
import Router from 'vue-router'
import IssueDetail from '../views/IssueDetail.vue'
import IssueList from '../views/IssueList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'issuelist',
      component: IssueList
    },
    {
      path: '/issue/:id',
      name: 'issue-detail',
      props: true,
      component: IssueDetail
    }
  ]
})
