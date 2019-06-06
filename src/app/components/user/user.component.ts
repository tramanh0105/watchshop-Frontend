import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    //get back user 2
    this.userService.getUserById(2).subscribe(userFromServer => this.user = userFromServer);
  }

}
