import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//import * as globals from '../../globals';


@Injectable()
/*export*/ class WeatherProvider {

  constructor(public http: Http) {}
/*
  public getAll () :any {
  	return this.http.get(globals.API_KEY_ALTERNMUSIQUE)
  		.map(res => res.json());
  }
*/
}