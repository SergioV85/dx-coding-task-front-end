import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RequestAmountService } from './request-amount.service';

describe('RequestAmountService', () => {
  let requestAmountService: RequestAmountService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RequestAmountService],
    });
    requestAmountService = TestBed.get(RequestAmountService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(requestAmountService).toBeTruthy();
  });
  it('should return Observable<amount: number[]>', () => {
    requestAmountService.getPossibleNotes(230).subscribe(notes => {
      expect(notes).toEqual({ amount: [100, 100, 20, 10] });
    });

    const req = httpMock.expectOne(`/amount?amount=230`);
    expect(req.request.method).toBe('GET');
    req.flush({ amount: [100, 100, 20, 10] });
  });
});
