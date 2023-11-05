import { ReceitasListagemComponent } from './../receitas/components/receitas-listagem/receitas-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceitasCadastroComponent } from '../receitas/components/receitas-cadastro/receitas-cadastro.component';

export const receitas_routes: Routes = [
  {
    path: '',
    component: ReceitasListagemComponent,
    children: [
      {
        path: 'cadastrar',
        component: ReceitasCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class DespesasRoutingModule { }
