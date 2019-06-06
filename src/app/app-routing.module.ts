import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WarenkorbsComponent} from './pages/warenkorbs/warenkorbs.component';
import {ArticlesComponent} from './pages/artikels/artikels.component';
import {BestellungComponent} from './pages/bestellung/bestellung.component';
import {UserComponent} from './pages/user/user.component';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {NotfoundComponent} from './pages/notfound/notfound.component';

const routes: Routes = [
  {path: '', component: ArticlesComponent},
  {path: 'warenkorb', component: WarenkorbsComponent},
  {path: 'bestellung', component: BestellungComponent},
  {path: 'user', component: UserComponent},
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
