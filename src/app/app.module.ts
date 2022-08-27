import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPedidoComponent } from './components/datos-pedido/datos-pedido.component';

import { DireccionesComponent } from './components/direcciones/direcciones.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPedidoComponent,
    DireccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
