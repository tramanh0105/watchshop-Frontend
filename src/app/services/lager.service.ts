import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Artikel} from '../models/Artikel';
import {Lager} from '../models/Lager';

@Injectable({
  providedIn: 'root'
})
export class LagerService {
  url = 'http://localhost:8081/lagers';

  constructor(private http: HttpClient) {
  }

  getLagers(): Observable<Lager[]> {
    return this.http.get<Lager[]>(this.url);
  }

  /**
   * create new Lager
   */
  createLager(newLager: Lager): Observable<Lager> {
    return this.http.put<Lager>(this.url, newLager);

  }

  /**
   * getLager by LagerId
   */
  getLagerById(lagerId: number): Observable<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.get<Lager>(newUrl);
  }

  /**
   * update lager
   */
  updateLager(lagerId: number, updatedLager: Lager): Observable<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.put<Lager>(newUrl, updatedLager);
  }

  /**
   * delete Lager
   */
  deleteLager(lagerId: number): Observable<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.delete<Lager>(newUrl);
  }

}
