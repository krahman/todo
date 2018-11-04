<template>
  <el-container class="todo-form-container">
    <el-main class="todo-form">
      <el-form :inline="true" class="todo-form-inline" @submit.prevent.native="addTodo">
        <el-row>
          <el-col :span="16">
            <el-input placeholder="Add new task here" v-model="todo.activity"
                      class="todo-form-input" ref="activity" autofocus="true"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" @click="addTodo" class="todo-form-button"
                       :disabled="!todo.activity">Add</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-main>
  </el-container>
</template>

<script src="../../controllers/TodoForm.js"></script>

<style scoped>
  @import "../../assets/styles/todo-form.css";
</style>
