import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { HomeComponent } from './home/home.component';
// import { SCRAPER_DE_NOTICIAS_ROUTES } from './scraper-de-noticias/scraper-de-noticias.routes';
// import { BALANCEADOR_DE_COMENTARIOS_FACEBOOK_ROUTES } from './balanceador-de-comentarios-facebook/balanceador-de-comentarios-facebook.routes';
// import { AUTOSCRAPER_ROUTES } from './autoscraper-modulo/autoscraper.routes';
import { MenuComponent } from './menu/menu.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { SCRAPER_PORTALES_ROUTES } from './scraper-portales/scraper-portales.routes';
import { BALANCEADOR_DE_COMENTARIOS_FACEBOOK_ROUTES } from './balanceador-de-comentarios-facebook/balanceador-de-comentarios-facebook.routes';
import { CLASIFICADOR_ROUTES } from './clasificador/clasificador.routes';
import { INSTAGRAM_ROUTES } from './instagram/instagram.routes';
import { NoDisponibleComponent } from './no-disponible/no-disponible.component';
import { IVR_ROUTES } from './ivr/ivr.routes';
import { PUBLICADOR_ROUTES } from './publicador/publicador.routes';
import { FACEBOOK_CUSTODIADOR_ROUTES } from './facebook-custodiador/facebook-custiodiador.routes';

const routes: Routes = [
  { path: '' , pathMatch: 'full' , redirectTo: 'menu' },
  { 
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: '' , pathMatch: 'full' , redirectTo: 'indicadores' },
      { path: 'indicadores', component: IndicadoresComponent},
      { path: 'scraper-portales' , children:  SCRAPER_PORTALES_ROUTES },
      { path: 'balanceador-comentarios' , children: BALANCEADOR_DE_COMENTARIOS_FACEBOOK_ROUTES  },
      { path: 'clasificador' , children: CLASIFICADOR_ROUTES },
      { path: 'instagram' , children: INSTAGRAM_ROUTES  },
      { path: 'ivr' , children: IVR_ROUTES  },
      { path: 'publicador' , children: PUBLICADOR_ROUTES  },
      { path: 'facebook-custodiador' , children: FACEBOOK_CUSTODIADOR_ROUTES  },
      { path: 'no-disponible', component: NoDisponibleComponent}
      // { path: 'balanceador-de-comentarios-facebook', children:  BALANCEADOR_DE_COMENTARIOS_FACEBOOK_ROUTES},
      // { path: 'autoScraper', children: AUTOSCRAPER_ROUTES},
    ]
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
