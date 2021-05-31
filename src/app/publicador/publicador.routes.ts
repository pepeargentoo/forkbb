import { Routes } from '@angular/router';
import { AltaReglaComponent } from './operador/alta-regla/alta-regla.component';
import { TablerosComponent } from './visualizacion/tableros/tableros.component';

export const PUBLICADOR_ROUTES: Routes = [
    {
        path: 'operador/alta-regla',
        component: AltaReglaComponent,
    },
    {
        path: 'visualizacion/tablero',
        component: TablerosComponent,
    }
];
