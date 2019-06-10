import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Bestellung} from '../../models/Bestellung';
import {User} from '../../models/User';
import {BestellungService} from '../../services/bestellung.service';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bestellung',
  templateUrl: './bestellungs.component.html',
  styleUrls: ['./bestellungs.component.scss']
})
export class BestellungsComponent implements OnInit {
  bestellungs: Bestellung[];
  currentUser: User;
  length: number;


  constructor(
    private bestellungService: BestellungService,
    private loginService: LoginService,
    private router: Router
  ) {
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

  onBezahlen(bestellung: Bestellung) {
    // TODO
    // Change Bestellstatus of the bestellung on UI
    // Change Bestellstatus of the bestellung on Server; Call PUT Request from BestellungService
    // Redirect back to /bestellung with Router
    // Tipps: this.router.navigate(['/bestellung']);
  }
}
