import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const app_routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module')
    .then((m) => m.DashboardModule)
  },
  {
    path: 'receitas',
    loadChildren: () =>
      import('./modules/receitas/receitas.module')
    .then((m) => m.ReceitasModule)
  },
  {
    path: 'despesas',
    loadChildren: () =>
      import('./modules/despesas/despesas.module')
    .then((m) => m.DespesasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
