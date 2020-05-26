<template>
  <div class="container">
    <div class="card">
      <h5 class="card-header">Featured</h5>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      {{ issue }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IssueDetail',
  props: ['id'],
  data() {
    return {
      issue: null
    }
  },
  mounted() {
    this.$http
      .get(`https://api.github.com/repos/rails/rails/issues/${this.id}`)
      .then(result => {
        console.log(result.data)
        this.issue = result.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style></style>
