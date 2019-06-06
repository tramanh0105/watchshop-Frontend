import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = `http://localhost:8081`;

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<User[]> {
    const newUrl = `${this.url}/users`;
    return this.http.get<User[]>(newUrl);
  }

  getUserById(userId: number): Observable<User> {
    const newUrl = `${this.url}/users/${userId}`;
    return this.http.get<User>(this.url);
  }

  updateUser(user: User, userId: number): Observable<User> {
    const newUrl = `${this.url}/users/${userId}`;
    return this.http.put<User>(newUrl, null);
  }

  deleteUser(userId: number): Observable<User> {
    const newUrl = `${this.url}//users/${userId}`;
    return this.http.delete<User>(newUrl);
  }
}
