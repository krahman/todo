import TodoService from '@/services/TodoService';
import TodoItem from '@/components/todo/TodoItem';
import { FETCH_TODO } from '@/stores/action-types';

export default {
  name: 'TodoList',
  data() {
    return {
      isLoading: false,
    };
  },
  components: {
    TodoItem,
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    isEmpty() {
      return this.$store.state.todos.length < 1;
    },
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      this.isLoading = true;
      const response = await TodoService.fetchTodos();
      this.$store.commit(FETCH_TODO, response.data);
      this.isLoading = false;
    },
  },
};
