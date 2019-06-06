import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Observable<User> {
    const newUrl = `${this.url}/${userId}`;
    return this.http.get<User>(newUrl);
  }
}
