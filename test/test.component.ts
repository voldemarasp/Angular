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

  }

}
