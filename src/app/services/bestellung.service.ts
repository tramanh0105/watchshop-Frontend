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
  getAllBestellung(): Promise<Bestellung[]> {
    const newUrl = `${this.url}/bestellungs`;
    return this.http.get<Bestellung[]>(newUrl).toPromise();
  }

  getBestellungsByUserId(userId: number): Promise<Bestellung[]> {
    const newUrl = `${this.url}/users/${userId}/bestellungs`;
    return this.http.get<Bestellung[]>(newUrl).toPromise();
  }

  findBestellungById(bestellungId: number): Promise<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.get<Bestellung>(newUrl).toPromise();
  }

  createBestellung(userId: number): Promise<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${userId}`;
    return this.http.post<Bestellung>(newUrl, null).toPromise();
  }

  // update the status of the order
  updateBestellung(bestellungId: number): Promise<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.put<Bestellung>(newUrl, null).toPromise();
  }

  deleteBestellung(bestellungId: number): Promise<Bestellung> {
    const newUrl = `${this.url}/bestellungs/${bestellungId}`;
    return this.http.delete<Bestellung>(newUrl).toPromise();
  }
}
