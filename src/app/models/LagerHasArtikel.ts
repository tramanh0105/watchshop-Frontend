import {Artikel} from './Artikel';
import {Lager} from './Lager';

export class LagerHasArtikel {
  id: number;
  artikel: Artikel;
  lager: Lager;
  bestand: number;

  constructor(artikel: Artikel, lager: Lager, bestand: number) {
    this.artikel = artikel;
    this.lager = lager;
    this.bestand = bestand;
  }
}
