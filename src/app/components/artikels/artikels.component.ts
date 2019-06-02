import {Component, OnInit} from '@angular/core';
import {ArtikelService} from '../../services/artikel.service';
import {Artikel} from '../../models/Artikel';

@Component({
  selector: 'app-article-list',
  templateUrl: './artikels.component.html',
  styleUrls: ['./artikels.component.sass']
})
export class ArticleListComponent implements OnInit {
  artikels: Artikel[];

  constructor(private articleService: ArtikelService) {
  }

  ngOnInit() {
    this.articleService.getArtikels().subscribe(articleFromServer => {
      this.artikels = articleFromServer;
    });
  }

}
