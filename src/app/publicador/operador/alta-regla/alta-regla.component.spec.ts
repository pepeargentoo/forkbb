import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaReglaComponent } from './alta-regla.component';

describe('AltaReglaComponent', () => {
  let component: AltaReglaComponent;
  let fixture: ComponentFixture<AltaReglaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaReglaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaReglaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
