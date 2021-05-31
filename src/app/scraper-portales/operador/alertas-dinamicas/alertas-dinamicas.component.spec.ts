import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasDinamicasComponent } from './alertas-dinamicas.component';

describe('AlertasDinamicasComponent', () => {
  let component: AlertasDinamicasComponent;
  let fixture: ComponentFixture<AlertasDinamicasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasDinamicasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasDinamicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
