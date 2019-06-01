import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../models/Article';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleListeService {
  url: string = 'http://localhost:8081/artikels';

  constructor(private http: HttpClient) {
  }

  /**
   * get all articles back from server
   */
  getArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

}
