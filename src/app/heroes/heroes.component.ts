import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import{DataService} from '../data.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    hero: Hero = {
        id: 1,
        name: 'Windstorm'
      };
     
      heroes:Array<any>;
  constructor(private _dataService:DataService) { 
     
  }

  ngOnInit() {
      this.getHeroes();
  }
  getHeroes():void {

    this._dataService.getHeroes().subscribe(res=>this.heroes=res);
  }
  selectedHero: Hero;
  onSelect(hero:Hero):void {
      this.selectedHero = hero;
  }

}