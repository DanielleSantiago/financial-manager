import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DespesasListagemComponent } from '../despesas/components/despesas-listagem/despesas-listagem.component';
import { DespesasCadastroComponent } from '../despesas/components/despesas-cadastro/despesas-cadastro.component';

export const despesas_routes: Routes = [
  {
    path: '',
    component: DespesasListagemComponent,
    children: [
      {
        path: 'cadastrar',
        component: DespesasCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
