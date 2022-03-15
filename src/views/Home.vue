<template>
  <div class="home">
     <h1>erdi hello</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchMovies');
  }
}
</script>
