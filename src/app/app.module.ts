import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, app_routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ReceitasModule } from './modules/receitas/receitas.module';
import { DespesasModule } from './modules/despesas/despesas.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app_routes),
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    SharedModule.forRoot(),
    DashboardModule,
    ReceitasModule,
    DespesasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
