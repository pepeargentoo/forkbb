import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicadorService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlPublicador;
  }

  getOrigenes() {
    return this.http.get(this.url + 'PublicadorOrigenes');
  }

  getDestinos() {
    return this.http.get(this.url + 'PublicadorDestinos');
  }

  getReglas() {
    return this.http.get(this.url + 'Publicador');
  }

  getCuentasWordpress() {
    return this.http.get(this.url + 'Cuentas_wordpress');
  }

  postReglas(value) {
    // const httpOptions = {
    //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {data}
    // };
    let data = value;
    // let data = {
    //   "Origen":[
          
    //         {
    //           "Id_origen":1,
    //           "Id_provincias":[1,5,2],
    //           "Temas":["alberto","covid"],
    //           "Plataforma":"Portal"
    //         }
    //   ],
    //   "Destino":[1],
    //   "Descripcion_publicador":"Publicador Prueba"
    //   };
    return this.http.post(this.url + 'Publicador', data);
  }

  deleteReglas(id) {
     const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: {id_padre : id}
    };
    return this.http.delete(this.url + 'Publicador', httpOptions);
  }

  postCuentasWordpress(data) {
    return this.http.post(this.url + 'Cuentas_wordpress', data);
  }

  getPortalesWOrdpress() {
    return this.http.get(this.url + 'Portales_wordpress');
  }

  postPortalesWordpress(data) {
    return this.http.post(this.url + 'Portales_wordpress', data);
  }

}
