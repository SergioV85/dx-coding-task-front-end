import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor as Interceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpUrlInterceptorService implements Interceptor {
  // tslint:disable-next-line:no-any
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = request.clone({ url: `${environment.serverUrl}${request.url}` });
    return next.handle(apiReq);
  }
}
