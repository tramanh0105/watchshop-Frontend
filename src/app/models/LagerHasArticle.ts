import {Article} from './Article';
import {Lager} from './Lager';

export class LagerHasArticle {
  id: number;
  article: Article;
  lager: Lager;
  bestand: number;

  constructor(article: Article, lager: Lager, bestand: number) {
    this.article = article;
    this.lager = lager;
    this.bestand = bestand;
  }
}
