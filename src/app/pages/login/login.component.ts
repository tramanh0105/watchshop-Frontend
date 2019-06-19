import {Component, OnInit} from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/User';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin: UserLogin = new UserLogin('', '');
  warenkorbsArray: Warenkorb[];
  userId: number;
  currentUser: User;
  warenkorbs: Warenkorb[];

  constructor(private loginService: LoginService,
              private warenkorbsAno: WarenkorbsVisitorService,
              private warenkorbService: WarenkorbService) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;
    });
    if (this.currentUser) {
      this.warenkorbs = await this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id);
    }
    if (this.warenkorbsAno.getItemFromSession() !== null) {
      this.warenkorbsArray = this.warenkorbsAno.getItemFromSession();
    }
  }

  onLogin() {
    this.loginService.login(this.userLogin);
    this.updateWarenkorb();
  }

  onLogout() {
    this.loginService.logout();
  }

  // update carts in sessionstorage to currentuser's cart
  async updateWarenkorb() {
    if (this.warenkorbsArray !== undefined) {
      this.warenkorbsArray.forEach(async w => {
        // call put request to update carts
        if (this.currentUser) {
          console.log(this.currentUser);
          let warenkorb: Warenkorb;
          warenkorb = await this.warenkorbService.createWarenkorb(w.artikel.id, this.currentUser.id, w.anzahl);
          console.log('added:' + warenkorb);
        }

      });
      // delete sessionstorage
      this.warenkorbsAno.removeItemFromSession();
    }
  }
}
