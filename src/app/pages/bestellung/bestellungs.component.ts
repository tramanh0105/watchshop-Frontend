import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bestellung} from '../../models/Bestellung';
import {User} from '../../models/User';
import {BestellungService} from '../../services/bestellung.service';
import {LoginService} from '../../services/login.service';
import {Bestellposition} from '../../models/Bestellposition';
import {BestellpositionService} from '../../services/bestellposition.service';

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellungs.component.html',
  styleUrls: ['./bestellungs.component.scss']
})
export class BestellungsComponent implements OnInit {
  bestellungs: Bestellung[];
  currentUser: User;
  length: number;


  // tslint:disable-next-line:max-line-length
  constructor(private bestellungService: BestellungService, private loginService: LoginService) {
    this.bestellungService = bestellungService;
    this.loginService = loginService;
  }

  ngOnInit() {

    this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
      if (this.currentUser) {
        this.bestellungService.getBestellungsByUserId(this.currentUser.id).subscribe(bestellungsFromServer => {
          this.bestellungs = bestellungsFromServer;
          this.length = this.bestellungs.length;
        });
      }
    });

  }

}
