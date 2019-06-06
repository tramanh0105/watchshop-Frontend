import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bestellung} from '../models/Bestellung';

@Injectable({
  providedIn: 'root'
})
export class BestellungService {
  url = `http://localhost:8081`;

  constructor(private http: HttpClient) {
  }

  /**
   * get all bestellungs from Server
   */
  getAllBestellung(): Observable<Bestellung[]> {
    const newUrl = `${this.url}/bestellungs`;
    return this.http.get<Bestellung[]>(newUrl);
  }

  getBestellungsByUserId(userId: number): Observable<Bestellung[]> {
    const newUrl = `${this.url}/users/${userId}/bestellungs`;
    return this.http.get<Bestellung[]>(newUrl);
  }

  /**
   * find Bestellung by Id
   */
  findBestellungById(bestellungId: number): Observable<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.get<Bestellung>(newUrl);
  }

  createBestellung(userId: number): Observable<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${userId}`;
    return this.http.post<Bestellung>(newUrl, null);
  }

  // update the status of the order
  updateBestellung(bestellungId: number): Observable<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.put<Bestellung>(newUrl, null);
  }

  deleteBestellung(bestellungId: number): Observable<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.delete<Bestellung>(newUrl);
  }
}
