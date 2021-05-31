import { TestBed } from '@angular/core/testing';

import { GrupoCanalService } from './grupo-canal.service';

describe('GrupoCanalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GrupoCanalService = TestBed.get(GrupoCanalService);
    expect(service).toBeTruthy();
  });
});
