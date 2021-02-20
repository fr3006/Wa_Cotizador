import { PropertyRead } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule ,FormGroup, FormBuilder, Validators, FormArray,NgForm,FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})


export class CotizadorComponent implements OnInit {


  form  :  FormGroup  
 constructor() 
  {
   
   }

  ngOnInit(): void {
  
  }

  get novale(){

    return this.form.get('personas.primerApellido')?.errors
  }

  formHead = new FormGroup({
    cod_sucursal: new FormControl('', [Validators.required, Validators.minLength(4)] ),    
    cod_per: new FormControl('',Validators.required),
    cod_tipo_agente: new FormControl('',Validators.required),
    agente: new FormControl('',Validators.required),
    cod_pto_vta: new FormControl('',Validators.required),
    personas: new FormGroup({
      primerApellido: new FormControl('',Validators.required),
      nombre: new FormControl('',Validators.required),
      tipo: new FormControl('',Validators.required),
      numero: new FormControl('',Validators.required),
      genero: new FormControl('',Validators.required),
      fechaNacimiento: new FormControl('',Validators.required),
      modelo: new FormControl('',Validators.required),
      fasecolda: new FormControl('',Validators.required),
      es0Km: new FormControl('',Validators.required),
      placa: new FormControl('',Validators.required),
      ciudad: new FormControl('',Validators.required),
      ValorAsegurable: new FormControl('',Validators.required),
      Uso: new FormControl('',Validators.required),
      TipodeSeguro: new FormControl('',Validators.required),
      ValorAceesorios: new FormControl('',Validators.required),

         })  
  });
 
// get first(): any {
 // return this.form.get('sucursal');
 // }


  onSubmit(): void {
    if(this.formHead.invalid) { return; }
    console.log(this.formHead);  // {first: 'Nancy', last: 'Drew'}
  }

 /* setValue() {
    this.form.setValue({first: 'Carson', last: 'Drew'});
  }*/


}

