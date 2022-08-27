import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-forma-pago',
  templateUrl: './forma-pago.component.html',
  styleUrls: ['./forma-pago.component.css']
})
export class FormaPagoComponent implements OnInit {
  
  formaPago: string = "";

  FormFormaPago: FormGroup = new FormGroup({

  });
 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.FormFormaPago = this.fb.group({
    
    })
  }

}
