import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LagersService {
  url = 'http://localhost:8081/lagers';

  constructor(private http: HttpClient) {
  }

}
