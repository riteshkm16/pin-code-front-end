import { TestBed } from '@angular/core/testing';

import { PincodeserviceService } from './pincodeservice.service';

describe('PincodeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PincodeserviceService = TestBed.get(PincodeserviceService);
    expect(service).toBeTruthy();
  });
});
