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

  getLagers(): Promise<Lager[]> {
    return this.http.get<Lager[]>(this.url).toPromise();
  }

  /**
   * create new Lager
   */
  createLager(newLager: Lager): Promise<Lager> {
    return this.http.put<Lager>(this.url, newLager).toPromise();

  }

  /**
   * getLager by LagerId
   */
  getLagerById(lagerId: number): Promise<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.get<Lager>(newUrl).toPromise();
  }

  /**
   * update lager
   */
  updateLager(lagerId: number, updatedLager: Lager): Promise<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.put<Lager>(newUrl, updatedLager).toPromise();
  }

  /**
   * delete Lager
   */
  deleteLager(lagerId: number): Promise<Lager> {
    const newUrl = `${this.url}/${lagerId}`;
    return this.http.delete<Lager>(newUrl).toPromise();
  }

}
