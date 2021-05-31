import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertasDinamicasComponent } from './operador/alertas-dinamicas/alertas-dinamicas.component';
import { AlertasProvinciasComponent } from './operador/alertas-provincias/alertas-provincias.component';
import { SharedModuleModule } from '../shared-modules/shared-module.module';
import { TablerosComponent } from './visualizacion/tableros/tableros.component';
import { AngularMaterialModule } from '../shared-modules/angular-material.module';
import { GrillaComponent } from './visualizacion/grilla/grilla.component';
import { AlertasComponent } from './operador/alertas/alertas.component';
import { ModificarTemaComponent } from './operador/alertas/modificar-tema/modificar-tema.component';
import { PortalNoticiasComponent } from './visualizacion/tableros/portal-noticias/portal-noticias.component';
import { PortalNoticiasMediosComponent } from './visualizacion/tableros/portal-noticias-medios/portal-noticias-medios.component';
import { PortalNoticiasNoticiasMediosComponent } from './visualizacion/tableros/portal-noticias-noticias-medios/portal-noticias-noticias-medios.component';
import { PortalNoticiasNuveNoticiasComponent } from './visualizacion/tableros/portal-noticias-nuve-noticias/portal-noticias-nuve-noticias.component';
import { PortalNoticiasProvinciasComponent } from './visualizacion/tableros/portal-noticias-provincias/portal-noticias-provincias.component';
import { PortalNoticiasRelojComponent } from './visualizacion/tableros/portal-noticias-reloj/portal-noticias-reloj.component';
import { PbiComponent } from './visualizacion/pbi/pbi.component';

@NgModule({
  declarations: [
    AlertasDinamicasComponent, 
    AlertasProvinciasComponent, 
    AlertasComponent, ModificarTemaComponent,
    TablerosComponent, GrillaComponent, PortalNoticiasComponent, PortalNoticiasMediosComponent, PortalNoticiasNoticiasMediosComponent, PortalNoticiasNuveNoticiasComponent, PortalNoticiasProvinciasComponent, PortalNoticiasRelojComponent, PbiComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    SharedModuleModule,
  ]
})
export class ScraperPortalesModule { }
