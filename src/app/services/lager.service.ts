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

  createLager(newLager: Lager): Observable<Lager> {
    return null;
  }

  getLagerById(lagerId: number): Observable<Lager> {
    return null;
  }

  updateLager(lagerId: number, updatedLager: Lager): Observable<Lager> {
    return null;
  }

  deleteLager(lagerId: number): Observable<Lager> {
    return null;
  }

}
