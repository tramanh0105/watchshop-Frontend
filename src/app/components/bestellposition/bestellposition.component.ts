import {Component, Input, OnInit} from '@angular/core';
import {Bestellposition} from '../../models/Bestellposition';
import {BestellpositionService} from '../../services/bestellposition.service';
import {Bestellung} from '../../models/Bestellung';

@Component({
  selector: 'app-bestellposition',
  templateUrl: './bestellposition.component.html',
  styleUrls: ['./bestellposition.component.scss']
})
export class BestellpositionComponent implements OnInit {
  bestellpositions: Bestellposition[];

  @Input() bestellung: Bestellung;

  constructor(private bestellpositionService: BestellpositionService) {
  }

  ngOnInit() {
    this.bestellpositionService.findBestellpositionById(this.bestellung.id).subscribe(bestellpositionFromServer => {
      this.bestellpositions = bestellpositionFromServer;
    });
  }
}
