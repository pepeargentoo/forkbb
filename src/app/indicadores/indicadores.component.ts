import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.css']
})
export class IndicadoresComponent implements OnInit {


  public items = [
    {
      icon: 'pi-desktop',
      nombre: 'Scraper de Portales',
      classColor: 'bg-aqua',
      classBorder: 'border-aqua',
      indicadores: [
        { nombre: 'Grupos activos', valor: '-' },
        { nombre: 'Clientes', valor: '-' },
        { nombre: 'Noticias por día', valor: '-' },
      ]
    },
    {
      icon: 'pi-comments',
      nombre: 'Balanceador de comentarios',
      classColor: 'bg-succes',
      classBorder: 'border-succes',
      indicadores: [
        { nombre: 'Post Balanceando', valor: '-' },
        { nombre: 'Comentarios', valor: '-' },
        { nombre: 'Links', valor: '-' },
      ]
    },
    {
      icon: 'pi-wifi',
      nombre: 'IVR - Llamador',
      classColor: 'bg-secondary',
      classBorder: 'border-secondary',
      indicadores: [
        { nombre: 'Campañas', valor: '-' },
        { nombre: 'Público objetivo', valor: '-' },
        { nombre: 'Público alcanzado', valor: '-' },
        { nombre: 'Público restante', valor: '-' },
      ]
    },
    {
      icon: 'pi-th-large',
      nombre: 'Clasificador de información',
      classColor: 'bg-red',
      classBorder: 'border-red',
      indicadores: [
        { nombre: 'Indicador 1', valor: '-' },
        { nombre: 'Indicador 2', valor: '-' },
        { nombre: 'Indicador 3', valor: '-' },
      ]
    },
    {
      icon: 'pi-share-alt',
      nombre: 'Multicanalidad',
      classColor: 'bg-info',
      classBorder: 'border-info',
      indicadores: [
        { nombre: 'Indicador 1', valor: '-' },
        { nombre: 'Indicador 2', valor: '-' },
        { nombre: 'Indicador 3', valor: '-' },
      ]
    },
    {
      icon: 'pi-android',
      nombre: 'Chatbot',
      classColor: 'bg-warning',
      classBorder: 'border-warning',
      indicadores: [
        { nombre: 'Indicador 1', valor: '-' },
        { nombre: 'Indicador 2', valor: '-' },
        { nombre: 'Indicador 3', valor: '-' },
      ]
    },
    {
      icon: 'pi-camera',
      nombre: 'Instagram Custodiador',
      classColor: 'bg-secondary',
      classBorder: 'border-primary',
      indicadores: [
        { nombre: 'Cuentas', valor: '-' },
        { nombre: 'Comentarios', valor: '-' },
        { nombre: 'Publicaciones', valor: '-' },
      ]
    },
    {
      icon: 'pi-globe',
      nombre: 'Publicador de contenido',
      classColor: 'bg-red',
      classBorder: 'border-primary',
      indicadores: [
        { nombre: 'Cuentas', valor: '-' },
        { nombre: 'Comentarios', valor: '-' },
        { nombre: 'Publicaciones', valor: '-' },
      ]
    },
    {
      icon: 'pi-facebook',
      nombre: 'Facebook custodiador',
      classColor: 'bg-primary',
      classBorder: 'border-primary',
      indicadores: [
        { nombre: 'Cuentas', valor: '-' },
        { nombre: 'Posts', valor: '-' },
        { nombre: 'Comentarios', valor: '-' },
      ]
    },
  ]
  data: any;
  dataPie: any;
  dataDonus: any

  constructor() {
    this.data = {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
      datasets: [
        {
          label: 'Positivo',
          backgroundColor: '#00a65a',
          borderColor: '#000000',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Negativo',
          backgroundColor: '#dd4b39',
          borderColor: '#000000',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    }
    this.dataPie = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#f39c12",
            "#00c0ef",
            "#2c5d96"
          ],
          hoverBackgroundColor: [
            "#f39c12",
            "#00c0ef",
            "#2c5d96"
          ]
        }]
    };
    this.dataDonus = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#f39c12",
            "#00c0ef",
            "#2c5d96"
          ],
          hoverBackgroundColor: [
            "#f39c12",
            "#00c0ef",
            "#2c5d96"
          ]
        }]
    };
  }

  ngOnInit() {
  }

  selectData($event) {
    console.log($event);
  }



}
