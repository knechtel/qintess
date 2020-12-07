import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CidadeComponent } from './cidade/cidade.component';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CadastroCidadeComponent } from './cadastro-cidade/cadastro-cidade.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    CidadeComponent,
    NavBarComponent,
    CadastroCidadeComponent,
    FileUploadComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule,
    NgbModule,
    RouterModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
