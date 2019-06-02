import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Warenkorb} from '../models/Warenkorb';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbService {
  url = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {
  }

  getWarenkorbsByUserId(userId: number): Observable<Warenkorb[]> {
    const newUrl = `${this.url}/${userId}/warenkorbs`;
    return this.http.get<Warenkorb[]>(newUrl);
  }

  createWarenkorb(artikelId: number, userId: number, anzahl: number): Observable<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}/${anzahl}`;
    return this.http.post<Warenkorb>(newUrl, null);
  }

  updateWarenkorb(artikelId: number, userId: number, anzahl: number): Observable<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}/${anzahl}`;
    return this.http.put<Warenkorb>(newUrl, null);
  }

  deleteWarenkorb(artikelId: number, userId: number): Observable<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}`;
    return this.http.delete<Warenkorb>(newUrl);
  }
}
