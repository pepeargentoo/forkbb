import { Component, OnInit } from '@angular/core';
import { BalanceadorComentariosFacebookService } from 'src/app/services/balanceador-comentarios-facebook.service';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-administrar-comentarios',
  templateUrl: './administrar-comentarios.component.html',
  styleUrls: ['./administrar-comentarios.component.css']
})
export class AdministrarComentariosComponent implements OnInit {

  public noticias;
  constructor(
    private noticiasService: BalanceadorComentariosFacebookService,
  ) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias() {
    this.noticiasService.getListadoNoticias().subscribe(
      (data: any) => {
        console.log(data);
        this.noticias = data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
