<template>
  <el-header class="todo-menu-container">
    <el-menu class="todo-el-menu"
             mode="horizontal" :default-active="'0'">
      <el-menu-item index="0">
        <router-link to="/">Home</router-link>
      </el-menu-item>
      <el-menu-item index="1">
        <router-link to="/about">About</router-link>
      </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>

</style>
