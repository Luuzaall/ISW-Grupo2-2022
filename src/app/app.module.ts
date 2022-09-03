import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPedidoComponent } from './components/datos-pedido/datos-pedido.component';

import { DireccionesComponent } from './components/direcciones/direcciones.component';
import { MapaComponent } from './components/mapa/mapa.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    DatosPedidoComponent,

    DireccionesComponent,
    MapaComponent,

    FormaPagoComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FontAwesomeModule,
    ReactiveFormsModule,

    ReactiveFormsModule,
    NgbModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
