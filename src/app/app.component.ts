import { ChangeDetectorRef, Component } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bigBoard';
  loading: boolean;
  suscription;

  constructor(
    private spinnerService: SpinnerService,
    private cdref: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.suscription = this.spinnerService.$state.subscribe(
      (data) => {
        this.loading = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.suscription.unsuscribe();
  }
}
