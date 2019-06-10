import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './pages/artikels/artikels.component';
import {ArtikelItemComponent} from './components/artikel-item/artikel-item.component';
import {WarenkorbsComponent} from './pages/warenkorbs/warenkorbs.component';
import {WarenkorbItemComponent} from './components/warenkorb/warenkorbItem.component';
import {BestellungsComponent} from './pages/bestellung/bestellungs.component';
import {UserComponent} from './pages/user/user.component';
import {AdresseComponent} from './components/adresse/adresse.component';
import {LagersComponent} from './components/lagers/lagers.component';
import {LagerHasArtikelComponent} from './components/lager-has-artikel/lager-has-artikel.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';
import {BestellungItemComponent} from './components/bestellung-item/bestellung-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArtikelItemComponent,
    WarenkorbsComponent,
    WarenkorbItemComponent,
    BestellungsComponent,
    UserComponent,
    AdresseComponent,
    LagersComponent,
    LagerHasArtikelComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
    BestellungItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
