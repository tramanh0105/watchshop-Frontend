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

  getAllBestellposition(): Promise<Bestellposition[]> {
    const newUrl = `${this.url}/bestellpositions`;
    return this.http.get<Bestellposition[]>(newUrl).toPromise();
  }

  getBestellpositionsByBestellungId(bestellungId: number): Promise<Bestellposition[]> {
    const newUrl = `${this.url}/bestellpositions/${bestellungId}`;
    return this.http.get<Bestellposition[]>(newUrl).toPromise();
  }

  createBestellposition(bestellungId: number, artikelId: number, anzahl: number): Promise<Bestellposition> {
    const newUrl = `${this.url}/bestellpositions/${bestellungId}/${artikelId}/${anzahl}`;
    return this.http.post<Bestellposition>(newUrl, null).toPromise();
  }

  deleteBestellposition(bestellpositionId: number): Promise<Bestellposition> {
    const newUrl = `${this.url}/bestellpositions/${bestellpositionId}`;
    return this.http.delete<Bestellposition>(newUrl).toPromise();
  }
}
