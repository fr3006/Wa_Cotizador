import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DebugElement, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cotizacion } from '../models/cotizacion'
import { map } from 'rxjs/operators';
import { Console } from 'console';


@Injectable({
  providedIn: 'root'
})
export class CotizadorService {

  private url = 'http://web1services/Ws_IntegracionAutos/';   

  //headers = new HttpHeaders({ 'Content-Type':  'application/json', 'Authorization': 'Bearer' + sessionStorage.getItem('bearer') });
  constuserToken: string= "";

  constructor(private http:HttpClient) {
   
   }

  cotizar(datos_request : Cotizacion )
  {
  
    const headersr=new HttpHeaders(
         {
          'Access-Control-Allow-Origen' : '*', 
          'Authorization': 'Bearer ' + sessionStorage.getItem('bearer'),
           'Content-Type': 'application/json',
        
         });
         return this.http.post(this.url + 'api/Proceso/Cotizar',  datos_request, {headers: headersr })
         .pipe(map(
           (resp:any)=>
           {
             return resp;
           }
         ));       
    }

 }