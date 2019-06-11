import {Component, OnInit} from '@angular/core';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import {Adresse} from '../../models/Adresse';
import {AdresseService} from '../../services/adresse.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;
  adresseCurrentUser: Adresse;

  constructor(
    private loginService: LoginService,
    private adresseService: AdresseService
  ) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;

      if (this.currentUser) {
        this.adresseCurrentUser = await this.adresseService.getAdresse(this.currentUser.id);
        console.log(this.adresseCurrentUser);
      }
    });
  }
}
