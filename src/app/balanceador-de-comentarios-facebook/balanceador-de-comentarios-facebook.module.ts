import { NgModule } from '@angular/core';
import { OperadorComponent } from './operador/operador.component';
import { AdministrarComentariosComponent } from './operador/administrar-comentarios/administrar-comentarios.component';
import { SharedModuleModule } from '../shared-modules/shared-module.module';
import { AdministrarPosteosComponent } from './operador/administrar-posteos/administrar-posteos.component';
import { AggComentariosComponent } from './operador/administrar-posteos/agg-comentarios/agg-comentarios.component';
import { VerComentariosComponent } from './operador/administrar-posteos/ver-comentarios/ver-comentarios.component';
import { GrillaComponent } from './visualizacion/grilla/grilla.component';
import { TableroComponent } from './visualizacion/tableros/tablero/tablero.component';
import { PbiComponent } from './visualizacion/pbi/pbi.component';
import { TableroCustodiadorComponent } from './visualizacion/tableros/tablero-custodiador/tablero-custodiador.component';

@NgModule({
  declarations: [
    OperadorComponent,
    AdministrarComentariosComponent,
    AdministrarPosteosComponent,
    AggComentariosComponent,
    VerComentariosComponent,
    GrillaComponent,
    TableroComponent, PbiComponent, TableroCustodiadorComponent],
  imports: [
    SharedModuleModule
  ],
})
export class BalanceadorDeComentariosFacebookModule { }
