import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificarPerfilesComponent } from './operador/clasificar-perfiles/clasificar-perfiles.component';
import { SharedModuleModule } from '../shared-modules/shared-module.module';



@NgModule({
  declarations: [ClasificarPerfilesComponent],
  imports: [
    CommonModule,
    SharedModuleModule
  ]
})
export class ClasificadorModule { }
