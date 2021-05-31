import { TestBed } from '@angular/core/testing';

import { TemasBusquedaService } from './temas-busqueda.service';

describe('TemasBusquedaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemasBusquedaService = TestBed.get(TemasBusquedaService);
    expect(service).toBeTruthy();
  });
});
