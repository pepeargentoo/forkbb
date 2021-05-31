import { TestBed } from '@angular/core/testing';

import { ScraperPortalesService } from './scraper-portales.service';

describe('ScraperPortalesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScraperPortalesService = TestBed.get(ScraperPortalesService);
    expect(service).toBeTruthy();
  });
});
