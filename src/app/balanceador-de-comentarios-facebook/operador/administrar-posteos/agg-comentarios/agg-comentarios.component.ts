import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { element } from 'protractor';
import { BalanceadorComentariosFacebookService } from 'src/app/services/balanceador-comentarios-facebook.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-agg-comentarios',
  templateUrl: './agg-comentarios.component.html',
  styleUrls: ['./agg-comentarios.component.css']
})
export class AggComentariosComponent implements OnInit {
  public tiposComentarios;
  public tipo: string;
  public comentario: string;
  public comentarioSelected;
  public comentarios;
  constructor(
    public dialogRef: MatDialogRef<any>,
    private facebookService: BalanceadorComentariosFacebookService,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.getTopicos();
  }
  
  changeFn(e) {
    console.log(e);
    this.facebookService.getComentariosByTopico(e).subscribe(
      (data: any) => {
        console.log(data);
        this.dataSource.data = data.data[e];
        this.comentarios= data.data[e];
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  displayedColumns: string[] = ['select', 'Comentario', ];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  count() {
    return this.selection.selected.length;
  }

  getTopicos() {
    this.facebookService.getTopicos().subscribe(
      (data: any) => {
        console.log(data);
        this.tiposComentarios=data;
      },
      (err) => {
        console.log(err);
      }
    );
  }


}
