import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  newUser: User = new User('', '', '', '', '', '');

  constructor(private userServeice: UserService) {
  }

  ngOnInit() {
  }

  async onRegistrieren() {
    await this.userServeice.createUser(this.newUser);
    console.log(this.newUser);
  }

}
