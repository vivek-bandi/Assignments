/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
let arr = [];
class Todo {
  constructor() {
    this.arr = [];
  }
  add(a) {
    this.arr.push(a);
  }
  remove(a) {
    this.arr.splice(a, 1);
  }
  update(index, value) {
    if (index >= 0 && index < this.arr.length) {
      this.arr[index] = value;
    }
  }
  get(index) {
    if (index >= 0 && index < this.arr.length) {
      let i = this.arr[index];
      return i;
    }
    return null;
  }
  clear() {
    this.arr = [];
  }
  getAll() {
    return this.arr;
  }
}
let todoList = new Todo();
module.exports = Todo;
