import TodoService from '@/services/TodoService';
import { ADD_TODO } from '@/stores/mutation-types';

export default {
  name: 'TodoForm',
  computed: {
    todo() {
      return this.$store.state.todo;
    },
  },
  methods: {
    async addTodo() {
      if (!this.todo.activity) {
        this.$message({
          type: 'error',
          message: 'Task can not be empty.',
        });
      } else {
        const response = await TodoService.addTodo({
          activity: this.todo.activity,
          completed: false,
        });
        this.$store.commit(ADD_TODO, response.data);
      }
      this.$refs.activity.focus();
    },
  },
};
