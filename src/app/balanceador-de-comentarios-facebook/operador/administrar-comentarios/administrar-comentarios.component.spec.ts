import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarComentariosComponent } from './administrar-comentarios.component';

describe('AdministrarComentariosComponent', () => {
  let component: AdministrarComentariosComponent;
  let fixture: ComponentFixture<AdministrarComentariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarComentariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
