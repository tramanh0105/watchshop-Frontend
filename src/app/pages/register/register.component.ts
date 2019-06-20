import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';
import {WarenkorbService} from '../../services/warenkorb.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  warenkorbsArray: Warenkorb[];
  newUser: User = new User('', '', '', '', '', '');

  constructor(private userService: UserService, private warenkorbsAno: WarenkorbsVisitorService,
              private warenkorbService: WarenkorbService) {
  }

  ngOnInit() {
    if (this.warenkorbsAno.getItemFromSession() !== null) {
      this.warenkorbsArray = this.warenkorbsAno.getItemFromSession();
    }
  }

  async registrieren() {
    await this.userService.createUser(this.newUser);
    this.updateWarenkorb(this.newUser);
    console.log(this.newUser);
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
