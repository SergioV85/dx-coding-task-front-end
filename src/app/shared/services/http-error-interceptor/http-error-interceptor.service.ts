import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor as Interceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorInterceptorService {
  constructor(public snackBar: MatSnackBar) {}

  // tslint:disable-next-line:no-any
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError(({ error }) => {
          this.snackBar.open(`Error: ${error.message}`, '', {
            duration: 3000
          });
          return throwError(error.message);
        }
      ));
  }
}
