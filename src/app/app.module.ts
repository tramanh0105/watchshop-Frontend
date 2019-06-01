import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
