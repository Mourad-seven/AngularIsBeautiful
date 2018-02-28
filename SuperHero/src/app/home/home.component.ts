import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('Heros', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .5}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('1s ease-out', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(10px)', offset: .5}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ])

  ]
})
export class HomeComponent implements OnInit {

  BtnTxt: string = "Add Hero!";
  itemCount: number;
  newHero: string = "Green Lantern";
  Heros = ["Deadpool","Wolverine","Moi"];

  constructor() { }
  ngOnInit() {
    this.itemCount = this.Heros.length;
  }
  addHero() {
    this.Heros.push(this.newHero);
    this.newHero = '';
    this.itemCount = this.Heros.length;
  }

  removeHero(i) {
    this.Heros.splice(i, 1);
  }

}
