import { Injectable } from '@angular/core';
import {Http,Headers, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Hero } from './hero';

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};
@Injectable()
export class DataService {

  result:any;
  hero:any;

  private heroesUrl = '/api/heroes';
  constructor( private _http: Http) { }
  getHeroes()
  {
    return this._http.get("/api/heroes").map(result => this.result= result.json().data);
  }
  getHero(id:number){
   const url = `/detail/${id}`;
   return this._http.get(url).map(hero=> this.hero =  hero.json().data); 
  }
    /** POST: add a new hero to the server */
    addHero (hero: any) {
      const url = '/addHero';
      return this._http.post(url, hero, httpOptions);
    }
  
}
