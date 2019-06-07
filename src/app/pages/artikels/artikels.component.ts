import {Component, OnInit} from '@angular/core';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/Artikel';

@Component({
  selector: 'app-artikels',
  templateUrl: './artikels.component.html',
  styleUrls: ['./artikels.component.scss']
})
export class ArticlesComponent implements OnInit {
  artikels: Artikel[];


  constructor(private articleService: ArtikelService) {
  }

  ngOnInit() {
    this.articleService.getArtikels().subscribe(artikels => {

      this.artikels = artikels;
      console.log(this.artikels);
    });
  }

  onAddWarenkorb(artikel: Artikel) {
    // Update on Server:
    // Todo 1. Check if the artikel already in the user's Warenkorb

    // Todo 2. Update the original Anzahl or create a new Warenkorb

    // Todo 3. Call Put or Post request of WarenkorbService

  }
}
