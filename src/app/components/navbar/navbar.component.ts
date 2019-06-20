import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  currentUser: User;

  constructor(
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });
  }

}
