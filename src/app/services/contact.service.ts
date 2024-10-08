import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Message } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly CONTACT_URL = environment.apiUrl + '/contact';

  constructor(private http: HttpClient) { }

  public postMessage(messageValues: Message): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.CONTACT_URL}`, messageValues);
  }
}
