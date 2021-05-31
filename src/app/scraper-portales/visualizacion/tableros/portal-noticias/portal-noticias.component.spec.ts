import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasComponent } from './portal-noticias.component';

describe('PortalNoticiasComponent', () => {
  let component: PortalNoticiasComponent;
  let fixture: ComponentFixture<PortalNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
