import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';
import {Artikel} from '../models/Artikel';

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {
  url = 'http://localhost:8081/artikels';

  constructor(private http: HttpClient) {
  }

  getArtikels(): Observable<Artikel[]> {
    return this.http.get<Artikel[]>(this.url);
  }

  createArtikel(newArtikel: Artikel): Observable<Artikel> {
    return this.http.post<Artikel>(this.url, newArtikel);
  }

  getArtikelById(articleId: number): Observable<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.get<Artikel>(newUrl);
  }

  updateArtikel(articleId: number, updatedArticle: Artikel): Observable<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.put<Artikel>(newUrl, updatedArticle);
  }

  deleteArtikel(articleId: number): Observable<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.delete<Artikel>(newUrl);
  }

}
