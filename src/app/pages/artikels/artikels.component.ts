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
  anzahl: number;
  warenkorb: Warenkorb;
  existed = false;

  constructor(private articleService: ArtikelService, private loginService: LoginService, private warenkorbService: WarenkorbService) {
  }

  ngOnInit() {
    this.anzahl = 0;
    this.loginService.getCurrentUser().subscribe(currentUser => this.currentUser = currentUser);
    if (this.currentUser !== null) {
      this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id).subscribe(warenkorbFromServer =>
        this.warenkorbs = warenkorbFromServer);
    }
    this.articleService.getArtikels().subscribe(artikels => {

      this.artikels = artikels;
      console.log(this.artikels);
    });
  }

  // Checking whether or not the selected artikel already existed in user's warenkorb
  exist(artikel: Artikel) {
    if (this.warenkorbs !== null) {
      this.warenkorbs.forEach(w => {
        if (w.artikel.id === artikel.id) {
          this.existed = true;
          this.warenkorb = w;
        }
      });
    }
  }

  onAddWarenkorb(artikel: Artikel) {
    let updatedAnzahl: number;
    // Check if the artikel already in the user's Warenkorb
    this.exist(artikel);
    // Update the original Anzahl
    if (this.warenkorb !== null) {
      updatedAnzahl = this.anzahl + this.warenkorb.anzahl;
    }


    if (this.existed === true) {
      this.warenkorbService.updateWarenkorb(artikel.id, this.currentUser.id, updatedAnzahl).subscribe(warenkorbFromServer => {
        this.warenkorb = warenkorbFromServer;
      });

      // Call Post request of WarenkorbService
    } else {
      this.warenkorbService.createWarenkorb(artikel.id, this.currentUser.id, this.anzahl).subscribe(warenkorb => {
        this.warenkorb = warenkorb;
        this.warenkorbs.push(warenkorb);
      });
    }
  }
}
