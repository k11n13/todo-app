import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: any[] = [
    {id: 1, title: 'example'}
  ];

  constructor() { }
  getTodos() {
    return this.todos;
  }
  addTodo(id: number, title: string) {
    return this.todos.push({id, title});
  }
  deleteTodo(id: number) {
    const index = id - 1;
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    return this.todos;
  }
}
