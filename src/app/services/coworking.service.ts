import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Coworking } from '../models/coworking.model';

@Injectable({
  providedIn: 'root'
})
export class CoworkingService {

  private readonly COWORKING_URL = environment.apiUrl + '/coworking';

  constructor(private http: HttpClient) { }

  public postCoworking(formValues: Coworking): Observable<{ message: string }> {
    console.log('coworking service:', formValues)
    return this.http.post<{ message: string }>(`${this.COWORKING_URL}`, formValues);
  }

  public stripe(formValues): Observable<any> {
    console.log('coworking service:', formValues)
    return this.http.post<any>(`${this.COWORKING_URL}/stripe`, formValues);
  }
}
