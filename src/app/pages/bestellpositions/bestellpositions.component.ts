import {Component, OnInit} from '@angular/core';
import {Bestellposition} from '../../models/Bestellposition';
import {BestellpositionService} from '../../services/bestellposition.service';
import {Bestellung} from '../../models/Bestellung';
import {CurrentBestellungService} from '../../services/current-bestellung.service';
import {BestellungService} from '../../services/bestellung.service';

@Component({
  selector: 'app-bestellposition',
  templateUrl: './bestellpositions.component.html',
  styleUrls: ['./bestellpositions.component.scss']
})
export class BestellpositionsComponent implements OnInit {
  bestellPositions: Bestellposition[];
  currentBestellung: Bestellung;
  gesamtPreis: number;

  constructor(private currentBestellungService: CurrentBestellungService, private bestellPositionService: BestellpositionService, private bestellungService: BestellungService) {
  }

  ngOnInit() {
    this.currentBestellungService.getCurrentBestellung().subscribe(currentBestellungFromService => {
        this.currentBestellung = currentBestellungFromService;

        if (this.currentBestellung !== null) {
          this.bestellPositionService.findBestellpositionById(this.currentBestellung.id).subscribe(bestellPositionFormServer => {
            this.bestellPositions = bestellPositionFormServer;
            this.preisCalculate();
          });
        }
      }
    );
  }

  preisCalculate() {
    this.gesamtPreis = 0;
    this.bestellPositions.forEach(posten => {
      this.gesamtPreis += posten.artikel.preis * posten.anzahl;
    });
  }

  // change bestellungStatus to 'bezahlt' when customer click the button
  onBezahlen() {
    if (this.currentBestellung.bestellstatus === 'Bearbeitet') {
        this.bestellungService.updateBestellung(this.currentBestellung.id).subscribe(bestellungFromServer =>
        this.currentBestellung = bestellungFromServer);
    }
  }
}
