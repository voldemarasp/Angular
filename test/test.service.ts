import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';



@Injectable()
export class TestService {

  constructor(private http: Http) { }

  getJoke() {
  	return this.http.get('https://api.chucknorris.io/jokes/random').map( (response: Response) => { 

  		console.log(response.json()); 
  		return response.json(); 
  	});
  }

    getJokeCat() {
  	return this.http.get('https://api.chucknorris.io/jokes/random?category=food').map( (response: Response) => { 

  		console.log(response.json()); 
  		return response.json(); 
  	});
  }

}
