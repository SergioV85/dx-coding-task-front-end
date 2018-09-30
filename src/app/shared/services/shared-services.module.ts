import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpUrlInterceptorService } from './http-url-interceptor/http-url-interceptor.service';
import { HttpErrorInterceptorService } from './http-error-interceptor/http-error-interceptor.service';
import { HealthCheckService } from './health-check/health-check.service';
import { RequestAmountService } from './request-amount/request-amount.service';

const interceptors = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpUrlInterceptorService,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpErrorInterceptorService,
    multi: true,
  },
];
const services = [HealthCheckService, RequestAmountService];

@NgModule({
  imports: [CommonModule, HttpClientModule, MatSnackBarModule],
  declarations: [],
  providers: [...interceptors, ...services],
})
export class SharedServicesModule { }
