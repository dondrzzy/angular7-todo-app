import { Component, OnInit } from '@angular/core';

import { Todo } from './../../../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] = [];
    

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: 'Wake up',
        completed: true,
      },
      {
        id: 2,
        title: 'Brush',
        completed: true,
      },
      {
        id: 3,
        title: 'Take breakfast',
        completed: false,
      },
    ];
  }

}
