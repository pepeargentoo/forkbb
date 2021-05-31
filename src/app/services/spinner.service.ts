import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private stateSubject = new BehaviorSubject<boolean>(false);
  $state = this.stateSubject.asObservable();
  
  constructor() { }

  updatedState(spinner: boolean){
    this.stateSubject.next(spinner);
  }
}
