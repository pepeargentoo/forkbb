import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasMediosComponent } from './portal-noticias-medios.component';

describe('PortalNoticiasMediosComponent', () => {
  let component: PortalNoticiasMediosComponent;
  let fixture: ComponentFixture<PortalNoticiasMediosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasMediosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasMediosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
