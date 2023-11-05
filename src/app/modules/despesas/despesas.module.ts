import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DespesasListagemComponent } from './components/despesas-listagem/despesas-listagem.component';
import { DespesasCadastroComponent } from './components/despesas-cadastro/despesas-cadastro.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { despesas_routes } from '../receitas/receitas-routing.module';

@NgModule({
  declarations: [
    DespesasListagemComponent,
    DespesasCadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(despesas_routes)
  ]
})
export class DespesasModule { }
