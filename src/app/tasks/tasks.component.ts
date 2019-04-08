import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private data: TodoService) { }
  todos: any[] = this.data.getTodos();

  ngOnInit() {
  }
  deleteItem(id) {
    this.data.deleteTodo(id);
    return this.todos;
  }
}
