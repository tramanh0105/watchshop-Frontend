import {Bestellung} from './Bestellung';
import {Article} from './Article';

export class Bestellposition {
  id: number;
  bestellung: Bestellung;
  article: Article;
  anzahl: number;


  constructor(id: number, bestellung: Bestellung, article: Article) {
    this.id = id;
    this.bestellung = bestellung;
    this.article = article;
  }
}
