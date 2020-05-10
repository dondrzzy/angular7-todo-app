import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from '../components/todos/index/todos.component';

const routes: Routes = [
    {
        path: '',
        component: TodosComponent,
    },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
