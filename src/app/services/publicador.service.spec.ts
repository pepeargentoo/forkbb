import { TestBed } from '@angular/core/testing';

import { PublicadorService } from './publicador.service';

describe('PublicadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicadorService = TestBed.get(PublicadorService);
    expect(service).toBeTruthy();
  });
});
