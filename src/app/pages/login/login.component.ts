import {Component, OnInit} from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');
  userId: number;
  currentUser: User;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

  onSubmit() {
    this.loginService.login(this.userLogin);
  }

  onLogout() {
    this.loginService.deleteUserIdFromSession();
  }
}
