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

  getArtikels(): Promise<Artikel[]> {
    return this.http.get<Artikel[]>(this.url).toPromise();
  }

  createArtikel(newArtikel: Artikel): Promise<Artikel> {
    return this.http.post<Artikel>(this.url, newArtikel).toPromise();
  }

  getArtikelById(articleId: number): Promise<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.get<Artikel>(newUrl).toPromise();
  }

  updateArtikel(articleId: number, updatedArticle: Artikel): Promise<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.put<Artikel>(newUrl, updatedArticle).toPromise();
  }

  deleteArtikel(articleId: number): Promise<Artikel> {
    const newUrl = `${this.url}/${articleId}`;
    return this.http.delete<Artikel>(newUrl).toPromise();
  }

}
