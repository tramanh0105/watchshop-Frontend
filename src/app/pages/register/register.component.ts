import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {UserDTO} from '../../models/UserDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  newUser: User = new User('', '', '', '', '','');

  constructor(private userService: UserService) {

  }

  ngOnInit() {
  }

  async registrieren() {
    console.log('working');
    this.newUser = await this.userService.createUser(this.newUser);
    console.log(this.newUser);
  }
}
