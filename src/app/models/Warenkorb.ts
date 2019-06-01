import {Article} from './Article';
import {User} from './User';

export class Warenkorb {
  id: number;
  user: User;
  article: Article;
  anzahl: number;

  constructor(user: User, article: Article, anzahl: number) {
    this.user = user;
    this.article = article;
    this.anzahl = anzahl;
  }
}
