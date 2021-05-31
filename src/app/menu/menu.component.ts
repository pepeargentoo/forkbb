import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItem, MessageService, Message } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MessageService]
})
export class MenuComponent implements OnInit, OnDestroy {
  items: MenuItem[];

  mobileQuery: MediaQueryList;
  msgAlert: Message[];
  //msgFilter: Message[];
  msgFilter: boolean = true;


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-fw pi-desktop',
        label: 'Scraper de Portales',
        items: [
          {
            label: 'Configuración',
            items: [
              // {
              //   label: 'Alertas',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./no-disponible']
              // },
              {
                label: 'General',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },

            ]
          },
          {
            label: 'Operador',
            items: [
              // {
              //   label: 'Alerta a Telegram por provincias',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./scraper-portales/alertas-provincias']
              // },
              // {
              //   label: 'Alertas a Telegram dinámicas',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./scraper-portales/alertas-dinamicas']
              // },
              {
                label: 'Alertas a Telegram',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./scraper-portales/alertas'],
              }
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./scraper-portales/visualizacion/grilla']              
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./scraper-portales/visualizacion/tablero']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Tablero PBI',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./scraper-portales/visualizacion/pbi']
              }
            ]
          }
        ]
      },
      {
        // icon: 'pi pi-fw pi-comments',
        // label: 'Balanceador de Comentarios de Facebook',
        icon: 'pi pi-fw pi-facebook',
        label: 'Facebook custodiador',
        items: [
          {
            label: 'Configuración',
            items: [
              // {
              //   label: 'Alertas',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./no-disponible']
              // },
              {
                label: 'Fuentes de datos',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
            ]
          },
          {
            label: 'Operador',
            //routerLink: ['./balanceador-de-comentarios-facebook/operador'],
            items: [
              // {
              //   label: 'Administrar comentarios',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./balanceador-comentarios/operador/administrar-comentarios'],
              // },
              {
                label: 'Administrar posteos',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./balanceador-comentarios/operador/administrar-posteos'],
              },
              {
                label: 'Administrar cuentas',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./facebook-custodiador/operador/cuentas']
              }
            ]
          },

          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./balanceador-comentarios/visualizacion/grilla']
              },
              {
                label: 'Tablero balanceador',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./balanceador-comentarios/visualizacion/tablero']
              },
              {
                label: 'Tablero custodiador',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./balanceador-comentarios/visualizacion/tablero-custodiador']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Tablero PBI',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./balanceador-comentarios/visualizacion/pbi']
              }
            ]
          }
        ]
      },
      {
        icon: 'pi pi-fw pi-camera',
        label: 'Instagram Custodiador',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['./no-disponible']
            // items:[
            //   {
            //     label: 'Alertas',
            //     icon: 'pi pi-fw pi-circle-off',
            //     routerLink: ['./no-disponible']
            //   },
            // ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Gestión de cuentas de custodiar',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./instagram/operador/cuentas-custodia']

              }
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
            ]
          }
        ]
      },
      {
        icon: 'pi pi-fw pi-wifi',
        label: 'IVR - Llamador',
        items: [
          {
            label: 'Configuración',
            routerLink: ['./no-disponible'],
            icon: 'pi pi-fw pi-circle-off',
            // items: [
            //   {
            //     label: 'Alertas',
            //     icon: 'pi pi-fw pi-circle-off',
            //     routerLink: ['./no-disponible']
            //   },
            // ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Acceso a la plataforma de IVR',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./ivr/visualizacion/tableros']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
            ]
          }
        ]
      },
      {
        icon: 'pi pi-fw pi-th-large',
        label: 'Clasificador de información',
        items: [
          {
            label: 'Configuración',
            items: [
              // {
              //   label: 'Alertas',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./no-disponible']
              // },
              {
                label: 'Fuente de datos',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
            ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Clasificar perfiles',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./clasificador/operador/clasificar-perfiles']
              },
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
            ]
          }
        ]
      },
      {
        icon: 'pi pi-fw pi-share-alt',
        label: 'Multicanalidad',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['./no-disponible'],
            // items:[
            //   {
            //     label: 'Alertas',
            //     icon: 'pi pi-fw pi-circle-off',
            //     routerLink: ['./no-disponible']
            //   },
            // ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Programar envío',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Monitor de envío',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
            ]
          }
        ]
      },
      {
        icon: 'pi pi-fw pi-android',
        label: 'Chatbot',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['./no-disponible']
            // items: [
            //   {
            //     label: 'Alertas',
            //     icon: 'pi pi-fw pi-circle-off',
            //     routerLink: ['./no-disponible']
            //   },
            // ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Gestión de converisones',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Tablero de control de estado de las conversaciones',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Asignar chatbot a canales comunicaciones',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Crear link para embeber un chat web',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              },
              {
                label: 'Formato RSS',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
            ]
          }
        ]
      },
     
      {
        icon: 'pi pi-fw pi-globe',
        label: 'Publicador de contenido',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['./no-disponible']
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Gestión de tareas',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./publicador/operador/alta-regla']
              }
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./publicador/visualizacion/tablero']
              }
              // ,{
              //   label: 'Formato RSS',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./no-disponible']
              // }
            ]
          },
        ]
      },
      // {
      //   icon: 'pi pi-fw pi-facebook',
      //   label: 'Facebook custodiador',
      //   items: [
      //     {
      //       label: 'Configuración',
      //       icon: 'pi pi-fw pi-circle-off',
      //       routerLink: ['./no-disponible']
      //     },
      //     {
      //       label: 'Operador',
      //       items: [
      //         {
      //           label: 'Gestión de cuentas a custodiar',
      //           icon: 'pi pi-fw pi-circle-off',
      //           routerLink: ['./facebook-custodiador/operador/cuentas']
      //         }
      //       ]
      //     },
      //     {
      //       label: 'Visualización',
      //       items: [
      //         {
      //           label: 'Formato Grilla',
      //           icon: 'pi pi-fw pi-circle-off',
      //         },
      //         {
      //           label: 'Tableros',
      //           icon: 'pi pi-fw pi-circle-off',
      //           routerLink: ['./no-disponible']
      //         }
      //         ,{
      //           label: 'Formato RSS',
      //           icon: 'pi pi-fw pi-circle-off',
      //           routerLink: ['./no-disponible']
      //         }
      //       ]
      //     },
          
      //   ]
      // },
      {
        icon: 'pi pi-fw pi-users',
        label: 'Gestión de usuarios',
        items: [
          {
            label: 'Configuración',
            icon: 'pi pi-fw pi-circle-off',
            routerLink: ['./no-disponible']
            // items:[
            //   {
            //     label: 'Alertas',
            //     icon: 'pi pi-fw pi-circle-off',
            //     routerLink: ['./no-disponible']
            //   },
            // ]
          },
          {
            label: 'Operador',
            items: [
              {
                label: 'Gestión de usuarios',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./instagram/operador/cuentas-custodia']

              }
            ]
          },
          {
            label: 'Visualización',
            items: [
              {
                label: 'Formato Grilla',
                icon: 'pi pi-fw pi-circle-off',
              },
              {
                label: 'Tableros',
                icon: 'pi pi-fw pi-circle-off',
                routerLink: ['./no-disponible']
              }
              // ,{
              //   label: 'Formato RSS',
              //   icon: 'pi pi-fw pi-circle-off',
              //   routerLink: ['./no-disponible']
              // }
            ]
          }
        ]
      },
    ]
    this.showAlert();
    this.showFilter();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  showAlert() {
    this.msgAlert = [
      { severity: 'warn', summary: 'ALERTAS', detail: 'Descripción de la alerta' },
    ];
  }

  showFilter() {
    this.msgFilter = true;
  }

  test() {
    this.msgFilter = false;
  }


}
