<template>
  
     <appHeader />
  
</template>

<script>

import appHeader from '../components/appHeader.vue'

export default {

  name: 'Home',
  components: {
    appHeader,
  },
  data() {
    return {}
  },
  created() {
    this.$store.dispatch('fetchMovies');
  }
}
</script>
