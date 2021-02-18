import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotizadorComponent } from './cotizacion/cotizador/cotizador.component';
import { AuthGuard } from './guards/auth.guard';
import { RegistroComponent } from './registro/registro/registro.component';




const routes: Routes = [
                        { path: 'registro',component: RegistroComponent},
                        {canActivate: [AuthGuard], path: 'cotizador',component: CotizadorComponent},
                        {path: '', redirectTo:'app',pathMatch:'full'}
                       
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
