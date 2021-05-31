import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GrupoDinamicoModel } from '../models/grupo-dinamico.model';

@Injectable({
  providedIn: 'root'
})
export class ScraperPortalesService {

  public url1: string;
  public url2: string;
  public urlOutput: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url1 = environment.urlSonda1;
    this.url2 = environment.urlSonda2;
    this.urlOutput = environment.urlOutputScrap;
  }

  // Sonda 1
  public getTemasSonda1() {
    return this.http.get(this.url1 + 'sb_get_sonda2t/');
  }

  public updateTemaSonda1(data) {
    return this.http.get(this.url1 + 'sb_update_telegram/?param=' + data.grupo + ':' + data.palabras ,{});
  }

  // Sonda 2
  public getTemasSonda2() {
    return this.http.get(this.url2 + 'sb_get_sonda2j/');
  }

  public updateTemaSonda2(data) {
    console.log(data.temas);
    let arrayDeTemas = data.temas.split(",");
    console.log(arrayDeTemas);
    let auxArray = [];
    arrayDeTemas.forEach(element => {
      auxArray.push("'"+element+"'")
    });
    console.log(auxArray);
    return this.http.get(this.url2 + 'sb_update2_telegram/?param='+data.id+":('"+data.nombre+"',["+auxArray+'],'+'['+data.provincias+"])", {});
  }

  public deleteSonda2(id) {
    return this.http.get(this.url2 + 'sb_delete_telegram/?param=' + id);
  }


  getTemaByGrupo(grupo: string) {
    return this.http.get(this.url1 + 'sb_get_tema/?grupo=' + grupo);
  }

  getAllTemasJson() {
    return this.http.get(this.url1 + 'sb_get_sonda2j'); 
  }

  getAllTemas() {
    return this.http.get(this.url1 + 'sb_get_sonda2t');
  }

  updateTemaByGrupo(data) {
    return this.http.get(this.url1 + 'sb_update_telegram/?param=' + data.grupo + ':' + data.palabras ,{});
  }

  updateTemaByGrupoDinamico(data: GrupoDinamicoModel) {
    return this.http.get(this.url1 + 'sb_update_telegram/?param=' + data.id + ':' + data.nombre + ','+ data.temas + ',' +data.provincia ,{});
  }

  getOutputPortales() {
    return this.http.get(this.urlOutput + 'OutputPortales');
  }

  
}
