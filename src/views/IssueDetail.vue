<template>
  <div class="container">
    <img src />
    <div class="card">
      <h5 class="card-header">
        <span>{{ issue ? issue.user.login : '' }} comment</span>
      </h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">{{ issue ? issue.body : '' }}</p>
      </div>
    </div>

    <div class="card m-3" v-for="comment in comments" :key="comment.id">
      <h5 class="card-header">
        <span>{{comment.user.login}} commented</span>
      </h5>
      <div class="card-body">
        <p class="card-text">{{comment.body}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueDetail',
  props: ['id'],
  data() {
    return {
      issue: null,
      comments: null
    }
  },
  methods: {
    getUser() {
      this.$http
        .get(`https://api.github.com/repos/rails/rails/issues/${this.id}`)
        .then(result => {
          this.issue = result.data
        })
        .catch(err => console.log(err))
    },
    getComments() {
      this.$http
        .get(
          `https://api.github.com/repos/rails/rails/issues/${this.id}/comments`
        )
        .then(result => {
          console.log(result.data)
          this.comments = result.data
        })
        .catch(err => console.log(err))
    }
  },
  computed: {},
  mounted() {
    this.getUser()
    this.getComments()
  }
}
</script>

<style></style>
