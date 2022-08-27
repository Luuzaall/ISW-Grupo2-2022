import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  Efectivo: boolean = false

  FormFormaPago = new FormGroup({
   Efectivo: new FormControl(null, [
    Validators.required
   ])
  })
 
  constructor() { }

  ngOnInit(): void {
  }

}
