import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CafeSubscription } from '../models/cafeSubscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private readonly API_URL = `${environment.apiUrl}/subscription`;

  constructor(private http: HttpClient) { }

  public postCafeSubscriptionForm(formValue: CafeSubscription): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/cafe`, formValue);
  }
}