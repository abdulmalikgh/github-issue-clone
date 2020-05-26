<template>
  <div class="container">
    <AppHeader />
    <div class="card" style="">
      <div class="card-header">
        all issues
      </div>
      <ul class="list-group ">
        <li class="list-group-item" v-for="issue in allIssues" :key="issue.id">
          <router-link
            :to="{ name: 'issue-detail', params: { id: issue.number } }"
          >
            {{ issue.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  components: {
    AppHeader
  },
  data() {
    return {
      allIssues: []
    }
  },
  mounted() {
    this.$http
      .get('https://api.github.com/repos/rails/rails/issues')
      .then(result => {
        console.log(result.data)
        this.allIssues = result.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style scoped>
ul li a {
  text-decoration: none;
}
</style>
