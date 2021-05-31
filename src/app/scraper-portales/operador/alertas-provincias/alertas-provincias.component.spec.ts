import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasProvinciasComponent } from './alertas-provincias.component';

describe('AlertasProvinciasComponent', () => {
  let component: AlertasProvinciasComponent;
  let fixture: ComponentFixture<AlertasProvinciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasProvinciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
