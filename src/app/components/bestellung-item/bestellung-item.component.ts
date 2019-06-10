import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Bestellposition} from '../../models/Bestellposition';
import {BestellpositionService} from '../../services/bestellposition.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../models/User';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-bestellung-item',
  templateUrl: './bestellung-item.component.html',
  styleUrls: ['./bestellung-item.component.scss']
})
export class BestellungItemComponent implements OnInit {
  bestellungId: number;
  bestellPositions: Bestellposition[];
  currentUser: User;
  totalPreis: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bestellPositionService: BestellpositionService,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.loginService.getCurrentUser().subscribe(userFromSession => {
      this.currentUser = userFromSession;

      if (this.currentUser) {
        this.bestellungId = this.route.snapshot.params.bestellungId;
        this.bestellPositionService.getBestellpositionsByBestellungId(this.bestellungId).subscribe(bestellPositionsFromServer => {
          this.bestellPositions = bestellPositionsFromServer;

          this.calcTotalPreis();
          console.log(this.bestellPositions);
        });
      }
    });

  }

  calcTotalPreis() {
    this.totalPreis = 0;
    this.bestellPositions.forEach(bs => this.totalPreis += bs.anzahl * bs.artikel.preis);
  }
}
