import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPedidoComponent } from './components/datos-pedido/datos-pedido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormaPagoComponent } from './components/forma-pago/forma-pago.component';
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DatosPedidoComponent,
    FormaPagoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
