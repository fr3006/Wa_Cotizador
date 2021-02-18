import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario'


@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  private url = 'http://www.solidaria.com.co/WS_IntegracionAutos/token';   

  userToken: string= "";

  constructor() {    
   }

  
}
