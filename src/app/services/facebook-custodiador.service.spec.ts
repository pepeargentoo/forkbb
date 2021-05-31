import { TestBed } from '@angular/core/testing';

import { FacebookCustodiadorService } from './facebook-custodiador.service';

describe('FacebookCustodiadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacebookCustodiadorService = TestBed.get(FacebookCustodiadorService);
    expect(service).toBeTruthy();
  });
});
