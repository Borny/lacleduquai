import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Chalkboard } from '../models/chalkboard.model';

@Injectable({
  providedIn: 'root'
})
export class CafeService {

  private readonly API_URL = `${environment.apiUrl}`;
  private readonly CHALKBOARD_URL = `/cafe/chalkboard`;

  constructor(private http: HttpClient) { }

  // CHALKBOARD
  public postChalkboardForm(formValue: Chalkboard): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.API_URL}${this.CHALKBOARD_URL}`, formValue);
  }

  public getChalkboardData(): Observable<{ data: Chalkboard[] }> {
    return this.http.get<{ data: Chalkboard[] }>(`${this.API_URL}${this.CHALKBOARD_URL}`);
  }

  public updateChalkboard(chalkboardInfo: Chalkboard): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.API_URL}${this.CHALKBOARD_URL}/${chalkboardInfo._id}`, chalkboardInfo);
  }

}