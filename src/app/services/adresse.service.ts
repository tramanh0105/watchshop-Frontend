import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Adresse} from '../models/Adresse';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {
  url = `http://localhost:8081/users`;

  constructor(private http: HttpClient) {
  }

  getAdresse(userId: number): Observable<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.get<Adresse>(newUrl);
  }

  createAdresse(userId: number, adresse: Adresse): Observable<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.post<Adresse>(newUrl, adresse);
  }

  updateAdresse(userId: number, adresse: Adresse): Observable<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.put<Adresse>(newUrl, null);
  }

  deleteAdresse(userId: number): Observable<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.delete<Adresse>(newUrl);
  }

}
