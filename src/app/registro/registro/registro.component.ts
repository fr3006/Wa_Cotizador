import { tokenReference } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {FormsModule ,FormGroup, FormBuilder, Validators, FormArray,NgForm,FormControl } from '@angular/forms';
import { access } from 'fs';
import { error } from 'protractor';
import { Usuario } from 'src/app/models/usuario';

import { UsuarioService } from 'src/app/servicios/usuario.service';
import Swal from 'sweetalert2';
import { runInThisContext } from 'vm';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   usuario: Usuario = new Usuario();
   

  constructor(
    public auth: UsuarioService,
    private router : Router
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
       
      this.router.navigateByUrl('/cotizador');        
             
     },
     (err) => 
      {
      Swal.fire('Error',err.error.error_description,'error')               
     })    
  }


}

