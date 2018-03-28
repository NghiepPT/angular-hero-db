import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import {DataService} from '../data.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroes: Array<any>;
  detail:any;
 
  constructor(
    private route: ActivatedRoute,
    private dataService:DataService,
    private location: Location
  ) { }
 
  ngOnInit(): void {
    this.getHero();
  }
  getHero():void{
    const id =+ this.route.snapshot.paramMap.get('id');
    this.dataService.getHero(id).subscribe(res=>this.heroes=res); 
  }
 
  goBack():void{
    this.location.back();
  }
}