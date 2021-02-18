import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { tokenReference } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private url = ' http://web1services/WS_IntegracionAutos/';   

  userToken: string= "";
  typeToken: string= "";

  constructor(private http:HttpClient) { }
  
  login(usuario: Usuario ){  
   var data = "grant_type=password&username=" + usuario.clave + "&password=" + usuario.contrasena + "&scope=" + usuario.contrasena; 
   return this.http.post(this.url + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }}
   ).pipe(map( 
     (resp:any) =>{  
       this.guardarToken(resp.access_token,resp.token_type)
       resp.access_token = this.userToken;
       resp.token_type = this.typeToken;
       return resp;
     }));
   
  }
  
  public guardarToken(idToken : string, tipoToken:string)
  {
    this.userToken = idToken;
    this.typeToken   =tipoToken;
    localStorage.setItem(tipoToken,idToken);
 
 }

  logout(){


  }
}
