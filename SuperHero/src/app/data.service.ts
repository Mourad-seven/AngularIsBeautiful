import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {

  private Heroes = new BehaviorSubject<any>(['The initial hero', 'Another hero']);
  hero = this.Heroes.asObservable();

  constructor() { }

  changeHero(hero) {
    this.Heroes.next(hero);
  }

}
