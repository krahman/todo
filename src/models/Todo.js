export default class Todo {
  constructor({ activity = null, completed = false }) {
    this.activity = activity;
    this.completed = completed;
  }
}

export const addTodo = (todo) => {
  const { activity, completed } = todo;

  return Object.freeze(new Todo({ activity, completed }));
};
