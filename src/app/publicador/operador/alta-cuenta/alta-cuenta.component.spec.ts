import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaCuentaComponent } from './alta-cuenta.component';

describe('AltaCuentaComponent', () => {
  let component: AltaCuentaComponent;
  let fixture: ComponentFixture<AltaCuentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaCuentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
