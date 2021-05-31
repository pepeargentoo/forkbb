import { Routes } from '@angular/router';
import { AdministrarComentariosComponent } from './operador/administrar-comentarios/administrar-comentarios.component';
import { AdministrarPosteosComponent } from './operador/administrar-posteos/administrar-posteos.component';
import { OperadorComponent } from './operador/operador.component';
import { GrillaComponent } from './visualizacion/grilla/grilla.component';
import { PbiComponent } from './visualizacion/pbi/pbi.component';
import { TableroCustodiadorComponent } from './visualizacion/tableros/tablero-custodiador/tablero-custodiador.component';
import { TableroComponent } from './visualizacion/tableros/tablero/tablero.component';

export const BALANCEADOR_DE_COMENTARIOS_FACEBOOK_ROUTES: Routes = [
    // {
    //     path: 'operador/administrar-comentarios',
    //     component: AdministrarComentariosComponent,
    // },
    {
        path: 'operador/administrar-posteos',
        component: AdministrarPosteosComponent,
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
        component: TableroComponent,
    },
    {
        path: 'visualizacion/tablero-custodiador',
        component: TableroCustodiadorComponent,
    },    
];