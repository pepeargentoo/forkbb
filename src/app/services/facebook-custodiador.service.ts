import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacebookCustodiadorService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlFacebookCustodiador;
  }

  getAllPerfiles() {
    return this.http.get(this.url + 'perfiles_vigilados');
  }

  postPerfilACustodiar(data) {
    return this.http.post(this.url + 'perfiles_vigilados', data);
  }

  deletePerfilACustodiar(id) {
    let data = { 'id_perfil_vigilados': id }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.delete(this.url + 'perfiles_vigilados', httpOptions);
  }

  putPerfilACustodiar(id, nombre) {
    let data = {
      id_perfil_vigilados: id,
      nombre_pagina: nombre
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.put(this.url + 'perfiles_vigilados', data);
  }

}
