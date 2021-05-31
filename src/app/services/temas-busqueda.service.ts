import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TemasBusquedaService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlProxyDB;
  }

  getTemasBusqueda(params) {
    return this.http.get(this.url + 'TemasBusqueda?id_grupo=' + params);
  }

  postTemasBusqueda(data) {
    console.log(data);
    return this.http.post(this.url + 'TemasBusqueda', data);
  }

  putTemasBusqueda(data) {
    return this.http.put(this.url + 'TemasBusqueda', data);
  }

  deleteTemasBusqueda(data) {
    console.log(data);

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.delete(this.url + 'TemasBusqueda', httpOptions);
  }
}
