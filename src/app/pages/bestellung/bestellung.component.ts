import {Component, OnInit} from '@angular/core';
import {Bestellung} from '../../models/Bestellung';
import {User} from '../../models/User';
import {BestellungService} from '../../services/bestellung.service';

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.scss']
})
export class BestellungComponent implements OnInit {
  bestellungs: Bestellung[];
  // bestellpositions: Bestellposition[];
  user: User;

  constructor(private bestellungService: BestellungService) {
  }

  ngOnInit() {
    //getting Bestellungs of user 2 back
    this.bestellungService.getBestellungsByUser(2).subscribe(bestellungsFromServer => {
        this.bestellungs = bestellungsFromServer;
        this.user = this.bestellungs[0].user;
      }
    );

  }

}
