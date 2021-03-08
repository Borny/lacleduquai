import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { Residence } from '../models/residence.model';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  private readonly RESIDENCE_URL = environment.apiUrl + '/residence';
  private readonly UPDATE_RESIDENCE_URL = this.RESIDENCE_URL + '/update-residence';
  private readonly DELETE_RESIDENCE_URL = this.RESIDENCE_URL + '/delete-residence';

  constructor(
    private http: HttpClient
  ) {
  }

  // Request Residence
  public postResidenceForm(residenceFormValues: Residence): Observable<{ message: string }> {
    console.log('residence service:', residenceFormValues);

    return this.http.post<{ message: string }>(this.RESIDENCE_URL, residenceFormValues);
  }

  public getResidences(): Observable<{ data: Residence[] }> {
    return this.http.get<{ data: Residence[] }>(this.RESIDENCE_URL);
  }

  public updateResidence(residenceData: Residence): Observable<{ message: string }> {
    console.log('update', residenceData)
    return this.http.put<{ message: string }>(`${this.UPDATE_RESIDENCE_URL}/${residenceData._id}`, residenceData);
  }

  public deleteResidence(residence: Residence): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.DELETE_RESIDENCE_URL}/${residence._id}`);
  }

}
