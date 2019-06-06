import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {of} from 'rxjs';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-warenkorbs',
  templateUrl: './warenkorbs.component.html',
  styleUrls: ['./warenkorbs.component.scss']
})
export class WarenkorbsComponent implements OnInit {
  warenkorbs: Warenkorb[];
  currentUser: User;
  totalPreis = 0;
  newAnzahl: number;


  constructor(private warenkorbService: WarenkorbService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(currentUser => {
      // Set Current User
      this.currentUser = currentUser;

      //  Get Warenkorb from server
      if (this.currentUser) {
        this.warenkorbService.getWarenkorbsByUserId(this.currentUser.id).subscribe(warenkorbsFromServer => {
          this.warenkorbs = warenkorbsFromServer;
          console.log(this.warenkorbs);

          // Calc total preis
          this.calcTotalPreis();
        });
      }
    });
  }

  calcTotalPreis() {
    this.totalPreis = 0;
    this.warenkorbs.forEach(w => this.totalPreis += w.anzahl * w.artikel.preis);
  }

  onConfirm(warenkorb: Warenkorb) {
    console.log(warenkorb);
    console.log(this.newAnzahl);
  }
}
