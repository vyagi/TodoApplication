import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todos: string[] = [];
  @Output() removeTodoClicked = new EventEmitter<number>()

  listVisible = true;

  removeButtonClicked(index: number) {
    this.removeTodoClicked.emit(index);
  }
}
