import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {of} from 'rxjs';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import {BestellungService} from '../../services/bestellung.service';
import {BestellpositionService} from '../../services/bestellposition.service';
import {Bestellung} from '../../models/Bestellung';
import {Router} from '@angular/router';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';

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
  warenkorbsArray: Warenkorb[];

  constructor(
    private warenkorbService: WarenkorbService,
    private loginService: LoginService,
    private router: Router,
    private bestellungService: BestellungService,
    private bestellpositionService: BestellpositionService,
    private warenkorbsAno: WarenkorbsVisitorService
  ) {
  }

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;

      this.warenkorbsArray = this.warenkorbsAno.getItemFromSession();
      if (this.currentUser) {
        this.warenkorbs = await this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id);

        // Calc total preis
        this.calcTotalPreis();

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
  async onConfirm(warenkorb: Warenkorb) {
    // Update on UI
    this.calcTotalPreis();

    // Update on Server; Call Put Request from WarenkorbService

    warenkorb = await this.warenkorbService.updateWarenkorb(warenkorb.artikel.id, warenkorb.user.id, warenkorb.anzahl);

  }

  /**
   * Event Handle when clicking Delete Button to remove one article from the Warenkorb
   */
  async onDelete(warenkorb: Warenkorb) {

    this.warenkorbs = this.warenkorbs.filter(w => w.id !== warenkorb.id);
    this.calcTotalPreis();

    warenkorb = await this.warenkorbService.deleteWarenkorb(warenkorb.artikel.id, warenkorb.user.id);
  }

  async onBestellen() {

    // Transfer all items from Warenkorb to Bestellung
    // Call POST Request in BestellungSerivce
    this.newBestellung = await this.bestellungService.createBestellung(this.currentUser.id);
    this.warenkorbs.forEach(async w => {
      const newBestellPosition = await this.bestellpositionService.createBestellposition(this.newBestellung.id, w.artikel.id, w.anzahl);
      console.log(newBestellPosition);
    });

    this.warenkorbs.forEach(async w => {
      const deletedWarenkorb = await this.warenkorbService.deleteWarenkorb(w.artikel.id, this.currentUser.id);
      console.log(deletedWarenkorb);
    });

    this.router.navigate(['/bestellung']);
  }
}
