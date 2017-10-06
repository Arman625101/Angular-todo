import { Component } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todos = [];
  renamedValue: string;
  nameControl = new FormControl('', [
    Validators.required
  ]);
  renameControl = new FormControl('', [
    Validators.required
  ])
  
  addTodo(name:string) {
    if (name) {
      this.todos.push({
        name: name,
        editable: false
      })
    }
  }
  
  deleteTodo(todo) {
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
  editTodo(todo) {
    todo.editable = !todo.editable;

  }
  renameTodo(todo, renameVal) {
    if (renameVal) {
      todo.name = renameVal;
      todo.editable = false;
    }
  }

}
