import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasificarPerfilesComponent } from './clasificar-perfiles.component';

describe('ClasificarPerfilesComponent', () => {
  let component: ClasificarPerfilesComponent;
  let fixture: ComponentFixture<ClasificarPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasificarPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasificarPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
