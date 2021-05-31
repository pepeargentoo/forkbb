import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasNoticiasMediosComponent } from './portal-noticias-noticias-medios.component';

describe('PortalNoticiasNoticiasMediosComponent', () => {
  let component: PortalNoticiasNoticiasMediosComponent;
  let fixture: ComponentFixture<PortalNoticiasNoticiasMediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasNoticiasMediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasNoticiasMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
