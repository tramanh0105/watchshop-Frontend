import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
  }

}
