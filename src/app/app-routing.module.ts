import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'perfil/:id', component: PerfilComponent},
  {path:'**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
