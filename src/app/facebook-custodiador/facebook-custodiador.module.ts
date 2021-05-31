import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentasACustodiarComponent } from './operador/cuentas-a-custodiar/cuentas-a-custodiar.component';
import { SharedModuleModule } from '../shared-modules/shared-module.module';



@NgModule({
  declarations: [CuentasACustodiarComponent],
  imports: [
    CommonModule,
    SharedModuleModule,
  ]
})
export class FacebookCustodiadorModule { }
