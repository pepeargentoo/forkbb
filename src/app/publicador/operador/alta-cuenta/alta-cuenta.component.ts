import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-alta-cuenta',
  templateUrl: './alta-cuenta.component.html',
  styleUrls: ['./alta-cuenta.component.css']
})
export class AltaCuentaComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<any>,
    public fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
    this.createForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  createForm() {
    this.form = this.fb.group({
      portal: [, Validators.required],
      link: [,Validators.required],
      usuario: [,Validators.required],
      contraseña: [,Validators.required],
    })
  }

  get f() { return this.form.controls; }

  onSubmit() {
    if (this.form.valid) {
      this.data.form = this.form.value;
      this.dialogRef.close(this.data);
    } else {
      this.f.link.markAsTouched();
      this.f.portal.markAsTouched();
      this.f.usuario.markAsTouched();
      this.f.contraseña.markAsTouched();
    }
  }

}
