import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TodoService {

	todoRow: any;
	constructor(private afd: AngularFireDatabase) { 

		this.todoRow = afd.list('todo');

	}

	getAllTodo() {
		return this.todoRow.snapshotChanges().map(changes => {
      	return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
	}

	getOneTodo(key: string) {

		const todoPath = `todo/${key}`;
		return this.afd.object(todoPath);

	}

	updateTodo(key: string, form: any) {
		this.todoRow.update(key, form);
	}

	createTodo(form: any) {
		this.todoRow.push(form);
	}

}


