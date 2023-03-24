import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { UsuarioListComponent } from './views/home/usuario-list/usuario-list.component';
import { VotacaoListComponent } from './views/home/votacao-list/votacao-list.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},
{
  path: 'votacao',
  component: VotacaoListComponent
},
{
  path: 'usuario',
  component: UsuarioListComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
