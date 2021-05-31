import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Table } from 'primeng/table';
import { ExcelService } from 'src/app/services/excel.service';
import { ScraperPortalesService } from 'src/app/services/scraper-portales.service';

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

  loading: boolean = true;

  @ViewChild('dt', { static: false }) table: Table;
  cols: any[];
  _selectedColumns: any[];

  constructor(
    private primengConfig: PrimeNGConfig,
    private portalesOutput: ScraperPortalesService,
    private excelService: ExcelService,
  ) { }

  ngOnInit() {
    this.getAll();

    this.primengConfig.ripple = true;
    this.cols = [
      { field: 'titulo', header: 'Titulo' },
      { field: 'texto', header: 'Texto' },
      { field: 'fecha', header: 'Fecha' },
      { field: 'fecha2', header: 'Fecha2' },
      { field: 'link', header: 'Link' },
      { field: 'grupo', header: 'Grupo' },
      { field: 'medio', header: 'Medios' },
      { field: 'sentimiento', header: 'Sentimiento' },
      // { field: 'id', header: 'Comentarios' },
      { field: 'educacion', header: 'Educación' },
      { field: 'imagen', header: 'Imagen' },
      // { field: 'location3', header: 'Comentarios' },
      // { field: 'location100', header: 'Comentarios' },
      // { field: 'location200', header: 'Comentarios' },
      // { field: 'location300', header: 'Comentarios' },
      // { field: 'noticiascol', header: 'Comentarios' },
      { field: 'salud', header: 'Salud' },
      { field: 'sentiminto', header: 'Sentiminto' },
      { field: 'trabajo', header: 'Trabajo' },
    ];

    this._selectedColumns = this.cols;
    
    // this.selectedColumns = [
    //   { field: 'titulo', header: 'Titulo' },
    //   { field: 'texto', header: 'Texto' },
    //   { field: 'fecha', header: 'Fecha' },
    //   { field: 'fecha2', header: 'Fecha2' },
    //   { field: 'link', header: 'Link' },
    //   { field: 'grupo', header: 'Grupo' },
    //   { field: 'medio', header: 'Medios' },
    //   { field: 'sentimiento', header: 'Sentimiento' },
    // ];
    // this._selectedColumns = [
    //   { field: 'titulo', header: 'Titulo' },
    //   { field: 'texto', header: 'Texto' },
    //   { field: 'fecha', header: 'Fecha' },
    //   { field: 'fecha2', header: 'Fecha2' },
    //   { field: 'link', header: 'Link' },
    //   { field: 'grupo', header: 'Grupo' },
    //   { field: 'medio', header: 'Medios' },
    //   { field: 'sentimiento', header: 'Sentimiento' },
    // ];

  }

  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }

  getAll() {
    this.portalesOutput.getOutputPortales().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
        this.loading = false;
      },
      (err) => {
        console.log(err);
        this.loading = false;
      }
    );
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

  public exportAsXLSX() {
    // var auxExcel = JSON.parse(JSON.stringify(this.data));
    this.excelService.exportAsExcelFile(this.data, 'datagrid-scraper-portales');
  }

  public exportAsXLSXSDataSelected() {
    this.excelService.exportAsExcelFile(this.table.filteredValue, 'datagrid-scraper-portales');
  }

  public getDateFormat(value) {
    const date = new Date(value).toISOString().substring(0,10);
    return date;
  }


}
