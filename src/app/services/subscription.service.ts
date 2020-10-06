import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { CafeSubscription } from '../models/cafeSubscription.model';
import { PreSubscription } from '../models/preSubscription.model';
import { Member } from '../models/member.model';

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

  public createMember(formValue: PreSubscription): Observable<any> {
    return this.http.post<any>(`${this.API_URL}${this.PRE_SUBSCRIPTION_URL}`, formValue);
  }


  public getMembersData(): Observable<{ message: string, data: Member[] }> {
    return this.http.get<{ message: string, data: Member[] }>(`${this.API_URL}${this.GET_MEMBERS_URL}`);
  }

  public getMemberData(memberId: string): Observable<{ member: Member }> {
    return this.http.get<{ member: Member }>(`${this.API_URL}${this.GET_MEMBERS_URL}/${memberId}`);
  }

  public updateMember(memberInfo: Member): Observable<any> {
    return this.http.put<any>(`${this.API_URL}${this.PRE_SUBSCRIPTION_URL}/${memberInfo._id}`, memberInfo);
  }

  public deleteMember(member: Member): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}${this.GET_MEMBERS_URL}/${member._id}`);
  }
}