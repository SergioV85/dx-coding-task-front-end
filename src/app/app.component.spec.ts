import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { of } from 'rxjs';

import { HealthCheckService } from './shared/services/health-check/health-check.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app;
  let compiled: HTMLElement;
  const healthCheckService = jasmine.createSpyObj('HealthCheckService', ['getServerVersion']);
  const getVersionSpy = healthCheckService.getServerVersion.and.returnValue( of({ version: '1.0.0' }) );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: HealthCheckService,
          useValue: healthCheckService,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));
  it('should create the app', (() => {
    expect(app).toBeTruthy();
  }));
  it('should call the service for getting server version', (() => {
    expect(getVersionSpy).toHaveBeenCalled();
  }));
  it('should render title in a h1 tag', (() => {
    expect(compiled.querySelector('h1').textContent).toContain('Cash Machine');
  }));
  it('should render footer with server version', (() => {
    expect(compiled.querySelector('footer').textContent).toContain('Server version is 1.0.0');
  }));
});
