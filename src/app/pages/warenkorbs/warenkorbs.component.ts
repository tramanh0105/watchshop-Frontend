import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbService} from '../../services/warenkorb.service';
import {of} from 'rxjs';
import {Artikel} from '../../models/Artikel';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';
import index from '@angular/cli/lib/cli';

@Component({
  selector: 'app-warenkorbs',
  templateUrl: './warenkorbs.component.html',
  styleUrls: ['./warenkorbs.component.scss']
})
export class WarenkorbsComponent implements OnInit {
  warenkorbs: Warenkorb[];
  currentUser: User;
  totalPreis = 0;

  // newAnzahlen: number[] = [];


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
    // Update on UI
    this.calcTotalPreis();

    // Update on Server; Call Put Request from WarenkorbService
    //  Todo
    console.log(warenkorb);
    this.warenkorbService.updateWarenkorb(warenkorb.artikel.id, warenkorb.user.id, warenkorb.anzahl).subscribe(warenkorbFromServer => {
      warenkorb = warenkorbFromServer;
    });

  }

  onDelete(warenkorb: Warenkorb) {
    // Todo Update on UI
    this.warenkorbs = this.warenkorbs.filter(w => w.id !== warenkorb.id);
    // Todo Update on Server: Call Delete Request from WarenkorbService
    this.warenkorbService.deleteWarenkorb(warenkorb.artikel.id, warenkorb.user.id).subscribe(warenkorbFromServer => {
      warenkorb = warenkorbFromServer;
    });
  }
}
