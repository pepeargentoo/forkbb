import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggComentariosComponent } from './agg-comentarios.component';

describe('AggComentariosComponent', () => {
  let component: AggComentariosComponent;
  let fixture: ComponentFixture<AggComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
