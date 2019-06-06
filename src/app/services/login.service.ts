import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLogin} from '../models/UserLogin';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8081/login';
  userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  login(userLogin: UserLogin): Observable<User> {
    this.http.post<User>(this.url, userLogin).subscribe(foundUser => {

      if (foundUser) {
        console.log('User from server: ' + foundUser.benutzerName);
        this.saveUserIdToSession(foundUser.id);
        this.userSource.next(foundUser);
      } else {
        console.log('not found');
      }
    });

    return null;
  }

  private saveUserIdToSession(id: number) {
    sessionStorage.setItem('userId', JSON.stringify(id));
  }

  public readUserIdFromSession(): Observable<number> {
    return of(JSON.parse(sessionStorage.getItem('userId')));
  }

  deleteUserIdFromSession() {
    sessionStorage.removeItem('userId');
    this.userSource.next(null);
  }
}
