import { Routes } from '@angular/router';
import { DatagridComponent } from '../datagrid/datagrid.component';
import { AlertasDinamicasComponent } from './operador/alertas-dinamicas/alertas-dinamicas.component';
import { AlertasProvinciasComponent } from './operador/alertas-provincias/alertas-provincias.component';
import { AlertasComponent } from './operador/alertas/alertas.component';
import { GrillaComponent } from './visualizacion/grilla/grilla.component';
import { PbiComponent } from './visualizacion/pbi/pbi.component';
import { PortalNoticiasMediosComponent } from './visualizacion/tableros/portal-noticias-medios/portal-noticias-medios.component';
import { PortalNoticiasNoticiasMediosComponent } from './visualizacion/tableros/portal-noticias-noticias-medios/portal-noticias-noticias-medios.component';
import { PortalNoticiasNuveNoticiasComponent } from './visualizacion/tableros/portal-noticias-nuve-noticias/portal-noticias-nuve-noticias.component';
import { PortalNoticiasProvinciasComponent } from './visualizacion/tableros/portal-noticias-provincias/portal-noticias-provincias.component';
import { PortalNoticiasRelojComponent } from './visualizacion/tableros/portal-noticias-reloj/portal-noticias-reloj.component';
import { PortalNoticiasComponent } from './visualizacion/tableros/portal-noticias/portal-noticias.component';
import { TablerosComponent } from './visualizacion/tableros/tableros.component';

export const SCRAPER_PORTALES_ROUTES: Routes = [
    {
        path: 'alertas-dinamicas',
        component: AlertasDinamicasComponent,
    },
    {
        path: 'alertas-provincias',
        component: AlertasProvinciasComponent,
    },
    {
        path: 'alertas',
        component: AlertasComponent
    },
    {
        path: 'visualizacion/grilla',
        component: GrillaComponent,
    },
    {
        path: 'visualizacion/pbi',
        component: PbiComponent,
    },
    {
        path: 'visualizacion/tablero',
        component: TablerosComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticias',
        component: PortalNoticiasComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticiasmedios',
        component: PortalNoticiasMediosComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticiasnuvenoticias',
        component: PortalNoticiasNuveNoticiasComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticiasprovincias',
        component: PortalNoticiasProvinciasComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticiasreloj',
        component: PortalNoticiasRelojComponent,
    },
    {
        path: 'visualizacion/tablero/portalnoticiasnoticiasmedios',
        component: PortalNoticiasNoticiasMediosComponent,
    },
];
