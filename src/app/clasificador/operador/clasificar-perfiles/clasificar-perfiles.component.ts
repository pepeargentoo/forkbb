import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatStepper, MatTableDataSource } from '@angular/material';
import { MessageService } from 'primeng/api';
import { ClasificadorService } from 'src/app/services/clasificador.service';
import { ExcelService } from 'src/app/services/excel.service';
import { SpinnerService } from 'src/app/services/spinner.service';
import { ConfirmComponent } from 'src/app/shared-modules/confirm/confirm.component';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-clasificar-perfiles',
  templateUrl: './clasificar-perfiles.component.html',
  styleUrls: ['./clasificar-perfiles.component.css'],
  providers: [MessageService],
})
export class ClasificarPerfilesComponent implements OnInit {

  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  public idRegla = null;
  public output;
  public reglaSelected;
  public dataSourceNoticias = new MatTableDataSource<any>([]);
  public displayedColumnsNoticias: string[] = ["titulo", "texto", "medio", "fecha", "fecha2", "sentimiento", "salud", "trabajo", "educacion", "sentiminto"]
  public responseNoticias;
  public dataSourceBalanceador = new MatTableDataSource<any>([]);
  public responseBalanceador;
  public displayedColumnsBalanceador: string[] = ["url", "datetime", "cant_mg", "cant_comentarios", "cant_compartidos", "pag_noticia" ,"descripcion_post",];
  public dataSourceIvr = new MatTableDataSource<any>([]);
  public displayedColumnsIvr: string[] = ['campana', 'status', 'pregunta', 'respuesta', 'telefono'];
  public responseIvr;

  public noticias;
  public origenes;
  public selected = new FormControl(0);
  public color = "primary";
  public displayedColumns: string[] = ['regla', 'eliminar', 'output',];
  public dataSource = new MatTableDataSource<any>([]);
  public origenesSeleccionados;
  isLinear = true;
  formGroup: FormGroup;
  form: FormArray;

  formRule: FormGroup
  //Noticias
  formNoticias: FormGroup;
  NoticiasActive = false;
  medios = [];
  sentimientos = [];

  formIvr: FormGroup;
  IVRActive = false;
  campanas = [];
  preguntas = [];
  respuestas = [];
  status = [];

  formBalanceador: FormGroup;
  balanceadorActive = false;

  task: Task = {
    name: 'Todos',
    completed: false,
    subtasks: []
  };


  constructor(
    private fb: FormBuilder,
    private clasificadorServices: ClasificadorService,
    private spinnerService: SpinnerService,
    private messageService: MessageService,
    private dialog: MatDialog,
    public excelService: ExcelService,
  ) { }

  ngOnInit() {
    this.getAllReglas();
    this.getAllOrigenes();
    this.formGroup = this.fb.group({
      form: this.fb.array([])
    })
    // this.addItem();


    this.createForms();

    this.formIvr.controls.campana.valueChanges.subscribe(val => {
      console.log(val);
      this.clasificadorServices.getCampana(val).subscribe(
        (data: any) => {
          console.log(data);
          this.preguntas = data.data.pregunta.valor;
          this.respuestas = data.data.respuesta.valor;
          console.log(this.preguntas);
          console.log(this.respuestas);

        },
        (err) => {
          console.log(err);
        }
      );

    });
  }

  get fn() { return this.formNoticias.controls; }
  get fba() { return this.formBalanceador.controls; }
  get fi() { return this.formIvr.controls; }
  get fr() { return this.formRule.controls; }

  public createForms() {
    this.formBalanceador = this.fb.group(
      {
        cant_comentarios: [''],
        cant_mg: [''],
        datetime: [''],
        descripcion_post: [''],
        pag_noticia: [''],
        url: ['']
      }
    )

    this.formNoticias = this.fb.group({
      texto: [''],
      medio: [''],
      fecha: [''],
      fecha2: [''],
      sentimiento: [''],
      salud: [''],
      trabajo: [''],
      educacion: [''],
      sentiminto: [''],
    })

    this.formIvr = this.fb.group({
      campana: [],
      pregunta: [],
      respuesta: [],
      status: [],
      telefono: []
    })

    this.formRule = this.fb.group({
      data: [],
      balanceadorquery: [],
      noticiasquery: [],
      ivrquery: [],
      nombre: []
    })
  }

  applyFilterBalanceador(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceBalanceador.filter = filterValue.trim().toLowerCase();
  }

  applyFilterNoticias(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceNoticias.filter = filterValue.trim().toLowerCase();
  }

  applyFilterIvr(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceIvr.filter = filterValue.trim().toLowerCase();
  }

  init() {
    return this.fb.group({
      cont: new FormControl('', [Validators.required]),
    })
  }

  addItem() {
    this.form = this.formGroup.get('form') as FormArray;
    this.form.push(this.init());
  }

  actualizar() {
    this.getAllReglas();
  }

  getReglas() {

  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

  eliminar(element) {

    const dialogRef = this.dialog.open(ConfirmComponent, {
      data: {
        title: 'Eliminar',
        msj: '¿Está seguro que desea eliminar la regla : ' + element.nombre +' ?',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.spinnerService.updatedState(true);
        this.clasificadorServices.deleteRegla(element.id).subscribe(
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

  getAllReglas() {
    this.clasificadorServices.getAllReglas().subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource.data = data.data;
      },
      (err) => {
        console.log(err);
      }
    )
  }

  getOneRegla(element) {
    this.spinnerService.updatedState(true);
    this.reglaSelected = element;
    this.idRegla = element.id;
    this.clasificadorServices.getOneRegla(element.id).subscribe(
      (data: any) => {
        this.selected.setValue(2);
        this.output = data.data;
        this.responseBalanceador = this.output['Balanceador'];
        this.dataSourceBalanceador.data = this.output['Balanceador'] ? this.output['Balanceador'].tablebody.data : null;
        console.log(this.output['Balanceador']);
        this.responseNoticias = this.output['Noticias'];
        this.dataSourceNoticias.data = this.output['Noticias'] ? this.output['Noticias'].tablebody.data : null;

        this.responseIvr = this.output['Ivr'];
        this.dataSourceIvr.data = this.output['Ivr'] ? this.output['Ivr'].tablebody.data : null;

        this.spinnerService.updatedState(false);
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    );
  }

  getAllOrigenes() {
    this.clasificadorServices.getAllOrigenes().subscribe(
      (data: any) => {
        this.origenes = data.data;
        this.origenes.forEach(element => {
          let subtaskAux: Task = {
            name: element, completed: false,
            subtasks: []
          };
          this.task.subtasks.push(subtaskAux);
        });
      },
      (err) => {
        console.log(err);
      }
    )
  }

  enviarOrigenes() {
    this.spinnerService.updatedState(true);
    this.IVRActive = false;
    this.NoticiasActive = false;
    this.balanceadorActive = false;
    this.formGroup = this.fb.group({
      form: this.fb.array([])
    })
    this.task.subtasks.forEach(element => {
      if (element.completed) {

        switch (element.name) {
          case 'Noticias':
            this.NoticiasActive = true;
            break;
          case 'Ivr':
            this.IVRActive = true;
            break;
          case 'Balanceador':
            this.balanceadorActive = true;
            break;
          default:
            break;
        }

        this.clasificadorServices.getOneOrigen(element.name).subscribe(
          (data: any) => {
            switch (element.name) {
              case 'Noticias':
                //this.NoticiasActive = true;
                this.medios = data.data.medio.valor;
                this.sentimientos = data.data.sentimiento.valor;
                break;
              case 'Ivr':
                //this.IVRActive = true;
                this.campanas = data.data.campana.valor;
                this.status = data.data.status.valor;
                break;
              case 'Balanceador':
                //this.balanceadorActive = true;
                break;
              default:
                break;
            }
            // this.form.push(
            //   this.fb.group({
            //     cont: new FormControl('', [Validators.required]),
            //   })
            // );
          },
          (err) => {
            console.log(err);
          }
        )
      }
    });

    this.spinnerService.updatedState(false);

  }

  submitNoticias() {
    console.log(this.formNoticias.value);
  }

  submitIvr() {
    console.log(this.formIvr.value);
  }

  submitBalanceador() {
    console.log(this.formBalanceador.value);
  }

  postPrerule() {
    this.spinnerService.updatedState(true);
    let data = {
      Balanceador: this.formBalanceador.value,
      Noticias: this.formNoticias.value,
      Ivr: this.formIvr.value
    };
    console.log('pre');
    console.log(data);

    this.clasificadorServices.postPreRegla(data).subscribe(
      (data: any) => {
        console.log(data)
        this.formRule.controls.data.setValue(data.olddata.data);
        this.formRule.controls.balanceadorquery.setValue(data.balanceadorquery);
        this.formRule.controls.noticiasquery.setValue(data.noticiasquery);
        this.formRule.controls.ivrquery.setValue(data.ivrquery);
        this.spinnerService.updatedState(false);
        console.log('post');
        console.log(this.formRule.value);
        this.postRegla();
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    );
  }

  postRegla() {
    this.spinnerService.updatedState(true);
    this.clasificadorServices.postRegla(this.formRule.value).subscribe(
      (data) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.IVRActive = false;
        this.NoticiasActive = false;
        this.balanceadorActive = false;
        this.task.completed = false;
        this.allComplete = false;
        this.task.subtasks.forEach(element => {
          element.completed = false;
        });
        this.createForms();
        this.showSuccess();
        this.actualizar();
        this.stepper.selectedIndex = 0;
        this.selected.setValue(0);
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
        this.showError();
      }
    );
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Operación realizada con éxito' });
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Ocurrió un error' });
  }

  public exportNoticiasAsXLSX(): void {
    var auxExcel = JSON.parse(JSON.stringify(this.dataSourceNoticias.data));
    this.excelService.exportAsExcelFile(auxExcel, 'output-noticias-' + this.reglaSelected.nombre);
  }

  public exportBalanceadorAsXLSX() {
    var auxExcel = JSON.parse(JSON.stringify(this.dataSourceBalanceador.data));
    this.excelService.exportAsExcelFile(auxExcel, 'output-balanceador-' + this.reglaSelected.nombre);
  }

  public exportIVRAsXLSX() {
    var auxExcel = JSON.parse(JSON.stringify(this.dataSourceIvr.data));
    this.excelService.exportAsExcelFile(auxExcel, 'output-IVR-' + this.reglaSelected.nombre);
  }

}
