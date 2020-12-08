import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { CidadeComponent } from './cidade/cidade.component';
import { CotacaoDolarComponent } from './cotacao-dolar/cotacao-dolar.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'
const routes: Routes = [
  {path:'cadastro', component:CadastroCidadeComponent,runGuardsAndResolvers: 'always',},
  {path:'cidade/:id', component:CidadeComponent,runGuardsAndResolvers: 'always',},
  {path:'file-upload', component:FileUploadComponent},
  {path:'cotacao-dolar', component:CotacaoDolarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
