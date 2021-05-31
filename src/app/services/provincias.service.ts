import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlProxyDB;
  }

  getProvincias() {
    return this.http.get(this.url + 'Provincias');
  }

  postGrupoCanalProvincia(data) {
    return this.http.post(this.url + 'GrupoCanalProvincia', data);
  }

  deleteGrupoCanalProvincia(data) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }), body: data
    };
    return this.http.delete(this.url + 'GrupoCanalProvincia', httpOptions);
  }
}
