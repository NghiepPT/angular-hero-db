import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Array<any>;
  constructor(private _dataService:DataService) { }

  ngOnInit() {
    this.getHeroes();
  }
 getHeroes(): void {
   this._dataService.getHeroes().subscribe(res=>this.heroes = res.slice(1,5));
 }
}
