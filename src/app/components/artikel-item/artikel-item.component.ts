import {Component, Input, OnInit} from '@angular/core';
import {Artikel} from '../../models/Artikel';

@Component({
  selector: 'app-article-item',
  templateUrl: './artikel-item.component.html',
  styleUrls: ['./artikel-item.component.scss']
})
export class ArtikelItemComponent implements OnInit {
  @Input() artikel: Artikel;

  constructor() {
  }

  ngOnInit() {

  }

}
