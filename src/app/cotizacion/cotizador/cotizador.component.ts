import { PropertyRead } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule ,FormGroup, FormBuilder, Validators, FormArray,NgForm,FormControl } from '@angular/forms';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { CotizadorService } from 'src/app/servicios/cotizador.service';
import Swal from 'sweetalert2';
import { Cotizacion } from 'src/app/models/cotizacion';


@Component({
  selector: 'app-cotizador',
  templateUrl: './cotizador.component.html',
  styleUrls: ['./cotizador.component.css']
})


export class CotizadorComponent implements OnInit {

  cotizador: Cotizacion = new Cotizacion();
  form: FormGroup;  
 constructor( public request: CotizadorService) 
  {
   
   }

  ngOnInit(): void {
  
  }

  get novale(){

    return this.form.get('personas.primerApellido')?.errors
  }

  formHead = new FormGroup({
    cod_sucursal: new FormControl(530, [Validators.required, Validators.minLength(3)] ),    
    cod_per: new FormControl(8,Validators.required),
    cod_tipo_agente: new FormControl(3,Validators.required),
    cod_agente: new FormControl(8193,Validators.required),
    cod_pto_vta: new FormControl(377,Validators.required),
    personas: new FormGroup({
       primerApellido: new FormControl('LEON',Validators.required),
       nombre: new FormControl('OSCAR',Validators.required),
          documento: new FormGroup({
                  tipo: new FormControl(1,Validators.required),
                   numero: new FormControl('11436265',Validators.required),
                  }),
      
       genero: new FormControl('M',Validators.required),
       fechaNacimiento: new FormControl('1989-11-04',Validators.required),
     
      vehiculo: new FormGroup({
        modelo: new FormControl(2013,Validators.required),
        fasecolda: new FormControl('08008006',Validators.required),
        es0Km: new FormControl(false,Validators.required),
        placa: new FormControl('KAZ126',Validators.required),
        ciudad: new FormControl('11001',Validators.required),
        valorAsegurable: new FormControl(33900000,Validators.required),
        uso: new FormControl('1',Validators.required),
        tseguro: new FormControl('1',Validators.required),
        valorAcc: new FormControl(0,Validators.required),
     
        })  })
  });
  
// get first(): any {
 // return this.form.get('sucursal');
 // }


  onSubmit() {
    if(this.formHead.invalid) { return; }
        this.request.cotizar( this.formHead.value) 
          .subscribe(resp => {
            Swal.fire( resp );
          console.log( resp )
         
          console.log([0][0] )

         },
        (err) =>
         {
           console.warn(err);
           Swal.fire('Error',err.error.error_description,'error')
         })
                     
     //  {first: 'Nancy', last: 'Drew'}
  }
}

