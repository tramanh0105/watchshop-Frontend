import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';
import {WarenkorbService} from '../../services/warenkorb.service';
import {RegisterService} from '../../services/register.service';
import {UserLogin} from '../../models/UserLogin';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  warenkorbsArray: Warenkorb[];
  userRegis = new UserLogin('', '');
  newUser: User;

  constructor(private userService: UserService, private warenkorbsAno: WarenkorbsVisitorService,
              private warenkorbService: WarenkorbService,
              private registerService: RegisterService,
              private router: Router,
              private flashMessage: FlashMessagesService) {
  }

  ngOnInit() {
    if (this.warenkorbsAno.getItemFromSession() !== null) {
      this.warenkorbsArray = this.warenkorbsAno.getItemFromSession();
    }
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('', {skipLocationChange: true}).then(() =>
      this.router.navigate([url]));
  }

  async registrieren() {
    // await this.userService.createUser(this.userRegis);
    // this.updateWarenkorb(this.userRegis);
    // console.log(this.userRegis);
    this.newUser = await this.registerService.register(this.userRegis);
    // if given user not valid, reload register page
    if (!this.newUser) {
      this.flashMessage.show('Eingegebene Benutzername ist bereits vergeben', {
        cssClass: 'alert-danger',
        timeout: 3000
      });
      this.redirectTo('/register');
    } else {
      this.updateWarenkorb(this.newUser);
    }
  }

  // update carts in sessionstorage to newuser's cart
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
