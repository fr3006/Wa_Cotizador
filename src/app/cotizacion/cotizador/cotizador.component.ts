import { PropertyRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormsModule ,FormGroup, FormBuilder, Validators, FormArray,NgForm,FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})
export class CotizadorComponent implements OnInit {

   constructor() 
  { }
 
  ngOnInit(): void {
  }

  form = new FormGroup({
    sucursal: new FormControl('', [Validators.required, Validators.minLength(4)] ),    
    agente: new FormControl('',Validators.required),
  });

// get first(): any {
 // return this.form.get('sucursal');
 // }
  

  onSubmit(): void {
    if(this.form.invalid) { return; }
    console.log(this.form.value);  // {first: 'Nancy', last: 'Drew'}
  }

 /* setValue() {
    this.form.setValue({first: 'Carson', last: 'Drew'});
  }*/


}


class  cotizar {
  
  

}