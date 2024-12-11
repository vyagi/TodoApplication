import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: string[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }

  newTodoItem = "";

  addNewTodoItem() {
    this.todoService.addTodo(this.newTodoItem);
    this.newTodoItem = "";
  }

  removeTodo(event: number) {
    this.todoService.removeTodo(event);
  }
}
