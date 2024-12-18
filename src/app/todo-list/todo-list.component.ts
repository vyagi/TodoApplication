import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: Todo[] = [];
  @Output() completedTodoClicked = new EventEmitter<Todo>()
  @Output() removeTodoClicked = new EventEmitter<Todo>()

  listVisible = true;

  removeButtonClicked(todoItem: Todo) {
    this.removeTodoClicked.emit(todoItem);
  }

  completionClicked(todoItem: Todo) {
    this.completedTodoClicked.emit(todoItem);
  }
}
