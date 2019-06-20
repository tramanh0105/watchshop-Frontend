import {Component, OnInit} from '@angular/core';
import {UserLogin} from '../../models/UserLogin';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/User';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {FlashMessagesService} from 'angular2-flash-messages';


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
              private warenkorbService: WarenkorbService,
              private flashMessage: FlashMessagesService
  ) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;
    });

    if (this.warenkorbsAno.getItemFromSession() !== null) {
      this.warenkorbsArray = this.warenkorbsAno.getItemFromSession();

    }
    if (this.currentUser) {
      this.warenkorbs = await this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id);
    }

  }

  async onLogin() {
    const userFromServer = await this.loginService.login(this.userLogin);
    // Show login Notification
    if (userFromServer) {
      this.flashMessage.show('Login successfully...', {
        cssClass: 'alert-success',
        timeout: 2000
      });
    } else {
      this.flashMessage.show('No User found...', {
        cssClass: 'alert-danger',
        timeout: 2000
      });
    }

    this.loginService.getCurrentUser().subscribe(userFromSession => {
      this.currentUser = userFromSession;
      if (this.currentUser) {
        this.updateWarenkorb(this.currentUser);
      }
    });
  }

  onLogout() {
    this.loginService.logout();
  }


  // update carts in sessionstorage to currentuser's cart
  async updateWarenkorb(currentUser: User) {
    if (this.warenkorbsArray !== undefined) {
      this.warenkorbsArray.forEach(async w => {
        console.log(currentUser);
        // call post request to add carts from session
        let warenkorb: Warenkorb;
        warenkorb = await this.warenkorbService.createWarenkorb(w.artikel.id, currentUser.id, w.anzahl);
        console.log('added:' + warenkorb);


      });
      // delete sessionstorage
      this.warenkorbsAno.removeItemFromSession();
    }
  }
}
