import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WarenkorbsComponent} from './components/warenkorbs/warenkorbs.component';
import {ArticleListComponent} from './components/articles/articles.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'warenkorbs', component: WarenkorbsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
