import {Injectable} from '@angular/core';
import {Warenkorb} from '../models/Warenkorb';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbsVisitorService {

  constructor() {
  }

  public setItemtoSession(warenkorbArray: Warenkorb[]) {
    console.log(warenkorbArray);
    sessionStorage.setItem('anonymous', JSON.stringify(warenkorbArray));
  }

  /**/
  public getItemFromSession(): Warenkorb[] {
    return JSON.parse(sessionStorage.getItem('anonymous'));
  }

  public removeItemFromSession() {
    sessionStorage.clear();
  }

}
