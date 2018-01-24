import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo';

import { NgForm } from '@angular/forms';

import { TodoService } from '../shared/todo.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

	todo:Todo = new Todo();
	key: any;


	constructor(private tS: TodoService, private router:Router, private activatedRoute:ActivatedRoute) {


	}

	ngOnInit() {

		this.activatedRoute.params.subscribe( params => {
			this.key = params['key'];
			if(!this.key) {
				return;
			}
			this.tS.getOneTodo(this.key).snapshotChanges().subscribe(

				result => { this.todo = result.payload.val(); },
				err => {console.log(err)}

				);
		});
	}


	onSubmit(pav: any) {
		if (!this.key) {
			this.tS.createTodo(pav.value);
		} else {
			this.tS.updateTodo(this.key, pav.value);
		}
		this.router.navigate(['/']);
	}

}
