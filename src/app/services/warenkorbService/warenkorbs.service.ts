import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Warenkorb} from '../../models/Warenkorb';

@Injectable({
  providedIn: 'root'
})
export class WarenkorbsService {
  url = 'http://localhost:8081/users/1/warenkorbs';

  constructor(private http: HttpClient) {
  }

  /**
   * Get cart of user 1
   */
  getWarenkorbs(): Observable<Warenkorb[]> {
    return this.http.get<Warenkorb[]>(this.url);
  }
}
