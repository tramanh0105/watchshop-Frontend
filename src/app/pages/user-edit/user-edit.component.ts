import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import {AdresseService} from '../../services/adresse.service';
import {Adresse} from '../../models/Adresse';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  currentUser: User;
  adresseCurrentUser: Adresse;
  newUser: User;
  newAdresse: Adresse;

  constructor(private loginService: LoginService, private adresseService: AdresseService, private userService: UserService) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;

      if (this.currentUser) {
        console.log('initial user' + this.currentUser);
        this.adresseCurrentUser = await this.adresseService.getAdresse(this.currentUser.id);
      }
    });
  }

  async onSave() {
    // making a PUT request to server to update userInfo
    // this.currentUser = await this.userService.updateUser(this.newUser, this.currentUser.id);
    this.currentUser = await this.userService.updateUser(this.currentUser, this.currentUser.id);
    console.log(this.currentUser);

    // making a PUT request to server to update adresse
    console.log(this.adresseCurrentUser);
    this.adresseCurrentUser = await this.adresseService.updateAdresse(this.currentUser.id, this.adresseCurrentUser);
  }

}
