import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasNuveNoticiasComponent } from './portal-noticias-nuve-noticias.component';

describe('PortalNoticiasNuveNoticiasComponent', () => {
  let component: PortalNoticiasNuveNoticiasComponent;
  let fixture: ComponentFixture<PortalNoticiasNuveNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasNuveNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasNuveNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
