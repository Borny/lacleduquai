import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ChaiTakeAway } from '../models/chai-take-away.model';

@Injectable({
  providedIn: 'root'
})
export class TakeAwayService {

  private readonly API_URL = `${environment.apiUrl}`;
  private readonly TAKE_AWAY_URL = `${this.API_URL}/take-away`;
  private readonly TCHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/chai`;
  private readonly UPDATE_TCHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/update-chai`;

  constructor(private http: HttpClient) { }

  // TCHAI
  public createChaiTakeAwayOrder(tchaiOrderData: ChaiTakeAway): Observable<string> {
    return this.http.post<string>(`${this.TCHAI_TAKE_AWAY_URL}`, tchaiOrderData);
  }

  public getChaiTakeAwayOrder(): Observable<{ message: string, data: ChaiTakeAway[] }> {
    return this.http.get<{ message: string, data: ChaiTakeAway[] }>(`${this.TCHAI_TAKE_AWAY_URL}`);
  }

  // public getMembersData(): Observable<{ message: string, data: Member[] }> {
  //   return this.http.get<{ message: string, data: Member[] }>(`${this.API_URL}${this.GET_MEMBERS_URL}`);
  // }

  public updateOrder(orderInfo: ChaiTakeAway): Observable<any> {
    return this.http.put<any>(`${this.UPDATE_TCHAI_TAKE_AWAY_URL}/${orderInfo._id}`, orderInfo);
  }

  // public deleteMember(member: Member): Observable<any> {
  //   return this.http.delete<any>(`${this.API_URL}${this.GET_MEMBERS_URL}/${member._id}`);
  // }
}