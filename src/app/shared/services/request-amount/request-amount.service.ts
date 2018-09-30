import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RequestAmountService {
  constructor(private http: HttpClient) {}

  public getPossibleNotes(amount: number): Observable<{ amount: number[] }> {
    return this.http.get<{ amount: number[] }>('/amount', { params: { amount: amount.toString() } });
  }
}
