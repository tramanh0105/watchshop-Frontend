import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';
import {UserDTO} from '../models/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8081/users';

  constructor(private http: HttpClient) {
  }

  getUserById(userId: number): Promise<User> {
    const newUrl = `${this.url}/${userId}`;
    return this.http.get<User>(newUrl).toPromise();
  }

  getUsers(): Promise<User[]> {
    return this.http.get<User[]>(this.url).toPromise();
  }

  getUsersObservable(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  createUser(user: User): Promise<User> {
    const newUrl = `${this.url}`;
    return this.http.post<User>(newUrl, user).toPromise();
  }

  updateUser(user: UserDTO, userId: number): Promise<User> {
    const newUrl = `${this.url}/${userId}`;
    return this.http.put<User>(newUrl, user).toPromise();
  }

}
