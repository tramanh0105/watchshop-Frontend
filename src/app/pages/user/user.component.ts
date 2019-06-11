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

  constructor(private loginService: LoginService, private adresseService: AdresseService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUserFromServer => {
      this.currentUser = currentUserFromServer;
      console.log(this.currentUser);
      if (this.currentUser) {
        this.adresseService.getAdresse(this.currentUser.id).subscribe(adresseFromServer => {
          this.adresseCurrentUser = adresseFromServer;
          console.log(adresseFromServer);
        });
      }

    });
  }

}
