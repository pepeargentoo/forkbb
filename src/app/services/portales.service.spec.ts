import { TestBed } from '@angular/core/testing';

import { PortalesService } from './portales.service';

describe('PortalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortalesService = TestBed.get(PortalesService);
    expect(service).toBeTruthy();
  });
});
