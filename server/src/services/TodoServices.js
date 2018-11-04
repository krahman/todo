const Todo = require('../models/Todo');

const service = {
  getTodos(req, res) {
    Todo.find({}, 'activity completed', (error, todos) => {
      if (error) console.error(error);

      res.send(todos);
    })
      .sort({ _id: -1 });
  },

  addTodo(req, res) {
    const { activity, completed = false } = req.body;

    const newTodo = new Todo({
      activity,
      completed,
    });

    newTodo.save((error, todo) => {
      if (error) {
        console.log(error);
      }

      res.send(todo);
    });
  },

  updateTodo(req, res) {
    const { _id, activity, completed } = req.body;
    Todo.findOneAndUpdate(
      { _id },
      {
        $set: {
          activity,
          completed,
        },
      },
      { new: true },
      (error, todo) => {
        if (error) console.log(error);

        res.send(todo);
      });
  },

  removeTodo(req, res) {
    const { _id } = req.body;
    Todo.findOneAndRemove({ _id }, (error, todo) => {
      if (error) console.log(error);

      res.send({ _id: todo._id, message: 'Todo has been deleted.' });
    });
  },
};

module.exports = service;
