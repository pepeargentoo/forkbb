import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { MessageService } from 'primeng/api';
import { BalanceadorComentariosFacebookService } from 'src/app/services/balanceador-comentarios-facebook.service';
import { AggComentariosComponent } from './agg-comentarios/agg-comentarios.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { VerComentariosComponent } from './ver-comentarios/ver-comentarios.component';
import { SpinnerService } from 'src/app/services/spinner.service';
export interface Task {
  comentario: string;
  completed: boolean;
  subtasks?: Task[];
}
@Component({
  selector: 'app-administrar-posteos',
  templateUrl: './administrar-posteos.component.html',
  styleUrls: ['./administrar-posteos.component.css'],
  providers: [MessageService],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AdministrarPosteosComponent implements AfterViewInit {
  savedData: any[];
  
  task: Task = {
    comentario: 'Todos',
    completed: false,
    subtasks: [
    ]
  };

  allComplete: boolean = false;
  
  expandedElement;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  public noticias;
  public form: FormGroup;
  public formComentarios: FormGroup;
  public formComentar: FormGroup;
  public selected = new FormControl(0);
  public color = "primary";
  public displayedColumns: string[] = ['pagina', 'url', 'likes', 'comentarios', 'ver-comentarios'];
  public dataSource = new MatTableDataSource<any>([]);
  public topicos;
  public topicoSelected;
  public mensajesTopicos;

  constructor(
    private fb: FormBuilder,
    private facebookService: BalanceadorComentariosFacebookService,
    private dialog: MatDialog,
    private messageService: MessageService,
    private spinnerService: SpinnerService,
  ) {
    this.createForm();
    this.getNoticias();
  }

  ngAfterViewInit() {
    console.log(this.sort);
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getTopicos();

  }

  get f() { return this.form.controls; }
  get fc() { return this.formComentarios.controls; }
  get fcr() { return this.formComentar.controls; }

  createForm() {
    this.form = this.fb.group({
      page: [, Validators.required],
    });

    this.formComentarios = this.fb.group({
      comentario: [, Validators.required],
      id_topico: [, Validators.required],
    });

    this.formComentar = this.fb.group({
      user: ['3424227826', Validators.required],
      password: ['sara12', Validators.required],
      // newUser:  this.fb.array([]),
      urls: this.fb.array([]),
      // comentarios: [, Validators.required],
    });
    //this.addUser();
    this.addUrl();
  }

  asignar() {
    this.spinnerService.updatedState(true);
    this.facebookService.postScrappingPost(this.form.value).subscribe(
      (data) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.getNoticias();
        this.selected.setValue(0);
      },
      (err) => {
        console.log(err);
        this.spinnerService.updatedState(false);
      }
    )

  }

  getShortUrl(value: string) {
    return value.substr(23);
  }

  getNoticias() {
    this.facebookService.getListadoNoticias().subscribe(
      (data: any) => {
        console.log(data);
        this.noticias = data.data;
        this.dataSource.data = this.noticias;
        console.log(this.dataSource);
        this.dataSource.sort = this.sort;
        console.log(this.sort);
      },
      (err) => {
        console.log(err);
      }
    );
    // this.noticias = this.facebookService.getAllNoticias();
    // console.log(this.noticias);
    // this.dataSource.data = this.noticias;
  }

  addComentario(element) {
    const dialogRef = this.dialog.open(AggComentariosComponent, {
      width: '450px',
      data: {
        title: 'Comentar',
        msj: element,
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // this.facebookService.postScrappingPost(this.dataSource.data).subscribe(
        //   (data) => {
        //     console.log(data);
        //   },
        //   (err) => {
        //     console.log(err);
        //   }
        // )
      }
    });
  }

  mostrarComentarios(element) {
    const dialogRef = this.dialog.open(VerComentariosComponent, {
      data: {
        title: 'Comentarios',
        data: element,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.facebookService.postScrappingPost(this.dataSource.data).subscribe(
          (data) => {
            console.log(data);
          },
          (err) => {
            console.log(err);
          }
        )
      }
    });
  }

  expandir(exp, el) {
    console.log(exp, el);
    exp = exp === el ? null : el;
  }

  actualizar() {
    this.getNoticias();
  }

  postComentario() {
    console.log(this.formComentar.value);
    if (this.formComentarios.valid) {
      this.spinnerService.updatedState(true);
      this.facebookService.postComentariosBase(this.formComentarios.value).subscribe(
        (data) => {
          console.log(data);
          this.spinnerService.updatedState(false);
          this.fc.id_topico.setValue(null);
          this.fc.comentario.setValue(null);
          this.topicoSelected = null;
          this.showSuccess();
        },
        (err) => {
          console.log(err);
          this.spinnerService.updatedState(false);
          this.showError();
        }
      );
    }
  }

  postComentar() {
    console.log(this.formComentar.value);
    this.spinnerService.updatedState(true);
    this.facebookService.postComentarios(this.formComentar.value).subscribe(
      (data) => {
        console.log(data);
        this.spinnerService.updatedState(false);
        this.showSuccess();
        this.selected.setValue(0);
        this.formComentar = this.fb.group({
          user: ['3424227826', Validators.required],
          password: ['sara12', Validators.required],
          // newUser:  this.fb.array([]),
          urls: this.fb.array([]),
          // comentarios: [, Validators.required],
        });
        //this.addUser();
        this.addUrl();
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

  getTopicos() {
    this.facebookService.getTopicos().subscribe(
      (data) => {
        console.log(data);
        this.topicos=data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  changeTopico(e) {
    console.log(e);
    this.spinnerService.updatedState(true);
    this.facebookService.getComentariosByTopico(e).subscribe(
      (data: any) => {
        this.spinnerService.updatedState(false);
        this.mensajesTopicos = data.data[this.topicoSelected];
        console.log(this.mensajesTopicos);
        this.task.subtasks = this.mensajesTopicos;
      },
      (err) => {
        this.spinnerService.updatedState(false);
        console.log(err);
      }
    );
  }

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

  get users() {
    return this.formComentar.get("newUser") as FormArray;
  }

  addUser() {
    this.users.push(this.createUser());
  }

  removeUserAt(i) {
    this.users.removeAt(i);
  }

  save() {
    this.savedData = this.formComentar.value;
  }

  createUser() {
    return this.fb.group({
      user: [],
      password: [],
    });
  }

  // URL 
  get urls() {
    return this.formComentar.get("urls") as FormArray;
  }

  addUrl() {
    this.urls.push(this.createUrl());
  }

  removeUrlAt(i) {
    this.urls.removeAt(i);
  }

  createUrl() {
    return this.fb.group({
      url: [],
      comentario:[''],
    });
  }

}
