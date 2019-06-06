import {Component, Input, OnInit} from '@angular/core';
import {LagerHasArtikel} from '../../models/LagerHasArtikel';
import {LagerHasArtikelService} from '../../services/lager-has-artikel.service';
import {Lager} from '../../models/Lager';
import {Artikel} from '../../models/Artikel';

@Component({
  selector: 'app-lager-has-artikel',
  templateUrl: './lager-has-artikel.component.html',
  styleUrls: ['./lager-has-artikel.component.sass']
})
export class LagerHasArtikelComponent implements OnInit {
  @Input() artikel: Artikel;
  lagers: Lager[];

  constructor(private lagerHasArtikelService: LagerHasArtikelService) {
  }

  ngOnInit() {
    this.lagerHasArtikelService.getLagers(this.artikel.id);
  }

}
