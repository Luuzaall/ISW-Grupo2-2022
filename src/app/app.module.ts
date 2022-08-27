import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPedidoComponent } from './datos-pedido/datos-pedido.component';
import { DireccionesComponent } from './components/direcciones/direcciones.component';

@NgModule({
  declarations: [
    AppComponent,
    DatosPedidoComponent,
    DireccionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
