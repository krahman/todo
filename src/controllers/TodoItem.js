import TodoService from '@/services/TodoService';
import { REMOVE_TODO, UPDATE_TODO } from '@/stores/mutation-types';

export default {
  name: 'TodoItem',
  props: ['todo', 'todos'],
  methods: {
    async updateTodo(todo) {
      const response = await TodoService.updateTodo(todo);
      this.$store.commit(UPDATE_TODO, response.data);
    },
    async removeTodo(todo) {
      const { _id } = todo;
      const response = await TodoService.removeTodo({ _id });
      this.$store.commit(REMOVE_TODO, response.data);

      this.$message({
        type: 'success',
        message: 'Task has been removed successfully.',
      });
    },
  },
};
