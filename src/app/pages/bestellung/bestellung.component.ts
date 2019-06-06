import {Component, OnInit} from '@angular/core';
import {Bestellung} from '../../models/Bestellung';
import {User} from '../../models/User';
import {BestellungService} from '../../services/bestellung.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellung.component.html',
  styleUrls: ['./bestellung.component.scss']
})
export class BestellungComponent implements OnInit {
  bestellungs: Bestellung[];
  currentUser: User;


  constructor(private bestellungService: BestellungService, private loginService: LoginService) {
  }

  ngOnInit() {

    this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
      if (this.currentUser) {
        this.bestellungService.getBestellungsByUserId(this.currentUser.id).subscribe(bestellungsFromServer => {
          this.bestellungs = bestellungsFromServer;
          console.log(this.bestellungs);
        });
      }
    });

  }

}
