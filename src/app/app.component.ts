import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList = [
    "Learn Angular",
    "Have fun using it"
  ]

  newTodoItem = "";

  addNewTodoItem() {
    this.todoList.push(this.newTodoItem);
    this.newTodoItem = "";
  }

  removeTodo(event: number) {
    this.todoList.splice(event, 1);
  }
}
