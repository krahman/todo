<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from '@/components/header/Menu';

export default {
  name: 'App',
  components: { Menu },
};
</script>

<style>
  @import "../assets/styles/app.css";
</style>
