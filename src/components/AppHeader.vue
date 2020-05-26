<template>
  <div class="mt-5">
    <div class="container">
      <form>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon1"
              @click="passSearchText"
            >Search</button>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="search issue"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
            v-model="issue"
          />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      issue: ''
    }
  },
  methods: {
    passSearchText() {
      this.$emit('issue-data', this.issue)
    }
  }
}
</script>

<style></style>
