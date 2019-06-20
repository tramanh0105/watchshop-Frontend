import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from './user.service';
import {User} from '../models/User';
import {UserLogin} from '../models/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url = 'http://localhost:8081/register';

  constructor(private http: HttpClient) {

  }

  register(userLogin: UserLogin): Promise<User> {
    // return this.http.put<User>(this.url, userLogin).toPromise<User>();
    return this.http.post<User>(this.url, userLogin).toPromise<User>();
  }
}
