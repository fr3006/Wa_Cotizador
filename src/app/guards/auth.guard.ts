import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
 
  usuarioToken :string = '';
  tipoToken: string = '';
  
  constructor(private usuarioService: UsuarioService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
   this.usuarioService.userToken = this.usuarioToken;
   this.usuarioService.typeToken = this.tipoToken;
   
      
    //console.log('paso por el canactivate del guard');
    //console.log(this.usuarioService.userToken);
    //console.log(this.usuarioService.typeToken);
    //console.log(this.usuarioToken);
    //console.log(this.tipoToken);
    return true;
  }
  
}
