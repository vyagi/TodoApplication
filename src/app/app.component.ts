import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { Todo, TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.refreshTodos();
  }

  newTodoItem = "";

  addNewTodoItem() {
    this.todoService.addTodo(this.newTodoItem).subscribe(_ => this.refreshTodos());
    this.newTodoItem = "";
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(_ => this.refreshTodos());
  }

  removeTodo(todo: Todo) {
    this.todoService.removeTodo(todo).subscribe(_ => this.refreshTodos());
  }

  private refreshTodos() {
    this.todoService.getTodos().subscribe(x => 
      this.todoList = x
    )  
  }
}
