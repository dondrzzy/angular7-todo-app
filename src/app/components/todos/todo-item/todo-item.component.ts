import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/todos';

@Component({
  selector: '[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit() {
    console.log(this.todo);
  }

  handleToggle() {
    this.todo.completed = !this.todo.completed;
  }

  handleDelete(todo) {
    console.log('delete')
  }

}
