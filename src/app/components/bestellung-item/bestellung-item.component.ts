import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Bestellung} from '../../models/Bestellung';
import {Bestellposition} from '../../models/Bestellposition';
import {BestellpositionService} from '../../services/bestellposition.service';
import {BestellpositionsComponent} from '../../pages/bestellpositions/bestellpositions.component';
import {CurrentBestellungService} from '../../services/current-bestellung.service';

@Component({
  selector: 'app-bestellung-item',
  templateUrl: './bestellung-item.component.html',
  styleUrls: ['./bestellung-item.component.scss']
})
export class BestellungItemComponent implements OnInit {
  @Input() bestellung: Bestellung;


  constructor(private currentBestellungService: CurrentBestellungService) {
  }

  ngOnInit() {
  }

  // change currentBestellung
  onNewBestellung() {
    this.currentBestellungService.changeCurrentBestellung(this.bestellung);
  }
}
