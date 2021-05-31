import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalNoticiasRelojComponent } from './portal-noticias-reloj.component';

describe('PortalNoticiasRelojComponent', () => {
  let component: PortalNoticiasRelojComponent;
  let fixture: ComponentFixture<PortalNoticiasRelojComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalNoticiasRelojComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalNoticiasRelojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
