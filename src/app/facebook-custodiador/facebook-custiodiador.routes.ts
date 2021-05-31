import { Routes } from '@angular/router';
import { CuentasACustodiarComponent } from './operador/cuentas-a-custodiar/cuentas-a-custodiar.component';

export const FACEBOOK_CUSTODIADOR_ROUTES: Routes = [
    {
        path: 'operador/cuentas',
        component: CuentasACustodiarComponent,
    },
];
