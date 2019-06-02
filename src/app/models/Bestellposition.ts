import {Bestellung} from './Bestellung';
import {Artikel} from './Artikel';

export class Bestellposition {
  id: number;
  bestellung: Bestellung;
  artikel: Artikel;
  anzahl: number;


  constructor(id: number, bestellung: Bestellung, artikel: Artikel) {
    this.id = id;
    this.bestellung = bestellung;
    this.artikel = artikel;
  }
}
