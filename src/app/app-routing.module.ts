import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WarenkorbsComponent} from './pages/warenkorbs/warenkorbs.component';
import {ArticlesComponent} from './pages/artikels/artikels.component';
import {BestellungsComponent} from './pages/bestellung/bestellungs.component';
import {UserComponent} from './pages/user/user.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';
import {BestellungItemComponent} from './components/bestellung-item/bestellung-item.component';
import {UserEditComponent} from './pages/user-edit/user-edit.component';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'warenkorb', component: WarenkorbsComponent},
  {path: 'bestellung', component: BestellungsComponent},
  {path: 'bestellung/:bestellungId', component: BestellungItemComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/edit', component: UserEditComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
