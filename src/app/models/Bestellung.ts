import {User} from './User';

export class Bestellung {
  id: number;
  user: User;
  bestelldatum: string;


  constructor(user: User, bestelldatum: string) {
    this.user = user;
    this.bestelldatum = bestelldatum;
  }
}
