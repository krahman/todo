import Api from '@/services/Api';

export default {
  /**
   * Remote call to fetch todo list
   * @return {*}
   */
  fetchTodos() {
    return Api()
      .get('todos');
  },
  /**
   * Remote call to add new todo
   * @param todo
   * @return {*}
   */
  async addTodo(todo) {
    return Api()
      .post('todos', todo);
  },
  /**
   * Remote call to update exiting todo
   * @param todo
   * @return {AxiosPromise<any> | IDBRequest | Promise<void>}
   */
  updateTodo(todo) {
    return Api()
      .put('todos', todo);
  },
  /**
   * Remote call to remove todo by id
   * @param id
   * @return {*}
   */
  removeTodo(id) {
    return Api()
      .delete('todos', {
        data: id,
      });
  },
};
