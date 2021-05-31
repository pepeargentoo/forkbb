import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ScraperPortalesService } from 'src/app/services/scraper-portales.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-alertas-dinamicas',
  templateUrl: './alertas-dinamicas.component.html',
  styleUrls: ['./alertas-dinamicas.component.css'],
  providers: [MessageService],
})
export class AlertasDinamicasComponent implements OnInit {

  public form: FormGroup;
  public displayedColumns: string[] = ['grupo', 'temas', 'eliminar', 'editar'];
  public dataSource = new MatTableDataSource<any>([]);
  public listaProvincias = [
    { value: "'Buenos Aires'" },
    { value: "'Catamarca'" },
    { value: "'Chaco'" },
    { value: "'Chubut'" },
    { value: "'Cordoba'" },
    { value: "'Corrientes'" },
    { value: "'Entre Rios'" },
    { value: "'Formosa'" },
    { value: "'Jujuy'" },
    { value: "'La Pampa'" },
    { value: "'La Rioja'" },
    { value: "'Mendoza'" },
    { value: "'Misiones'" },
    { value: "'Neuquen'" },
    { value: "'Rio Negro'" },
    { value: "'Salta'" },
    { value: "'San Juan'" },
    { value: "'San Luis'" },
    { value: "'Santa Cruz'" },
    { value: "'Santa Fe'" },
    { value: "'Santiago Del Estero'" },
    { value: "'Tierra del Fuego'" },
    { value: "'Tucuman'" },
  ]
  public color = "primary";
  public selected = new FormControl(0);
  public response = [];

  constructor(
    private fb: FormBuilder,
    private scraperPortalesService: ScraperPortalesService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.createForm();
    this.getAllTemas();
  }

  createForm() {
    this.form = this.fb.group({
      id: [, Validators.required],
      nombre: [, Validators.required],
      temas: [, Validators.required],
      provincias: [, Validators.required],
    });
  }

  get f() { return this.form.controls; }

  asignar() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.scraperPortalesService.updateTemaSonda2(this.form.value).subscribe(
        (data) => {
          console.log(data);
          this.f.id.setValue('');
          this.f.nombre.setValue('');
          this.f.temas.setValue('');
          this.f.provincias.setValue([]);
          this.selected.setValue(0);
          this.showSuccess();
          this.actualizar();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  editar(element) {
    console.log(element);
    this.f.id.setValue(element.nombre);
    this.f.nombre.setValue(element.temas[0]);
    this.f.temas.setValue(element.temas[1]);
    var arrayAux = [];
    element.temas[2].forEach(element => {
      arrayAux.push("'" + element + "'");
    });
    this.f.provincias.setValue(arrayAux);
    this.selected.setValue(1);

  }

  cancelar() {
    this.selected.setValue(0);
    this.f.id.setValue('');
    this.f.nombre.setValue('');
    this.f.temas.setValue('');
    this.f.provincias.setValue([]);
  }

  actualizar() {
    this.dataSource = new MatTableDataSource<any>([]);
    this.response = [];
    this.getAllTemas();
  }

  getAllTemas() {
    this.scraperPortalesService.getTemasSonda2().subscribe(
      (data: any) => {
        for (const property in data.result) {
          console.log(`${property}: ${data.result[property]}`);
          this.response.push({
            nombre: property,
            temas: data.result[property]
          })
        }
        this.dataSource.data = this.response;
      },
      (err) => {
        console.log(err.error.text);
        let st = JSON.stringify(err.error.text);
        let aux = st.replace("\'", "\"")
        console.log(aux);
        this.dataSource.data = JSON.parse(aux);
      }
    );
  }

  eliminar(element) {
    this.scraperPortalesService.deleteSonda2(element.nombre).subscribe(
      (data) => {
        console.log(data);
        this.showSuccess();
        this.actualizar();
      },
      (err) => {
        console.log(err);
        this.showError();
      }
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Los cambios se realizaron con éxito. La operación puede tardar varios minutos en impactar los cambios' });
  }


  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error' });
  }

}
