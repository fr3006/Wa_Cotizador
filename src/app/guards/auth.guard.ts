import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../servicios/usuario.service';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
 
 
  
  constructor(private usuarioService: UsuarioService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
 
   
  if( sessionStorage.getItem('bearer') == '' || sessionStorage.getItem('bearer') == null)
     {
        return false;
      }
  else
     {
        return true;
      }  
    
          
  }
  
}
