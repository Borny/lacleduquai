import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ChaiTakeAway } from '../models/tchai-take-away.model';

@Injectable({
  providedIn: 'root'
})
export class TakeAwayService {

  private readonly API_URL = `${environment.apiUrl}`;
  private readonly TAKE_AWAY_URL = `/take-away/tchai`;

  constructor(private http: HttpClient) { }

  // TCHAI
  public createTchaiTakeAway(formValue: ChaiTakeAway): Observable<any> {
    return this.http.post<any>(`${this.API_URL}${this.TAKE_AWAY_URL}`, formValue);
  }

  // public getMembersData(): Observable<{ message: string, data: Member[] }> {
  //   return this.http.get<{ message: string, data: Member[] }>(`${this.API_URL}${this.GET_MEMBERS_URL}`);
  // }

  // public updateMember(memberInfo: Member): Observable<any> {
  //   return this.http.put<any>(`${this.API_URL}${this.TAKE_AWAY_URL}/${memberInfo._id}`, memberInfo);
  // }

  // public deleteMember(member: Member): Observable<any> {
  //   return this.http.delete<any>(`${this.API_URL}${this.GET_MEMBERS_URL}/${member._id}`);
  // }
}