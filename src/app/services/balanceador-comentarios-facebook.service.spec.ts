import { TestBed } from '@angular/core/testing';

import { BalanceadorComentariosFacebookService } from './balanceador-comentarios-facebook.service';

describe('BalanceadorComentariosFacebookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceadorComentariosFacebookService = TestBed.get(BalanceadorComentariosFacebookService);
    expect(service).toBeTruthy();
  });
});
