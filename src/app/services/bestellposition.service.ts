import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bestellposition} from '../models/Bestellposition';

@Injectable({
  providedIn: 'root'
})
export class BestellpositionService {
  url = `http://localhost:8081`;

  constructor(private http: HttpClient) {
  }

  getAllBestellposition(): Observable<Bestellposition[]> {
    const newUrl = `${this.url}/bestellpositions`;
    return this.http.get<Bestellposition[]>(newUrl);
  }

  findBestellpositionById(bestellungId: number): Observable<Bestellposition[]> {
    const newUrl = `${this.url}/bestellposition/${bestellungId}`;
    return this.http.get<Bestellposition[]>(newUrl);
  }

  createBestellposition(bestellungId: number, artikelId: number, anzahl: number): Observable<Bestellposition> {
    const newUrl = `$/{this.url}/bestellpositions/${bestellungId}/${artikelId}/${anzahl}`;
    return this.http.post<Bestellposition>(newUrl, null);
  }

  deleteBestellposition(bestellpositionId: number): Observable<Bestellposition> {
    const newUrl = `${this.url}/bestellpositions/${bestellpositionId}`;
    return this.http.delete<Bestellposition>(newUrl);
  }
}
