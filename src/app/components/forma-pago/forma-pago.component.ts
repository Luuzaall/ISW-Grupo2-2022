import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  efectivo: boolean = false;
  tarjeta: boolean = false;

  FormFormaPago = new FormGroup({
   efectivo: new FormControl(null, [
    Validators.required
   ]),
   tarjeta: new FormControl(null, [
    Validators.required
   ])
  })
 
  constructor() { }

  ngOnInit(): void {
  }

}
