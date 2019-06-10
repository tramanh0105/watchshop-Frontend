import {User} from './User';

export class Bestellung {
  id: number;
  user: User;
  bestelldatum: string;
  bestellstatus: string;


  constructor(user: User, bestelldatum: string, bestellstatus: string) {
    this.user = user;
    this.bestelldatum = bestelldatum;
    this.bestellstatus = bestellstatus;
  }

}
