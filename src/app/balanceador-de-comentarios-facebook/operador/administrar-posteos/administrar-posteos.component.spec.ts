import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrarPosteosComponent } from './administrar-posteos.component';

describe('AdministrarPosteosComponent', () => {
  let component: AdministrarPosteosComponent;
  let fixture: ComponentFixture<AdministrarPosteosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrarPosteosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrarPosteosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
