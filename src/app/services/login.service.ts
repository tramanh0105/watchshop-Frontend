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

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {

    this.readCurrentUserFromSession();
  }

  async readCurrentUserFromSession() {
    const userId = this.readUserIdFromSession();
    if (userId) {
      const userFromServer = await this.userService.getUserById(userId);
      this.userSource.next(userFromServer);
      console.log('read user from session successful: ' + userFromServer.benutzerName);
    } else {
      this.userSource.next(null);
    }
  }

  getCurrentUser(): Observable<User> {
    return this.currentUser;
  }

  async login(userLogin: UserLogin): Promise<User> {
    const foundUser = await this.http.post<User>(this.url, userLogin).toPromise();
    if (foundUser) {
      console.log('User from server: ' + foundUser.benutzerName);
      this.saveUserIdToSession(foundUser.id);
      this.userSource.next(foundUser);
      return foundUser;
    } else {
      console.log('not found');
      return null;
    }
  }

  public logout() {
    this.deleteUserIdFromSession();
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
