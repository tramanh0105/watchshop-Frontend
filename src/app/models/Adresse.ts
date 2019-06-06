import {User} from './User';

export class Adresse {
  id: number;
  strasse: string;
  hausnummer: number;
  plz: number;
  stadt: string;
  user: User;

  constructor(strasse: string, hausnummer: number, plz: number, stadt: string, user: User) {
    this.strasse = strasse;
    this.hausnummer = hausnummer;
    this.plz = plz;
    this.stadt = stadt;
    this.user = user;
  }
}
