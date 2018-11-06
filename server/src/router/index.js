const TodoServices = require('../services/TodoServices');

module.exports = (app) => {
  app.route('/todos')
    .get(TodoServices.getTodos)
    .post(TodoServices.addTodo)
    .delete(TodoServices.removeTodo)
    .put(TodoServices.updateTodo);
};
