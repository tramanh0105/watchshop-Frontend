import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Artikel} from '../../models/Artikel';

@Component({
  selector: 'app-artikel-item',
  templateUrl: './artikel-item.component.html',
  styleUrls: ['./artikel-item.component.scss']
})
export class ArtikelItemComponent implements OnInit {
  @Input() artikel: Artikel;
  anzahl = 1;
  imageUrl: string;

  @Output()
  artikelAnzahlEmitter = new EventEmitter<{
    artikel: Artikel,
    newAnzahl: number
  }>();


  constructor() {
  }

  ngOnInit() {
    this.imageUrl = this.generateRandomImgURL();
  }

  /**
   * Generate random images url for each article
   */
  generateRandomImgURL(): string {
    const randomResolution = `${Math.floor(Math.random() * 100) + 200}x${Math.floor(Math.random() * 100) + 200}`;
    return `https://source.unsplash.com/${randomResolution}/?watch`;
  }

  /**
   * Event Handle for "Add to Warenkorb"; emit object {artikel, anzahl} to AtikelsComponent
   */
  onAddWarenkorb() {
    this.artikelAnzahlEmitter.emit({
      artikel: this.artikel,
      newAnzahl: this.anzahl
    });
  }
}
