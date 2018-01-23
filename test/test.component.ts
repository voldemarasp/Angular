import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	joke:any;
	jokeCat:any;
	jokeCatList:any;
	jokes:any;

	constructor(private tS: TestService) { 



	}

	ngOnInit() {

	this.tS.getJoke().subscribe(

	result => {this.joke = result},
	err => {console.log(err)}

	);

	this.tS.getJokeCat().subscribe(

	result => {this.jokeCat = result},
	err => {console.log(err)}

	);

	this.tS.getAllCategories().subscribe(

	result => {this.jokeCatList = result},
	err => {console.log(err)}

	);

	this.tS.getDog().subscribe(

	result => {this.dogs = result['message']},
	err => {console.log(err)}

	);

	this.tS.onloadFun().subscribe(

			result => {this.testas = result},
			err => {console.log(err)}

			); 

	}

	categoryChanged(value:any) {

		this.tS.getCategoryJoke(value).subscribe(

			result => {this.joke = result},
			err => {console.log(err)}

			);

	}

	searchJoke(value:any) {
		if (value.length > 3) {
			this.tS.getJokesByValue(value).subscribe(

			result => {this.jokes = result['result']},
			err => {console.log(err)}

			);
		}
	}

}