import { TestBed } from '@angular/core/testing';

import { LagersService } from './lagers.service';

describe('LagersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LagersService = TestBed.get(LagersService);
    expect(service).toBeTruthy();
  });
});
