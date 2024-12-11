import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [
    "Learn Angular",
    "Have fun using it"
  ]

  getTodos(): string[] {
    return this.todoList;
  }

  addTodo(todo: string): void {
    this.todoList.push(todo);
  }

  removeTodo(index: number): void {
    this.todoList.splice(index, 1);
  }
}
