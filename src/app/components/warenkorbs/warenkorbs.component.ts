import {AfterContentInit, Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Warenkorb} from '../../models/Warenkorb';
import {WarenkorbsService} from '../../services/warenkorbService/warenkorbs.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-warenkorbs',
  templateUrl: './warenkorbs.component.html',
  styleUrls: ['./warenkorbs.component.sass']
})
export class WarenkorbsComponent implements OnInit {

  constructor(private warenkorbsService: WarenkorbsService) {
  }

  warenkorbs: Warenkorb[];
  total : number;

  ngOnInit() {
    this.warenkorbsService.getWarenkorbs().subscribe(warenkorbFromServer => this.warenkorbs = warenkorbFromServer);
    this.getTotal();
  }

   getTotal() {
    let sum = 0;
    for (let warenkorb of this.warenkorbs) {
      sum += warenkorb.article.preis * warenkorb.anzahl;
    }
    this.total = sum;
  }
}
