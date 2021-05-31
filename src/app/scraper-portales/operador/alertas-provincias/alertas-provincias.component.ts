import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { GrupoModel } from 'src/app/models/grupo.model';
import { ScraperPortalesService } from 'src/app/services/scraper-portales.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alertas-provincias',
  templateUrl: './alertas-provincias.component.html',
  styleUrls: ['./alertas-provincias.component.css'],
  providers: [MessageService]
})
export class AlertasProvinciasComponent implements OnInit {

  public form: FormGroup;
  public displayedColumns: string[] = ['grupo', 'temas', 'editar'];
  public dataSource = new MatTableDataSource<GrupoModel>([]);
  // public listaGrupos = [
  //   { value: 'sb_Portales' },
  //   { value: 'sb_RSS' },
  //   { value: 'sb_sf_001' },
  //   { value: 'sb_sf_002' },
  //   { value: 'sb_sf_003' },
  //   { value: 'sb_arg_004' },
  //   { value: 'sb_arg_005' },
  //   { value: 'sb_arg_006' },
  //   { value: 'sb_arg_007' },
  //   { value: 'sb_arg_008' },
  //   { value: 'sb_arg_009' },
  //   { value: 'sb_arg_010' },
  //   { value: 'sb_arg_011' },
  //   { value: 'sb_arg_012' },
  //   { value: 'sb_arg_013' },
  //   { value: 'sb_arg_014' },
  //   { value: 'sb_arg_015' },
  //   { value: 'sb_arg_016' },
  //   { value: 'sb_arg_017' },
  //   { value: 'sb_arg_018' },
  //   { value: 'sb_arg_019' },
  //   { value: 'sb_arg_020' },
  //   { value: 'sb_arg_021' },
  //   { value: 'sb_arg_022' },
  //   { value: 'sb_arg_024' },
  //   { value: 'sb_arg_025' },
  //   { value: 'sb_arg_026' },
  //   { value: 'sb_arg_027' },
  //   { value: 'sb_arg_028' },
  // ]
  public listaGrupos = [
    { value: 'buenos_aires' },
    { value: 'caba' },
    { value: 'catamarca' },
    { value: 'chaco' },
    { value: 'chubut' },
    { value: 'cordoba' },
    { value: 'corrientes' },
    { value: 'entre_rios' },
    { value: 'formosa' },
    { value: 'jujuy' },
    { value: 'la_pampa' },
    { value: 'la_rioja' },
    { value: 'mendoza' },
    { value: 'misiones' },
    { value: 'neuquen' },
    { value: 'rio_negro' },
    { value: 'salta' },
    { value: 'san_juan' },
    { value: 'san_luis' },
    { value: 'santa_cruz' },
    { value: 'santa_fe' },
    { value: 'santa_fe1' },
    { value: 'santa_fe2' },
    { value: 'santa_fe3' },
    { value: 'santa_fe4' },
    { value: 'santa_fe5' },
    { value: 'santa_fe6' },
    { value: 'santiago_del_estero' },
    { value: 'tierra_del_fuego' },
    { value: 'tucuman' },
    // { value: 'sb_sf_santa_fe1' },
    // { value: 'sb_sf_santa_fe2' },
    // { value: 'sb_sf_santa_fe3' },
  ]

  public listaTemas = [];
  public color = "primary";
  public selected = new FormControl(0);


  constructor(
    private fb: FormBuilder,
    private scraperPortalesServices: ScraperPortalesService,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    // this.getTodos();
    this.createForm();
    this.getListaTemas();
  }

  getTodos() {
    this.scraperPortalesServices.getTemasSonda1().subscribe(
      (data: any) => {
        console.log(data.error.error.text);
        this.dataSource.data = data.error.error.text;
      },
      (err) => {
        console.log(err.error.text);
        this.dataSource.data = err.error.text;
      }
    );
  }

  createForm() {
    this.form = this.fb.group({
      grupo: [, Validators.required],
      palabras: [, Validators.required],
    });
  }

  asignar() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.scraperPortalesServices.updateTemaByGrupo(this.form.value).subscribe(
        (data) => {
          console.log(data);
          this.f.palabras.setValue('');
          this.selected.setValue(0);
          this.showSuccess();
          this.actualizar();
        },
        (err) => {
          console.log(err);
        }
      )
    }
  }

  getListaTemas() {
    this.listaGrupos.forEach(element => {
      this.getTemaByGrupo(element.value);
    });
  }

  actualizar() {
    this.dataSource = new MatTableDataSource<GrupoModel>([]);
    this.listaTemas = [];
    this.getListaTemas();
  }

  getTemaByGrupo(grupo: string) {
    this.scraperPortalesServices.getTemaByGrupo(grupo).subscribe(
      (data: any) => {
        let grupoAux = new GrupoModel();
        grupoAux.nombre = grupo;
        grupoAux.temas = data;
        this.listaTemas.push(grupoAux);
        this.dataSource = new MatTableDataSource(this.listaTemas);

      },
      (err) => {
        console.log(err);
        let grupoAux = new GrupoModel();
        grupoAux.nombre = grupo;
        grupoAux.temas = err.error.text;
        this.listaTemas.push(grupoAux);
        this.dataSource = new MatTableDataSource(this.listaTemas);
      }
    );
  }

  get f() { return this.form.controls; }

  editar(element) {
    console.log(element);
    this.selected.setValue(1);
    this.f.grupo.setValue(element.nombre);
    this.f.palabras.setValue(String(element.temas).split("'").join('').split(" ").join('').split("[").join('').split("]").join(''));
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Los cambios se realizaron con éxito' });
  }

  cancelar() {
    this.f.grupo.setValue('');
    this.f.palabras.setValue('');
    this.selected.setValue(0);
  }


}
