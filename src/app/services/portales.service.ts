import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PortalesService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlProxyDB;
  }

  getPortalesByProvincia(params) {
    return this.http.get(this.url + 'Portales?id_provincia=' + params);
  }

  postPortales(data) {
    return this.http.post(this.url + 'Portales', data);
  }

  putPortales(data) {
    return this.http.put(this.url + 'Portales', data);
  }

  deletePortales(id_portal) {
    return this.http.delete(this.url + 'Portales', id_portal);
  }
}
