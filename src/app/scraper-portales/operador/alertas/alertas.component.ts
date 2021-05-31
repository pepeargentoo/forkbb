import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatOptionSelectionChange, MatTableDataSource } from '@angular/material';
import { MessageService } from 'primeng/api';
import { GrupoCanalService } from 'src/app/services/grupo-canal.service';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { TemasBusquedaService } from 'src/app/services/temas-busqueda.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ConfirmComponent } from 'src/app/shared-modules/confirm/confirm.component';
import { ModificarTemaComponent } from './modificar-tema/modificar-tema.component';

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.component.html',
  styleUrls: ['./alertas.component.css'],
  providers: [MessageService],
})
export class AlertasComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  public editando = false;
  public gruposProvincias;
  public color = "primary";
  public selected = new FormControl(0);
  public form: FormGroup;
  public displayedColumns: string[] = ['id_grupo', 'nombre_grupo', 'provincias', 'temas', 'editar'];
  public dataSource = new MatTableDataSource<any>([]);

  public listaProvincias = [];
  public provinciaSelected;
  public listaTemas = [];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private gruposService: GrupoCanalService,
    private temasServices: TemasBusquedaService,
    private provinciasServices: ProvinciasService,
    public spinnerService: SpinnerService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // this.getTodos();
    this.createForm();
    this.getGrupos();
    //this.getTemas();
    this.getProvincias();
    //this.getListaTemas();
    // this.getGruposById();
  }

  actualizar() {
    this.getGrupos();
  }

  createForm() {
    this.form = this.fb.group({
      id_grupo: [ , Validators.required],
      nombre_grupo: [, Validators.required],
      tipo_canal: [{disabled: this.editando, value: 'telegram'} , Validators.required],
      temas: [{disabled: !this.editando, value: []} , Validators.required],
      provincias: [ {disabled: !this.editando, value: []}, Validators.required],
    });
  }

  get f() { return this.form.controls; }

  getGrupos() {
    this.spinnerService.updatedState(true);
    this.gruposService.getGrupoCanal().subscribe(
      (data: any) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.dataSource.data = data.data;
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    )
  }

  public getGruposById(id) {
    this.spinnerService.updatedState(true);
    this.gruposService.getGrupoCanalById(id).subscribe(
      (data: any) => {
        this.spinnerService.updatedState(false);
        console.log(data);
        this.editar(data.data[0]);
        this.spinnerService.updatedState(false);
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    );
  }


  getProvincias() {
    this.provinciasServices.getProvincias().subscribe(
      (data: any) => {
        console.log(data);
        this.listaProvincias = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  // changeProv(e) {
  //   console.log(e);
  //   this.temasServices.getTemasBusquedaByProvincia(e).subscribe(
  //     (data: any) => {
  //       console.log(data);
  //       this.dataSource.data = data;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }

  editar(element) {
    this.editando = true;
    this.createForm();
    this.f.id_grupo.setValue(element.id_grupo);
    this.f.nombre_grupo.setValue(element.nombre_grupo);
    this.f.temas.setValue(element.temas);
    let auxArrayId = [];
    this.gruposProvincias = element.provincias;
    element.provincias.forEach(prov => {
      auxArrayId.push(prov.id_provincia.toString());
    });
    this.f.provincias.setValue(auxArrayId);
    this.selected.setValue(1);
  }

  asignar() {
    if (this.form.valid) {
      if (this.editando) {
        this.cancelar();
        this.getGrupos();
      } else {
        this.gruposService.postGrupoCanal(this.form.value).subscribe(
          (data) => {
            console.log(data);
            this.showSuccess();
            this.getGrupos();
            this.cancelar();
          },
          (err) => {
            console.log(err);
            this.showError();
          }
        );
      }
    }


  }

  cancelar() {
    this.selected.setValue(0);
    this.f.id_grupo.setValue('');
    this.f.nombre_grupo.setValue('');
    this.f.provincias.setValue([]);
    this.f.temas.setValue([]);
    this.editando = false;

  }

  edit(element) {
    console.log(element);

    const dialogRef = this.dialog.open(ModificarTemaComponent, {
      data: {
        title: 'Modificar Tema',
        msj: element.descripcion,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.updatedState(true);
        console.log(result);
        this.temasServices.putTemasBusqueda({ descripcion: result.msj, id_tema: element.id_tema }).subscribe(
          (data) => {
            console.log(data);
            this.getGruposById(this.f.id_grupo.value);
            this.spinnerService.updatedState(false);
        
          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
          }
        );
      }
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;


    // Add our fruit
    if ((value || '').trim()) {
      console.log(value);
      let data = { id_grupo: this.f.id_grupo.value, descripcion: value.trim() }
      this.spinnerService.updatedState(true);
      this.temasServices.postTemasBusqueda(data).subscribe(
        (data) => {
          console.log(data);
          this.spinnerService.updatedState(false);
          this.f.temas.value.push({ descripcion: value.trim() });
          this.getGruposById(this.f.id_grupo.value);
          // this.temasServices.getTemasBusqueda(this.f.id_grupo.value).subscribe(
          //   (data) => {
          //     console.log(data);
          //   },
          //   (err) => {
          //     console.log(err);
          //   }
          // );
        },
        (err) => {
          console.log(err);
        }
      );
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(element): void {
    console.log(element);
    let data = { id_tema: element.id_tema }
    const index = this.f.temas.value.indexOf(element);

    if (index >= 0) {
      const dialogRef = this.dialog.open(ConfirmComponent, {
        data: {
          title: 'Eliminar',
          msj: '¿Está seguro que desea eliminar el tema : ' + element.descripcion + ' ?',
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.spinnerService.updatedState(true);
          this.temasServices.deleteTemasBusqueda(data).subscribe(
            (data) => {
              console.log(data);
              this.spinnerService.updatedState(false);
              this.f.temas.value.splice(index, 1);
            },
            (err) => {
              console.log(err);
              this.spinnerService.updatedState(false);
            }
          );
        }
      });

    }
  }

  selectChange(e) {
    console.log(e.source.value);


  }

  //Provincias
  optionSelected(event: MatOptionSelectionChange) {
    if (event.isUserInput) {
      this.spinnerService.updatedState(true);
      if (event.source.selected) {
        //POST
        let data = {
          id_grupo: this.f.id_grupo.value,
          id_provincia: event.source.value
        }
        this.provinciasServices.postGrupoCanalProvincia(data).subscribe(
          (data) => {
            this.spinnerService.updatedState(false);
            console.log(data);
          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
          }
        );
      } else {
        //DELETE
        console.log(this.gruposProvincias);
        console.log(event.source.value)
        let aux = this.gruposProvincias.find(element => element.id_provincia == event.source.value)
        let data = {
          id_grupo_provincia: aux.id_grupo_provincia
        }
        console.log(data);
        this.provinciasServices.deleteGrupoCanalProvincia(data).subscribe(
          (data) => {
            console.log(data);
            const index = this.gruposProvincias.indexOf(aux);
            if (index >= 0) {
              this.gruposProvincias.splice(index, 1);
            }
            console.log(this.gruposProvincias);
            this.spinnerService.updatedState(false);

          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
          }
        );
      }
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Los datos se registraron correctamente' });
  }


  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error' });
  }


}
