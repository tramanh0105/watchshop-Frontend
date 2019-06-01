import {Component, OnInit} from '@angular/core';
import {ArticleListeService} from '../../services/article-liste.service';
import {Article} from '../../models/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.sass']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[];

  constructor(private articleListService: ArticleListeService) {
  }

  ngOnInit() {
    this.articleListService.getArticleList().subscribe(articleFromServer => {
      this.articleList = articleFromServer;
    });
  }

}
