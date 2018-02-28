import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  BtnTxt: string = "Add Hero!";
  itemCount: number;
  newHero: string = "Green Lantern";
  Heros = [];

  constructor() { }
  ngOnInit() {
    this.itemCount = this.Heros.length;
  }
  addHero() {
    this.Heros.push(this.newHero);
    this.newHero = '';
    this.itemCount = this.Heros.length;
  }
  
}
