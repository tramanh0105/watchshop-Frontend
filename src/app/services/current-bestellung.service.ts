import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Bestellung} from '../models/Bestellung';

@Injectable({
  providedIn: 'root'
})
export class CurrentBestellungService {
  private bestellungSource = new BehaviorSubject<Bestellung>(null);
  private currentBestellung = this.bestellungSource.asObservable();

  constructor() {
  }

  getCurrentBestellung(): Observable<Bestellung> {
    return this.currentBestellung;
    console.log(this.currentBestellung);
  }

  changeCurrentBestellung(bestellung: Bestellung) {
    this.bestellungSource.next(bestellung);
    console.log(bestellung);
  }
}
