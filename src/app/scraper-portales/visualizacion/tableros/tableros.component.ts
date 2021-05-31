import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-tableros',
  templateUrl: './tableros.component.html',
  styleUrls: ['./tableros.component.css']
})
export class TablerosComponent implements OnInit {
  @ViewChild(MatAccordion, { static: false }) accordion: MatAccordion;
  public tableroSelected = "1";
  public kibanaList = [
    { id: 1, nombre: 'Tablero de noticias 1' },
    { id: 2, nombre: 'Tablero de noticias 2' },
    { id: 3, nombre: 'Nube de palabras de noticias' },
    { id: 4, nombre: 'Nube de Medios' },
    { id: 5, nombre: 'Visualización de Palabras vs Medios' },
    { id: 6, nombre: 'Visualización trabajo vs educación' },
    { id: 7, nombre: 'Reloj de medios' },
    { id: 8, nombre: 'Mapa de Calor Grupos vs Medios' },
    { id: 9, nombre: 'Mapa de Calor Terminos vs Fecha' },
    { id: 10, nombre: 'Reloj de Fechas de Noticias' },
  ]
  public color = "primary";

  constructor() { }

  ngOnInit() {
  }

  changeTableroSelected(id) {
    console.log(id);
    this.tableroSelected = id;
    this.accordion.closeAll()
  }

  findNombreTableroById(id) {
    return this.kibanaList.find(element => element.id == id).nombre;
  }

}
