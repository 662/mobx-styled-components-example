import { observable, action } from "mobx";

let todos = observable([]);

todos.append = action(function(todo) {
  todos.push(todo);
});

todos.changeComplate = action(function(i, complated) {
  todos[i].complated = complated;
});

export default todos;
