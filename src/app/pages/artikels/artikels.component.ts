import {Component, OnInit} from '@angular/core';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {UserService} from '../../services/user.service';
import {WarenkorbsVisitorService} from '../../services/warenkorb-visitor.service';

@Component({
  selector: 'app-artikels',
  templateUrl: './artikels.component.html',
  styleUrls: ['./artikels.component.scss']
})
export class ArticlesComponent implements OnInit {
  artikels: Artikel[];
  currentUser: User;
  // warenkorb for signed-in-user
  warenkorbs: Warenkorb[];
  // warenkorb for anonymous
  warenkorbArray: Warenkorb[];

  constructor(
    private articleService: ArtikelService,
    private loginService: LoginService,
    private warenkorbService: WarenkorbService,
    private userService: UserService,
    private warenkorbAno: WarenkorbsVisitorService
  ) {
  }

  async ngOnInit() {
    this.artikels = await this.articleService.getArtikels();


    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;

      if (this.currentUser !== null) {
        this.warenkorbs = await this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id);

      }
    });

  }

  /**
   * Checking whether or not the selected artikel already warenkorbExisted in user's bestellPosition
   */
  checkWarenkorbExisted(artikel: Artikel, warenkorbs: Warenkorb[]): boolean {
    let existed = false;
    if (warenkorbs !== null) {
      warenkorbs.forEach(w => {
        if (w.artikel.id === artikel.id) {
          existed = true;
        }
      });
    }
    return existed;
  }

  /**
   * Event Handle for adding one Article to the Warenkorb
   */
  async onAddToWarenkorb($event: { artikel: Artikel; newAnzahl: number }) {
    console.log($event);
    const artikel = $event.artikel;
    const newAnzahl = $event.newAnzahl;
    // in case the user already logged in

    if (this.currentUser !== null) { // Check if the artikel already in the user's Warenkorb
      if (this.checkWarenkorbExisted(artikel, this.warenkorbs)) {
        let warenkorb: Warenkorb = null;

        // Update the original Anzahl
        this.warenkorbs.forEach(w => {
          if (w.artikel.id === artikel.id) {
            w.anzahl += newAnzahl;
            warenkorb = w;
          }
        });

        // Call PUT Request
        const updatedWarenkorbFromServer = await this.warenkorbService.updateWarenkorb(artikel.id, this.currentUser.id, warenkorb.anzahl);
        console.log('updated warenkorb: ' + updatedWarenkorbFromServer.id + ' updated anzahl: ' + updatedWarenkorbFromServer.anzahl);
      } else {

        // Call POST Request
        const newWarenkorbFromServer = await this.warenkorbService.createWarenkorb(artikel.id, this.currentUser.id, newAnzahl);
        console.log('created warenkorb: ' + newWarenkorbFromServer.id + ' new anzahl: ' + newWarenkorbFromServer.anzahl);
      }
    } else {
      this.addToSession(artikel, newAnzahl);
    }
  }

  addToSession(artikel: Artikel, newAnzahl: number) {
    // create a new cart to store artikel
    const warenkorb = new Warenkorb(null, artikel, newAnzahl);
    this.warenkorbArray = [];
    if (this.warenkorbAno.getItemFromSession() !== null) {
      this.warenkorbArray = this.warenkorbAno.getItemFromSession();
    }
    console.log(this.warenkorbArray);
    // check if item alreary in warenkorb
    if (this.checkWarenkorbExisted(artikel, this.warenkorbArray)) {
      if (this.warenkorbArray !== null) {
        this.warenkorbArray.forEach(w => {
          if (w.artikel.id === artikel.id) {
            w.anzahl += newAnzahl;
          }
        });
      }
    } else {
      this.warenkorbArray.push(warenkorb);
    }
    // clear sessionstorage and store the new array to it
    this.warenkorbAno.removeItemFromSession();
    this.warenkorbAno.setItemtoSession(this.warenkorbArray);
  }

  /**
   * Handling cart for anonymous
   */
  // Todo
  // Create a empty array of articles
}
