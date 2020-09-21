import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CafeSubscription } from '../models/cafeSubscription.model';
import { PreSubscription } from '../models/preSubscription.model';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private readonly API_URL = `${environment.apiUrl}`;
  private readonly CAFE_URL = `/subscription/cafe`;
  private readonly PRE_SUBSCRIPTION_URL = `/subscription/pre-subscription`;
  private readonly GET_MEMBERS_URL = `/subscription/members`;

  constructor(private http: HttpClient) { }

  public postCafeSubscriptionForm(formValue: CafeSubscription): Observable<any> {
    return this.http.post<any>(`${this.API_URL}${this.CAFE_URL}`, formValue);
  }

  public postPreSubscriptionForm(formValue: PreSubscription): Observable<any> {
    return this.http.post<any>(`${this.API_URL}${this.PRE_SUBSCRIPTION_URL}`, formValue);
  }

  public getMembersData(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${this.GET_MEMBERS_URL}`);
  }
}