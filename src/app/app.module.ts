import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component'; 
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { arrowLeft } from 'ngx-bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgxBootstrapIconsModule.pick({ arrowLeft })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
