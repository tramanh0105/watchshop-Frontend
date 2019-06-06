import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ArticlesComponent} from './pages/artikels/artikels.component';
import {ArtikelItemComponent} from './components/artikel-item/artikel-item.component';
import {WarenkorbsComponent} from './pages/warenkorbs/warenkorbs.component';
import {WarenkorbItemComponent} from './components/warenkorb/warenkorbItem.component';
import {BestellungComponent} from './pages/bestellung/bestellung.component';
import {BestellpositionComponent} from './components/bestellposition/bestellposition.component';
import {UserComponent} from './pages/user/user.component';
import {AdresseComponent} from './components/adresse/adresse.component';
import { LagersComponent } from './components/lagers/lagers.component';
import { LagerHasArtikelComponent } from './components/lager-has-artikel/lager-has-artikel.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArtikelItemComponent,
    WarenkorbsComponent,
    WarenkorbItemComponent,
    BestellungComponent,
    BestellpositionComponent,
    UserComponent,
    AdresseComponent,
    LagersComponent,
    LagerHasArtikelComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,


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
