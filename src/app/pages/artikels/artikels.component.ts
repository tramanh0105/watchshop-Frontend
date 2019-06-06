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

}
