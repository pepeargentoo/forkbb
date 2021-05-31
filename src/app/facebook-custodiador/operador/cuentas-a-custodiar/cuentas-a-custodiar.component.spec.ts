import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasACustodiarComponent } from './cuentas-a-custodiar.component';

describe('CuentasACustodiarComponent', () => {
  let component: CuentasACustodiarComponent;
  let fixture: ComponentFixture<CuentasACustodiarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentasACustodiarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasACustodiarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
