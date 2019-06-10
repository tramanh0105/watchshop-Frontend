import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {of} from 'rxjs';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import index from '@angular/cli/lib/cli';
import {BestellungService} from '../../services/bestellung.service';
import {BestellpositionService} from '../../services/bestellposition.service';
import {Bestellung} from '../../models/Bestellung';

@Component({
  selector: 'app-warenkorbs',
  templateUrl: './warenkorbs.component.html',
  styleUrls: ['./warenkorbs.component.scss']
})
export class WarenkorbsComponent implements OnInit {
  warenkorbs: Warenkorb[];
  currentUser: User;
  totalPreis = 0;
  newBestellung: Bestellung;

  // tslint:disable-next-line:max-line-length
  constructor(private warenkorbService: WarenkorbService, private loginService: LoginService, private bestellungService: BestellungService, private bestellpositionService: BestellpositionService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUser => {
      // Set Current User
      this.currentUser = currentUser;

      //  Get Warenkorb from server
      if (this.currentUser) {
        this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id).subscribe(warenkorbsFromServer => {
          this.warenkorbs = warenkorbsFromServer;
          console.log('warenkorbs from server: ' + this.warenkorbs);

          // Calc total preis
          this.calcTotalPreis();
        });
      }
    });
  }

  /**
   * Calculate total price of all articles in the cart
   */
  calcTotalPreis() {
    this.totalPreis = 0;
    this.warenkorbs.forEach(w => this.totalPreis += w.anzahl * w.artikel.preis);
  }

  /**
   * Event Handle for changing Anzahl of on article
   */
  onConfirm(warenkorb: Warenkorb) {
    // Update on UI
    this.calcTotalPreis();

    // Update on Server; Call Put Request from WarenkorbService
    //  Todo
    console.log(warenkorb);
    this.warenkorbService.updateWarenkorb(warenkorb.artikel.id, warenkorb.user.id, warenkorb.anzahl).subscribe(warenkorbFromServer => {
      warenkorb = warenkorbFromServer;
    });

  }

  /**
   * Event Handle when clicking Delete Button to remove one article from the Warenkorb
   */
  onDelete(warenkorb: Warenkorb) {
    // Todo Update on UI
    this.warenkorbs = this.warenkorbs.filter(w => w.id !== warenkorb.id);
    this.calcTotalPreis();
    // Todo Update on Server: Call Delete Request from WarenkorbService
    this.warenkorbService.deleteWarenkorb(warenkorb.artikel.id, warenkorb.user.id).subscribe(warenkorbFromServer => {
      warenkorb = warenkorbFromServer;
    });
  }

  onBestellen() {
    // Todo
    // Transfer all items from Warenkorb to Bestellung
    // Call POST Request in BestellungSerivce
    this.bestellungService.createBestellung(this.currentUser.id).subscribe(newBestellungFromServer => {
      this.newBestellung = newBestellungFromServer;
      this.warenkorbs.forEach(w => {
        this.bestellpositionService.createBestellposition(this.newBestellung.id, w.artikel.id, w.anzahl).subscribe();
      });
    });

    // Clear Warenkorb from Server; Call Delete Request
    this.warenkorbs.forEach(w => {
      this.warenkorbService.deleteWarenkorb(w.artikel.id, this.currentUser.id).subscribe();
    });
    // Clear Warenkorb from UI
    while (this.warenkorbs.length > 0) {
      this.warenkorbs.pop();
    }
  }
}
