import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasificadorService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlClasificador;
  }

  getAllReglas() {
    return this.http.get(this.url + 'allrules');
  }

  deleteRegla(id: number) {
    return this.http.get(this.url + 'deleterule/' + id);
  }

  getOneRegla(id: number) {
    return this.http.get(this.url + 'onerule/' + id);
  }

  getAllOrigenes() {
    return this.http.get(this.url + 'allsource');
  }

  getOneOrigen(origen: string) {
    return this.http.get(this.url + 'onesource/' + origen);
  }

  getCampana(campana) {
    return this.http.get(this.url + 'onesource/Ivr/' + campana);
  }

  postPreRegla(data) {
    return this.http.post(this.url + 'prerule', {data});
  }

  postRegla(data) {
    return this.http.post(this.url + 'createroule', data);
  }
}
