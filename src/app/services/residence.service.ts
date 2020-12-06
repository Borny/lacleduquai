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

  constructor(
    private http: HttpClient
  ) {
  }

  // Request Residence
  public postResidenceForm(residenceFormValues: Residence): Observable<{ message: string }> {
    console.log('residence service:', residenceFormValues);

    return this.http.post<{ message: string }>(this.RESIDENCE_URL, residenceFormValues);
  }
}
