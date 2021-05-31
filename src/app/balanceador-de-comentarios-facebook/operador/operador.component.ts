import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BalanceadorComentariosFacebookService } from '../../services/balanceador-comentarios-facebook.service';

@Component({
  selector: 'app-operador',
  templateUrl: './operador.component.html',
  styleUrls: ['./operador.component.css']
})
export class OperadorComponent implements OnInit {

  public url: string;
  public enviado: boolean;
  public form: FormGroup;

  constructor(
    private facebookService: BalanceadorComentariosFacebookService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.createForm();
  }

  getFacebook() {
    this.enviado = true;
    console.log(this.enviado);
    // this.facebookService.getComentariosFacebook(this.form.value).subscribe(
    //   (data) => { 
    //     console.log(data);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // )

  }

  createForm() {
    this.form = this.fb.group({
      url: [ , Validators.required],
    });
  }
  
}
