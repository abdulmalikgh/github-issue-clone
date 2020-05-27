<template>
  <div class="container">
    <AppHeader @issue-data="receiveSearchText" />
    <div class="" v-if="!allIssues">..loading</div>
    <div class="card">
      <div class="card-header">all issues</div>
      <ul class="list-group my-0 py-0">
        <li
          class="list-group-item pt-0 pb-1 my-0"
          v-for="issue in filteredIssues"
          :key="issue.id"
        >
          <router-link
            class="link"
            :to="{ name: 'issue-detail', params: { id: issue.number } }"
          >
            <p class="py-0 my-0">{{ issue.title }}</p>
            <span
              >#{{ issue.number }} {{ issue.state }} by
              {{ issue.user.login }}</span
            >
            <span class="comment">{{
              issue.comments > 0 ? issue.comments : ''
            }}</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="pagination">
      <button @click="decreasePage">Previous</button>
      <button @click="increasePage">Next</button>
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
      allIssues: [],
      currentPage: 1,
      searchText: ''
    }
  },
  methods: {
    receiveSearchText(value) {
      this.searchText = value
    },
    getIssues() {
      this.$http
        .get(
          `https://api.github.com/repos/rails/rails/issues?page=${this.currentPage}`
        )
        .then(result => {
          this.allIssues = result.data.slice(0, 15)
        })
        .catch(err => console.log(err))
    },
    increasePage() {
      this.currentPage += 1
      return this.getIssues()
    },
    decreasePage() {
      if (this.currentPage <= 1) {
        return this.currentPage
      } else {
        this.currentPage -= 1
        return this.getIssues()
      }
    }
  },
  created() {
    this.getIssues()
  },
  computed: {
    filteredIssues: function() {
      if (!this.allIssues) {
        return
      } else {
        return this.allIssues.filter(issue => {
          return issue.title.match(this.searchText)
        })
      }
    }
  }
}
</script>

<style scoped>
.link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
li:hover {
  background-color: #f6f8fa;
}
span {
  opacity: 0.6;
  font-size: 0.8em;
}
.comment {
  float: right;
}
</style>
