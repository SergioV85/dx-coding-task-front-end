import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HealthCheckService {
  constructor(private http: HttpClient) {}

  public getServerVersion(): Observable<{ version: string }> {
    return this.http.get<{ version: string }>('/server-version');
  }
}
