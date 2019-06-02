import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Article} from '../../models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url = 'http://localhost:8081/artikels';

  constructor(private http: HttpClient) {
  }

  /**
   * get all articles back from server
   */
  getArticleList(): Observable<Article[]> {
    return this.http.get<Article[]>(this.url);
  }

}
