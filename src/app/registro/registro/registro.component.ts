import { tokenReference } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormsModule ,FormGroup, FormBuilder, Validators, FormArray,NgForm,FormControl } from '@angular/forms';
import { access } from 'fs';
import { error } from 'protractor';
import { Usuario } from 'src/app/models/usuario';
import { CotizadorService } from 'src/app/servicios/cotizador.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   usuario: Usuario = new Usuario();
   

  constructor(
    public auth: UsuarioService

  ) { }

  ngOnInit(): void {
    this.usuario = new Usuario();
  }

  form = new FormGroup({
    clave: new FormControl('', [Validators.required, Validators.minLength(4)]),
    contrasena: new FormControl('',Validators.required),
   });

   onSubmit() {
    if(this.form.invalid) { return; }
     
     this.auth.login(this.form.value )
     .subscribe(resp => {
       
       console.log(resp); 
             
     },
     (err) => 
      {
       console.log(err.status);
             
     })
    
  }


}

