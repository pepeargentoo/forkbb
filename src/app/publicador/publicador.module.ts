import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AltaReglaComponent } from './operador/alta-regla/alta-regla.component';
import { SharedModuleModule } from '../shared-modules/shared-module.module';
import { AltaCuentaComponent } from './operador/alta-cuenta/alta-cuenta.component';
import { TablerosComponent } from './visualizacion/tableros/tableros.component';



@NgModule({
  declarations: [AltaReglaComponent, AltaCuentaComponent, TablerosComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
  ],
  entryComponents:[AltaCuentaComponent]
})
export class PublicadorModule { }
