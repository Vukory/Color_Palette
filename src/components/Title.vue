<template>
  <div class="title">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    message: String
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
