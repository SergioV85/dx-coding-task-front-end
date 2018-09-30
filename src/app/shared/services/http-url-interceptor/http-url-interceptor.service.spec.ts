import { TestBed } from '@angular/core/testing';

import { HttpUrlInterceptorService } from './http-url-interceptor.service';

describe('HttpUrlInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUrlInterceptorService = TestBed.get(HttpUrlInterceptorService);
    expect(service).toBeTruthy();
  });
});
