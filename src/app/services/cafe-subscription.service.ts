import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CafeSubscription } from '../models/cafe-subscription.model';

@Injectable({
  providedIn: 'root',
})
export class CafeSubscriptionService {
  private readonly API_URL = `${environment.apiUrl}`;
  private readonly CAFE_URL = `/subscription/cafe`;
  private readonly CAFE_URL_ALL = `/subscription/cafe-all`;

  constructor(private http: HttpClient) {}

  // CAFE
  public postCafeSubscriptionForm(formData: CafeSubscription): Observable<any> {
    return this.http.post<any>(`${this.API_URL}${this.CAFE_URL}`, formData);
  }

  public getCafeSubscriptionMembersData(season?: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}${this.CAFE_URL_ALL}/${season}`);
  }

  public getCafeSubscriptionMemberData(cafeMemberId: string): Observable<any> {
    return this.http.get<any>(
      `${this.API_URL}${this.CAFE_URL}/${cafeMemberId}`
    );
  }

  public updateCafeMember(cafeMemberInfo: CafeSubscription): Observable<any> {
    return this.http.put<any>(
      `${this.API_URL}${this.CAFE_URL}/${cafeMemberInfo._id}`,
      cafeMemberInfo
    );
  }

  public deleteCafeMember(cafeMember: CafeSubscription): Observable<any> {
    return this.http.delete<any>(
      `${this.API_URL}${this.CAFE_URL}/${cafeMember._id}`
    );
  }
}
