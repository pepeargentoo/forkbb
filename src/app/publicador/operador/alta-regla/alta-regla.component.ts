import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatStepper, MatTableDataSource } from '@angular/material';
import { MessageService } from 'primeng/api';
import { ProvinciasService } from 'src/app/services/provincias.service';
import { PublicadorService } from 'src/app/services/publicador.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ConfirmComponent } from 'src/app/shared-modules/confirm/confirm.component';
import { AltaCuentaComponent } from '../alta-cuenta/alta-cuenta.component';

export interface Task {
  name: string;
  id;
  completed: boolean;
  subtasks?: Task[];
}


@Component({
  selector: 'app-alta-regla',
  templateUrl: './alta-regla.component.html',
  styleUrls: ['./alta-regla.component.css'],
  providers: [MessageService],
})
export class AltaReglaComponent implements OnInit {

  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  public isLinear;
  public selected = new FormControl(0);
  public color = "primary";
  public displayedColumns: string[] = ['regla', 'origen', 'destino', 'provincias', 'temas', 'url' , 'editar', 'eliminar'];
  public dataSource = new MatTableDataSource<any>([]);
  public cuentasWordpress;
  public origenSelected;
  public textoLibre = false;
  public cuantasWA = false;
  public imagenLibre: string;
  public postalesUrl;

  task: Task = {
    name: 'Todos',
    id: null,
    completed: false,
    subtasks: []
  };

  taskDestinos: Task = {
    name: 'Todos',
    id: null,
    completed: false,
    subtasks: []
  };

  formRule: FormGroup;
  public origenes = [];
  public destinos = [];
  public destinosSelected = [];
  public portalActive = false;
  public facebookActive = false;
  public twitterActive = false;
  public ivrActive = false;
  public multicanalidadActive = false;
  public chatbotActive = false;
  public instagramActive = false;
  public whatsappActive = false;

  public formPortal: FormGroup;
  public listaPortales = new Array(
    //   {
    //   value: 'Portal 1'
    // }, {
    //   value: 'Portal 2'
    // }, {
    //   value: 'Portal 3'
    // }, {
    //   value: 'lacapital.com'
    // }, {
    //   value: 'rosario3.com'
    // }
  );
  public listaCuentas = new Array({
    value: 'Cuenta WA 1'
  }, {
    value: 'Cuenta WA 2'
  }, {
    value: 'Cuenta WA 3'
  });
  public formFacebook: FormGroup;
  public provincias;

  constructor(
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private messageService: MessageService,
    private dialog: MatDialog,
    private provinciasServices: ProvinciasService,
    private publicadorService: PublicadorService
  ) { }

  ngOnInit() {
    this.createForms();
    this.getAllOrigenes();
    this.getAllDestinos();
    this.getCuentasWordpress();
    this.getProvincias();
    this.getReglas();
    this.getPortalesWordpress();
  }

  agregarCuentaWordpress() {
    const dialogRef = this.dialog.open(AltaCuentaComponent, {
      data: {
        form: new Object(),
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result && result.form) {
        this.spinnerService.updatedState(true);
        this.publicadorService.postCuentasWordpress(result.form).subscribe(
          (data) => {
            this.spinnerService.updatedState(false);
            this.showSuccess();
            this.getCuentasWordpress();
            //this.actualizar();
          },
          (err) => {
            this.spinnerService.updatedState(false);
            console.log(err);
            this.showError();
          }
        )
      }
    });

  }

  actualizar() {
    this.dataSource.data = [];
    this.getReglas();
  }

  getPortalesWordpress() {
    this.publicadorService.getPortalesWOrdpress().subscribe(
      (data: any) => {
        console.log(data);
        this.listaPortales = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCuentasWordpress() {
    this.publicadorService.getCuentasWordpress().subscribe(
      (data) => {
        console.log(data);
        this.cuentasWordpress = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getReglas() {
    this.publicadorService.getReglas().subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource.data = data.data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  allComplete: boolean = false;
  allCompleteDestino: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  updateAllCompleteDestino() {
    this.allCompleteDestino = this.taskDestinos.subtasks != null && this.taskDestinos.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  someCompleteDestino(): boolean {
    if (this.taskDestinos.subtasks == null) {
      return false;
    }
    return this.taskDestinos.subtasks.filter(t => t.completed).length > 0 && !this.allCompleteDestino;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  setAllDestino(completed: boolean) {
    this.allCompleteDestino = completed;
    if (this.taskDestinos.subtasks == null) {
      return;
    }
    this.taskDestinos.subtasks.forEach(t => t.completed = completed);
  }

  findOrigenById(id: number) {
    return this.origenes.find(element => element.id_origen == id).descripcion_origen;
  }


  findDestinoById(id: number) {
    return this.destinos.find(element => element.id_destino == id).descripcion_destino;
  }


  public createForms() {
    this.formPortal = this.fb.group({
      Id_provincias: [],
      Temas: [],
      NoTemas:[],
      Id_origen: [1],
      Plataforma: ["portal"],
      multiplos: [],
      CantidadPublicacionesDiarias:[],
    })

    this.formFacebook = this.fb.group({
      Cuentas: [],
      Temas: [],
      Id_origen: [2],
      Plataforma: ["facebook"],
    })

    this.formRule = this.fb.group({
      Origen: [],
      Destino: [],
      Descripcion_publicador: [, Validators.required],
      url: [['https://somoscampoonline.com']],
    })
  }

  get fr() { return this.formRule.controls; }

  get fp() { return this.formPortal.controls; }

  get ff() { return this.formFacebook.controls; }

  getAllOrigenes() {

    this.publicadorService.getOrigenes().subscribe(
      (data: any) => {
        console.log(data);

        //let data = ['Wordpress'];
        this.origenes = data;
        this.origenes.forEach(element => {
          let subtaskAux: Task = {
            name: element.descripcion_origen, completed: false, id: element.id_origen,
            subtasks: []
          };
          this.task.subtasks.push(subtaskAux);
        })
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getAllDestinos() {
    // let data = ['Portal'];
    this.publicadorService.getDestinos().subscribe(
      (data: []) => {
        console.log(data);

        this.destinos = data;
        this.destinos.forEach(element => {
          let subtaskAux: Task = {
            name: element.descripcion_destino, completed: false, id: element.id_destino,
            subtasks: []
          };
          this.taskDestinos.subtasks.push(subtaskAux);
        })
      },
      (err) => {
        console.log(err);
      }
    );

  }

  enviarOrigenes() {
    this.spinnerService.updatedState(true);
    this.portalActive = false;
    this.facebookActive = false;
    this.twitterActive = false;
    this.ivrActive = false;
    this.multicanalidadActive = false;
    this.chatbotActive = false;
    this.instagramActive = false;
    this.whatsappActive = false;
    // this.task.subtasks.forEach(element => {
    //   if (element.completed) {

    //     switch (element.name) {
    //       case 'portal':
    //         this.portalActive = true;
    //         break;
    //       default:
    //         break;
    //     }
    //   }
    // });
    switch (this.origenSelected) {
      case 1:
        this.portalActive = true;
        break;
      case 2:
        this.facebookActive = true;
        break;
      case 3:
        this.twitterActive = true;
        break;
      case 4:
        this.ivrActive = true;
        break;
      case 5:
        this.multicanalidadActive = true;
        break;
      case 6:
        this.chatbotActive = true;
        break;
      case 7:
        this.instagramActive = true;
        break;
      case 8:
        this.whatsappActive = true;
        break;
      default:
        break;
    }

    this.spinnerService.updatedState(false);

  }

  getProvincias() {
    this.provinciasServices.getProvincias().subscribe(
      (data: any) => {
        this.provincias = data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  submitPortal() {

  }

  enviarDestinos() {
    this.destinosSelected = [];
    this.taskDestinos.subtasks.forEach(element => {
      if (element.completed) {

        this.destinosSelected.push(element.id);
      }
    });
    this.formRule.controls.Destino.setValue(this.destinosSelected);
  }

  postPrerule() {
    this.spinnerService.updatedState(true);

    if (this.formPortal.controls.Id_provincias.value && this.formPortal.controls.Id_provincias.value.length > 0) {
      let result = this.formPortal.controls.Id_provincias.value.map(i => Number(i));
      this.formPortal.controls.Id_provincias.setValue(result);
    }

    var arreglo = this.formPortal.controls.Temas.value ? this.formPortal.controls.Temas.value.split(",") : this.formPortal.controls.Temas.value ;
    this.formPortal.controls.Temas.setValue(arreglo);

    this.formRule.controls.Origen.setValue([this.formPortal.value]);
    this.formRule.controls.url.setValue(this.postalesUrl);
    console.log(this.formRule.value);

    this.publicadorService.postReglas(this.formRule.value).subscribe(
      (data) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.selected.setValue(0);
        this.portalActive = false;
        this.task.completed = false;
        this.allCompleteDestino = false;
        this.taskDestinos.subtasks.forEach(element => {
          element.completed = false;
        });
        this.actualizar();
        this.showSuccess();
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Operación realizada con éxito' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error' });
  }


  eliminar(element) {

    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: 'Eliminar',
        msj: '¿Está seguro que desea eliminar la regla : ' + element.descripcion_publicador + ' ?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.updatedState(true);
        this.publicadorService.deleteReglas(element.id_padre).subscribe(
          (data) => {
            this.spinnerService.updatedState(false);
            this.showSuccess();
            console.log(data);
            this.actualizar();
          },
          (err) => {
            this.spinnerService.updatedState(false);
            console.log(err);
            this.showError();
          }
        )
      }
    });
  }

  openTextoLibre() {
    this.textoLibre = !this.textoLibre;
  }

  openCA() {
    this.cuantasWA = !this.cuantasWA;
  }

  getOneRegla(element) {
    console.log(element);
  }
}
