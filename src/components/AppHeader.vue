<template>
  <div class="mt-5">
    <div class="container">
      <form>
        <div class="md-form active-pink active-pink-2 mb-3 mt-0">
          <input
            class="form-control"
            type="text"
            placeholder="Search for an issue"
            aria-label="Search"
            v-model="issue"
          />
        </div>
      </form>
    </div>
    {{ issue }}
  </div>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      issue: ''
    }
  }
}
</script>

<style></style>
