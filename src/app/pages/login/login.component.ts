import {Component, OnInit} from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/User';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');
  userId: number;
  currentUser: User;

  constructor(private loginService: LoginService, private warenkorbsAno: WarenkorbsVisitorService) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;
    });
  }

  onSubmit() {
    this.loginService.login(this.userLogin);
  }

  onLogout() {
    this.loginService.logout();
  }
}
