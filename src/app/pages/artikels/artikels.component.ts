import {Component, OnInit} from '@angular/core';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';

@Component({
  selector: 'app-artikels',
  templateUrl: './artikels.component.html',
  styleUrls: ['./artikels.component.scss']
})
export class ArticlesComponent implements OnInit {
  artikels: Artikel[];
  currentUser: User;
  warenkorbs: Warenkorb[];

  constructor(private articleService: ArtikelService, private loginService: LoginService, private warenkorbService: WarenkorbService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;

      if (this.currentUser !== null) {
        this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id).subscribe(warenkorbFromServer => {
          this.warenkorbs = warenkorbFromServer;
          console.log('warenkorbs from user ' + this.warenkorbs);
        });
      }
      this.articleService.getArtikels().subscribe(artikels => {

        this.artikels = artikels;
        console.log(this.artikels);
      });
    });
  }

  /**
   * Checking whether or not the selected artikel already warenkorbExisted in user's bestellPosition
   */
  checkWarenkorbExisted(artikel: Artikel): boolean {
    let existed = false;
    if (this.warenkorbs !== undefined) {
      this.warenkorbs.forEach(w => {
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
  onAddToWarenkorb($event: { artikel: Artikel; newAnzahl: number }) {
    console.log($event);
    const artikel = $event.artikel;
    const newAnzahl = $event.newAnzahl;

    // Check if the artikel already in the user's Warenkorb
    if (this.checkWarenkorbExisted(artikel)) {
      let warenkorb: Warenkorb = null;
      // Update the original Anzahl
      this.warenkorbs.forEach(w => {
        if (w.artikel.id === artikel.id) {
          w.anzahl += newAnzahl;
          warenkorb = w;
        }
      });

      // Call PUT Request
      this.warenkorbService.updateWarenkorb(artikel.id, this.currentUser.id, warenkorb.anzahl).subscribe(updatedWarenkorbFromServer => {
        console.log('updated bestellPosition: ' + updatedWarenkorbFromServer.id + ' updated anzahl: ' + updatedWarenkorbFromServer.anzahl);
      });
    } else {

      // Call POST Request
      this.warenkorbService.createWarenkorb(artikel.id, this.currentUser.id, newAnzahl).subscribe(newWarenkorbFromServer => {
        console.log('created bestellPosition: ' + newWarenkorbFromServer.id + ' new anzahl: ' + newWarenkorbFromServer.anzahl);
      });
    }
  }
}
