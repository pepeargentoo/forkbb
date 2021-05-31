import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { BalanceadorComentariosFacebookService } from 'src/app/services/balanceador-comentarios-facebook.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ExcelService } from 'src/app/services/excel.service';
import { DomSanitizer } from '@angular/platform-browser'; 

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
      state('void', style({
        transform: 'translateX(-10%)',
        opacity: 0
      })),
      state('active', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
  ]
})
export class GrillaComponent implements OnInit {

  public data;
  cols: any[];
  _selectedColumns: any[];

  loading: boolean = true;

  @ViewChild('dt', { static: false }) table: Table;

  constructor(
    private primengConfig: PrimeNGConfig,
    private facebookService: BalanceadorComentariosFacebookService,
    private excelService: ExcelService,
    private _domSanitizer:DomSanitizer
  ) { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.getAllNoticias();
    //this.data = this.facebookService.getAllNoticias();


    this.cols = [
      { field: "pag_noticia", header: 'Pagina' },
      { field: "pag_noticia", header: 'Url-Facebook' },
      { field: 'cant_mg', header: 'Likes' },
      { field: 'cant_comentarios', header: 'Comentarios' },
    ];

    this._selectedColumns = this.cols;
  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  onActivityChange(event) {
    const value = event.target.value;
    if (value && value.trim().length) {
      const activity = parseInt(value);

      if (!isNaN(activity)) {
        this.table.filter(activity, 'activity', 'gte');
      }
    }
  }

  onRepresentativeChange(event) {
    this.table.filter(event.value, 'representative', 'in')
  }

  getAllNoticias() {
    this.facebookService.getListadoNoticias().subscribe(
      (data: any) => {
        console.log(data);
        this.data = data.data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  public exportAsXLSX() {
    // var auxExcel = JSON.parse(JSON.stringify(this.data));
    let array = [];
    this.data.forEach(noticia => {
      console.log(noticia);
      // noticia.comentarios.forEach(comentario => {
      //   noticia.comentarios = comentario.comentario;
      //   noticia.usuario = comentario.usuario;
      //   noticia.id_post = comentario.id_post;
      //   console.log(noticia);
      //   array.push(noticia);
      // });
      for (let index = 0; index < noticia.cant_comentarios; index++) {
        const element = noticia.comentarios[index];
        let noticiacomentario = {};
        Object.assign(noticiacomentario, noticia);
        Object.assign(noticiacomentario, element);
        array.push(noticiacomentario);
      }
    });
    console.log(array);
    this.excelService.exportAsExcelFile(array, 'datagrid-scraper-portales');
  }

  public exportAsXLSXSDataSelected() {
      let array = [];
      this.table.filteredValue.forEach(noticia => {
        for (let index = 0; index < noticia.cant_comentarios; index++) {
          const element = noticia.comentarios[index];
          let noticiacomentario = {};
          Object.assign(noticiacomentario, noticia);
          Object.assign(noticiacomentario, element);
          array.push(noticiacomentario);
        }
      });
      console.log(array);
      this.excelService.exportAsExcelFile(array, 'datagrid-scraper-portales');
  }

  transform(value: string, url:string = ''): any {
    return this._domSanitizer.bypassSecurityTrustResourceUrl( url + value );
  }



}
