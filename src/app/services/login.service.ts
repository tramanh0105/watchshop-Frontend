import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserLogin} from '../models/UserLogin';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {User} from '../models/User';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:8081/login';
  userSource = new BehaviorSubject<User>(null);
  currentUser = this.userSource.asObservable();

  constructor(private http: HttpClient, private userService: UserService) {
    this.readCurrentUserFromSession();
  }

  private readCurrentUserFromSession() {
    const userId = this.readUserIdFromSession();
    if (userId) {
      this.userService.getUserById(userId).subscribe(userFromServer => {
        this.userSource.next(userFromServer);
      });
    } else {
      this.userSource.next(null);
    }
  }

  public getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  public login(userLogin: UserLogin) {
    this.http.post<User>(this.url, userLogin).subscribe(foundUser => {

      if (foundUser) {
        console.log('User from server: ' + foundUser.benutzerName);
        this.saveUserIdToSession(foundUser.id);
        this.userSource.next(foundUser);
      } else {
        console.log('not found');
      }
    });
  }

  private saveUserIdToSession(id: number) {
    sessionStorage.setItem('userId', JSON.stringify(id));
  }

  private readUserIdFromSession(): number {
    return JSON.parse(sessionStorage.getItem('userId'));
  }

  public deleteUserIdFromSession() {
    sessionStorage.removeItem('userId');
    this.userSource.next(null);
  }
}
