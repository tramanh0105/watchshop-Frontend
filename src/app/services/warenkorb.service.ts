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

  getWarenkorbsByUserId(userId: number): Promise<Warenkorb[]> {
    const newUrl = `${this.url}/${userId}/warenkorbs`;
    return this.http.get<Warenkorb[]>(newUrl).toPromise();
  }

  createWarenkorb(artikelId: number, userId: number, anzahl: number): Promise<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}/${anzahl}`;
    return this.http.post<Warenkorb>(newUrl, null).toPromise();
  }

  updateWarenkorb(artikelId: number, userId: number, anzahl: number): Promise<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}/${anzahl}`;
    return this.http.put<Warenkorb>(newUrl, null).toPromise();
  }

  deleteWarenkorb(artikelId: number, userId: number): Promise<Warenkorb> {
    const newUrl = `${this.url}/${userId}/warenkorbs/artikels/${artikelId}`;
    return this.http.delete<Warenkorb>(newUrl).toPromise();
  }
}
