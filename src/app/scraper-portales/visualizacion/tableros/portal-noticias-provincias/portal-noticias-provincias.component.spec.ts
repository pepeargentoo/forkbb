import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasProvinciasComponent } from './portal-noticias-provincias.component';

describe('PortalNoticiasProvinciasComponent', () => {
  let component: PortalNoticiasProvinciasComponent;
  let fixture: ComponentFixture<PortalNoticiasProvinciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasProvinciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasProvinciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
