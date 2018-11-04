<template>
  <el-container class="todo-list-container">
    <el-main v-if="isEmpty" class="todo-list-empty">
      <div v-if="!isLoading">Nothing todo today, Yayy!!!</div>
    </el-main>
    <el-main v-if="!isEmpty" class="todo-list">
      <todo-item v-for="todo in todos" v-bind:key="todo._id" :todos="todos" :todo="todo">
      </todo-item>
    </el-main>
  </el-container>
</template>

<script src="../../controllers/TodoList.js"></script>

<style scoped>
  @import "../../assets/styles/todo-list.css";
</style>
