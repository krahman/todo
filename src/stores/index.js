/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import Vuex from 'vuex';
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO } from '@/stores/mutation-types';
import { FETCH_TODO } from '@/stores/action-types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    todo: {
      activity: '',
      completed: false,
    },
  },
  mutations: {
    /**
     * To fetch todo list
     * @param state
     * @param todos
     */
    [FETCH_TODO](state, todos) {
      state.todos = todos;
    },
    /**
     * To add new todo to state
     * @param state
     * @param todo
     */
    [ADD_TODO](state, todo) {
      state.todos.unshift(todo);
      state.todo = {
        activity: '',
        completed: false,
      };
    },
    /**
     * To remove todo from state
     * @param state
     * @param todo
     */
    [REMOVE_TODO](state, todo) {
      const { _id } = todo;
      state.todos = state.todos.filter(item => item._id !== _id);
    },
    /**
     * To update todo within current state
     * @param state
     * @param todo
     */
    [UPDATE_TODO](state, todo) {
      const { _id } = todo;
      state.todos = state.todos.map((item) => {
        if (item._id === _id) {
          return todo;
        }
        return item;
      });
    },
  },
});
