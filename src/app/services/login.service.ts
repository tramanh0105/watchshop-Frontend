import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLogin} from '../models/UserLogin';
import {Observable, of} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8081/login';

  constructor(private http: HttpClient) {
  }

  login(userLogin: UserLogin): Observable<User> {
    this.http.post<User>(this.url, userLogin).subscribe(foundUser => {
      console.log(foundUser);
      this.saveUserIdToSession(foundUser.id);
    });

    return null;
  }

  private saveUserIdToSession(id: number) {
    sessionStorage.setItem('userId', JSON.stringify(id));
  }

  public readUserIdFromSession(): Observable<number> {
    return of(JSON.parse(sessionStorage.getItem('userId')));
  }
}
