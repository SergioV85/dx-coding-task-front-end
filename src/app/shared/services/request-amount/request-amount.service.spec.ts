import { TestBed } from '@angular/core/testing';

import { RequestAmountService } from './request-amount.service';

describe('RequestAmountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestAmountService = TestBed.get(RequestAmountService);
    expect(service).toBeTruthy();
  });
});
