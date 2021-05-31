import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GrupoCanalService {

  public url: string;

  constructor(
    private http: HttpClient,
  ) {
    this.url = environment.urlProxyDB;
  }

  getGrupoCanal() {
    return this.http.get(this.url + 'GrupoCanal');
  }

  getGrupoCanalById(id) {
    return this.http.get(this.url + 'GrupoCanal?id_grupo=' + id);
  }

  postGrupoCanal(data) {
    console.log(data);    
   
    return this.http.post(this.url + 'GrupoCanal', data);
  }

  putGrupoCanal(data) {
    return this.http.put(this.url + 'GrupoCanal', data);
  }

  deleteGrupoCanal(id) {
    return this.http.delete(this.url + 'GrupoCanal', id);
  }
}
