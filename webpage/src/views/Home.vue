<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <HomeComponent msg="All your portfolio in one"/>
  </div>
</template>

<script>
import Home from '@/components/Home.vue';

export default {
  name: 'Home',
  components: {
    HomeComponent: Home,
  },
};
</script>
