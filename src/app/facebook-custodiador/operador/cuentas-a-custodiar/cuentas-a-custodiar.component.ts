import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MessageService } from 'primeng/api';
import { FacebookCustodiadorService } from 'src/app/services/facebook-custodiador.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ConfirmComponent } from 'src/app/shared-modules/confirm/confirm.component';

@Component({
  selector: 'app-cuentas-a-custodiar',
  templateUrl: './cuentas-a-custodiar.component.html',
  styleUrls: ['./cuentas-a-custodiar.component.css']
})
export class CuentasACustodiarComponent implements OnInit {

  public form: FormGroup;
  public selected = new FormControl(0);
  public color = "primary";
  public displayedColumns: string[] = ['nombre_pagina', 'url', 'eliminar', 'editar'];
  public dataSource = new MatTableDataSource<any>([]);
  public editando = false;
  public element;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog,
    private messageService: MessageService,
    private spinnerService: SpinnerService,
    private facebookCustodiador: FacebookCustodiadorService,
  ) { }


  ngOnInit() {
    this.createForm();
    this.getAll();
  }

  public createForm() {
    this.form = this.fb.group({
      url_perfil: [{ disabled: this.editando, value: '' }, Validators.required],
      nombre_pagina: [{ disabled: false, value: '' }, Validators.required],
    });
  }

  get f() { return this.form.controls; }

  getAll() {
    this.spinnerService.updatedState(true);
    this.facebookCustodiador.getAllPerfiles().subscribe(
      (data: any) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.dataSource.data = data.data;
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    );
  }

  actualizar() {
    this.getAll();
  }

  eliminar(element) {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: 'Eliminar',
        msj: '¿Está seguro que desea eliminar el perfil "' + element.nombre_pagina + '" del custodiador?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.updatedState(true);
        this.facebookCustodiador.deletePerfilACustodiar(element.id_perfiles_vigilados).subscribe(
          (data) => {
            console.log(data);
            this.spinnerService.updatedState(false);
            this.showSuccess();
            this.actualizar();
          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
            this.showError();
          }
        );

      }
    });
  }

  editar(element) {
    this.selected.setValue(1);
    this.editando = true;
    this.element = element;
    this.createForm();
    this.f.url_perfil.setValue(element.url);
    this.f.nombre_pagina.setValue(element.nombre_pagina);
  }

  cancelar() {
    this.selected.setValue(0);
    this.f.url_perfil.setValue('');
    this.f.nombre_pagina.setValue('');
    this.editando = false;
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Operación realizada con éxito' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error' });
  }

  onSubmit() {
    if (this.form.valid) {
      this.spinnerService.updatedState(true);
      if (this.editando) {
        this.facebookCustodiador.putPerfilACustodiar(this.element.id_perfiles_vigilados, this.f.nombre_pagina.value
        ).subscribe(
          (data) => {
            console.log(data);
            this.spinnerService.updatedState(false);
            this.showSuccess();
            this.getAll();
            this.selected.setValue(0);
            this.editando = false;
          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
            this.showError();
          }
        )
      } else {
        this.facebookCustodiador.postPerfilACustodiar(this.form.value).subscribe(
          (data) => {
            console.log(data);
            this.spinnerService.updatedState(false);
            this.getAll();
            this.selected.setValue(0);
          },
          (err) => {
            console.log(err);
            this.spinnerService.updatedState(false);
          }
        )
      }
      
    }

  }

  mostrarComentarios(element) {
    console.log(element);
  }

}
