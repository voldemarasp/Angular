import { Component, OnInit } from '@angular/core';

//mano
import { TodoService } from './shared/todo.service';

//

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

	todos:any;

  constructor(private tS: TodoService) { }

  ngOnInit() {

  	this.todos = this.tS.getAllTodo();

  }



}
