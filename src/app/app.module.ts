import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticleListComponent} from './components/artikels/artikels.component';
import {ArtikelItemComponent} from './components/artikel-item/artikel-item.component';
import {WarenkorbsComponent} from './components/warenkorbs/warenkorbs.component';
import {WarenkorbItemComponent} from './components/warenkorb/warenkorbItem.component';
import {BestellungComponent} from './components/bestellung/bestellung.component';
import { BestellpositionComponent } from './components/bestellposition/bestellposition.component';
import { UserComponent } from './components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArtikelItemComponent,
    WarenkorbsComponent,
    WarenkorbItemComponent,
    BestellungComponent,
    BestellpositionComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
