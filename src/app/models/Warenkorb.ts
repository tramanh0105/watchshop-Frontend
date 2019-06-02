import {Artikel} from './Artikel';
import {User} from './User';

export class Warenkorb {
  id: number;
  user: User;
  artikel: Artikel;
  anzahl: number;

  constructor(user: User, artikel: Artikel, anzahl: number) {
    this.user = user;
    this.artikel = artikel;
    this.anzahl = anzahl;
  }
}
