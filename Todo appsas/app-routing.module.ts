import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './todo-list/form/form.component';

const routes: Routes = [
	{ path: '' , component: TodoListComponent },
	{ path: 'create', component: FormComponent },
	{ path: 'edit/:key', component: FormComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
