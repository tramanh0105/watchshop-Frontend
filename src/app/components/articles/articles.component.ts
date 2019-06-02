import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../../services/articleService/articles.service';
import {Article} from '../../models/Article';

@Component({
  selector: 'app-article-list',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticleListComponent implements OnInit {
  articleList: Article[];

  constructor(private articleListService: ArticlesService) {
  }

  ngOnInit() {
    this.articleListService.getArticleList().subscribe(articleFromServer => {
      this.articleList = articleFromServer;
    });
  }

}
