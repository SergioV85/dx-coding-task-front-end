import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HealthCheckService } from './health-check.service';

describe('HealthCheckService', () => {
  let healthCheckService: HealthCheckService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HealthCheckService],
    });
    healthCheckService = TestBed.get(HealthCheckService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(healthCheckService).toBeTruthy();
  });
  it('should return Observable<version: string>', () => {
    healthCheckService.getServerVersion().subscribe(version => {
      expect(version).toEqual({ version: '1.0.0' });
    });

    const req = httpMock.expectOne(`/server-version`);
    expect(req.request.method).toBe('GET');
    req.flush({ version: '1.0.0' });
  });
});
