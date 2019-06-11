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

  async ngOnInit() {
    this.loginService.getCurrentUser().subscribe(async currentUser => {
      this.currentUser = currentUser;

      if (this.currentUser) {
        this.bestellungs = await this.bestellungService.getBestellungsByUserId(this.currentUser.id);
        console.log(this.bestellungs);
        this.length = this.bestellungs.length;
      }
    });
  }

  redirectTo(url: string) {
    this.router.navigateByUrl('', {skipLocationChange: true}).then(() =>
      this.router.navigate([url]));
  }

  async onBezahlen(bestellung: Bestellung) {
    // Change Bestellstatus of the bestellung on Server; Call PUT Request from BestellungService and reload page
    bestellung = await this.bestellungService.updateBestellung(bestellung.id);
    this.redirectTo('/bestellung');
  }
}
