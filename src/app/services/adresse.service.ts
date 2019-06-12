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

  getAdresse(userId: number): Promise<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.get<Adresse>(newUrl).toPromise();
  }

  createAdresse(userId: number, adresse: Adresse): Promise<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.post<Adresse>(newUrl, adresse).toPromise();
  }

  updateAdresse(userId: number, adresse: Adresse): Promise<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    // return this.http.put<Adresse>(newUrl, null).toPromise();
    return this.http.put<Adresse>(newUrl, adresse).toPromise();
  }

  deleteAdresse(userId: number): Promise<Adresse> {
    const newUrl = `${this.url}/${userId}/adresse`;
    return this.http.delete<Adresse>(newUrl).toPromise();
  }

}
