import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { MainStudioBooking } from '../models/studio-booking.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StudioService {
  private readonly STUDIO_URL = environment.apiUrl + '/studio';
  private readonly MAIN_STUDIO_URL = this.STUDIO_URL + '/main-studio';
  // private readonly DELETE_RESIDENCE_URL = this.RESIDENCE_URL + '/delete-residence';

  constructor(private http: HttpClient) {}

  public postMainStudioBooking(
    mainStudioFormValues: MainStudioBooking
  ): Observable<{ message: string }> {
    console.log('main studio service:', mainStudioFormValues);

    return this.http.post<{ message: string }>(
      this.MAIN_STUDIO_URL,
      mainStudioFormValues
    );
  }

  public getMainStudioBookings(): Observable<any> {
    return this.http
      .get<{ any }>(this.MAIN_STUDIO_URL)
      .pipe(map((response) => response['data']));
  }

  // public updateResidence(residenceData: Residence): Observable<{ message: string }> {
  //   console.log('update', residenceData)
  //   return this.http.put<{ message: string }>(`${this.UPDATE_RESIDENCE_URL}/${residenceData._id}`, residenceData);
  // }

  // public deleteResidence(residence: Residence): Observable<{ message: string }> {
  //   return this.http.delete<{ message: string }>(`${this.DELETE_RESIDENCE_URL}/${residence._id}`);
  // }
}
