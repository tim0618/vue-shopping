<script setup>
import HomepageHeader from './components/appvue/HomepageHeader.vue'
import HomepageFooter from './components/appvue/HomepageFooter.vue'
</script>

<template>
  <HomepageHeader />
  <div class="body">
    <RouterView />
  </div>
  <!-- <HomepageFooter /> -->
</template>

<style scoped>
/* .body {
  min-height: 80%;
} */
</style>
