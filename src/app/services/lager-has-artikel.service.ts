import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LagerHasArtikel} from '../models/LagerHasArtikel';


@Injectable({
  providedIn: 'root'
})
export class LagerHasArtikelService {
  url = 'http://localhost:8081/artickels/{artikelId}/lagerHasArtikels';

  constructor(private http: HttpClient) {
  }

  /**
   * get all warehouses by article Id
   */

  getLagers(artikelId: number): Observable<LagerHasArtikel[]> {
    return this.http.get<LagerHasArtikel[]>(this.url);

  }

  /**
   * create new LagerHasArtikel
   */
  createLagerHasArtikel(articleId: number, lagerId: number, bestand: number): Observable<LagerHasArtikel> {
    const newUrL = `${this.url}/lagers/${lagerId}/${bestand}`;
    return this.http.post<LagerHasArtikel>(newUrL, null);
  }

  updateBestand(artikelId: number, lagerId: number, bestand: number) {
    const newUrl = `${this.url}/lagers/${lagerId}/${bestand}`;
    return this.http.put(newUrl, null);
  }

}
