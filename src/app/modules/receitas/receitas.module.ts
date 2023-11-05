import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceitasListagemComponent } from './components/receitas-listagem/receitas-listagem.component';
import { ReceitasCadastroComponent } from './components/receitas-cadastro/receitas-cadastro.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { receitas_routes } from '../despesas/despesas-routing.module';

@NgModule({
  declarations: [
    ReceitasListagemComponent,
    ReceitasCadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule.forRoot(),
    RouterModule.forChild(receitas_routes)
  ]
})
export class ReceitasModule { }
