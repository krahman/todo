<template>
  <el-row class="todo-item">
    <el-col :span="1">
      <el-checkbox v-model="todo.completed" :checked="todo.completed"
                   @change="updateTodo(todo)"/>
    </el-col>
    <el-col :span="22">{{todo.activity}}</el-col>
    <el-col :span="1">
      <i class="el-icon-close" @click="removeTodo(todo)"></i>
    </el-col>
  </el-row>
</template>

<script src="../../controllers/TodoItem.js"></script>

<style scoped>
  @import "../../assets/styles/todo-item.css";
</style>
