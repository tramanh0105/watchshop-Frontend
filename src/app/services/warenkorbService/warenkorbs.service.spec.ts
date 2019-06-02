import { TestBed } from '@angular/core/testing';

import { WarenkorbsService } from './warenkorbs.service';

describe('WarenkorbsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WarenkorbsService = TestBed.get(WarenkorbsService);
    expect(service).toBeTruthy();
  });
});
