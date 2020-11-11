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
  private readonly CHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/chai`;
  private readonly SINGLE_CHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/single-chai`;
  private readonly UPDATE_CHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/update-chai`;
  private readonly DELETE_CHAI_TAKE_AWAY_URL = `${this.TAKE_AWAY_URL}/delete-chai`;

  constructor(private http: HttpClient) { }

  // CHAI
  public createChaiTakeAwayOrder(tchaiOrderData: ChaiTakeAway): Observable<string> {
    return this.http.post<string>(`${this.CHAI_TAKE_AWAY_URL}`, tchaiOrderData);
  }

  public getChaiTakeAwayOrders(): Observable<{ message: string, data: ChaiTakeAway[] }> {
    return this.http.get<{ message: string, data: ChaiTakeAway[] }>(`${this.CHAI_TAKE_AWAY_URL}`);
  }

  public getChaiTakeAwayOrder(orderId: string): Observable<{ message: string, data: ChaiTakeAway }> {
    return this.http.get<{ message: string, data: ChaiTakeAway }>(`${this.SINGLE_CHAI_TAKE_AWAY_URL}/${orderId}`);
  }

  public updateOrder(orderInfo: ChaiTakeAway): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.UPDATE_CHAI_TAKE_AWAY_URL}/${orderInfo._id}`, orderInfo);
  }

  public deleteOrder(order: ChaiTakeAway): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.DELETE_CHAI_TAKE_AWAY_URL}/${order._id}`);
  }
}