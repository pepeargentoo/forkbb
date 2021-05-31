import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroCustodiadorComponent } from './tablero-custodiador.component';

describe('TableroCustodiadorComponent', () => {
  let component: TableroCustodiadorComponent;
  let fixture: ComponentFixture<TableroCustodiadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableroCustodiadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroCustodiadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
