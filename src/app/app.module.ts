import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { AppRoutingModule } from './app-routing.module';
import { ScraperPortalesModule } from './scraper-portales/scraper-portales.module';
import { SharedModuleModule } from './shared-modules/shared-module.module';
import { BalanceadorDeComentariosFacebookModule } from './balanceador-de-comentarios-facebook/balanceador-de-comentarios-facebook.module';
import { NoDisponibleComponent } from './no-disponible/no-disponible.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './services/http-interceptor';
import { ConfirmComponent } from './shared-modules/confirm/confirm.component';
import { AggComentariosComponent } from './balanceador-de-comentarios-facebook/operador/administrar-posteos/agg-comentarios/agg-comentarios.component';
import { VerComentariosComponent } from './balanceador-de-comentarios-facebook/operador/administrar-posteos/ver-comentarios/ver-comentarios.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { CustomerService } from './datagrid/customerservice';
import { PrimeNGConfig } from 'primeng/api';
import { ClasificadorModule } from './clasificador/clasificador.module';
import { InstagramModule } from './instagram/instagram.module';
import { ModificarTemaComponent } from './scraper-portales/operador/alertas/modificar-tema/modificar-tema.component';
import { IvrModule } from './ivr/ivr.module';
import { PublicadorModule } from './publicador/publicador.module';
import { FacebookCustodiadorModule } from './facebook-custodiador/facebook-custodiador.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IndicadoresComponent,
    NoDisponibleComponent,
    ConfirmComponent,
    DatagridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ScraperPortalesModule,
    BalanceadorDeComentariosFacebookModule,
    ClasificadorModule,
    InstagramModule,
    IvrModule,
    PublicadorModule,
    FacebookCustodiadorModule,
    SharedModuleModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    CustomerService,
    PrimeNGConfig
  ],
  entryComponents: [
    ConfirmComponent,
    AggComentariosComponent,
    VerComentariosComponent,
    ModificarTemaComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
