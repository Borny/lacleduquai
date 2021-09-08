import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../environments/environment';

import { News } from '../models/news.model';
import { DayEvents, Event } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private readonly HOME_URL = environment.apiUrl + '/home';
  private readonly HOME_NEWS_URL = this.HOME_URL + '/news';
  private readonly SINGLE_NEWS_URL = this.HOME_URL + '/single-news';
  private readonly DELETE_NEWS_URL = this.HOME_URL + '/delete-news';
  private readonly UPDATE_NEWS_URL = this.HOME_URL + '/update-news';

  private readonly HOME_DAYS_EVENTS_URL = `${this.HOME_URL}/days-events`;
  private readonly SINGLE_EVENT_URL = `${this.HOME_URL}/single-event`;
  private readonly HOME_EVENTS_URL = `${this.HOME_URL}/events`;
  private readonly HOME_EVENT_URL = `${this.HOME_URL}/event`;
  private readonly DELETE_EVENT_URL = `${this.HOME_URL}/delete-event`;
  private readonly UPDATE_EVENT_URL = `${this.HOME_URL}/update-event`;

  constructor(private http: HttpClient) { }

  // NEWS
  public getNews(): Observable<{ data: News[] }> {
    return this.http.get<{ data: News[] }>(this.HOME_NEWS_URL);
  }

  public getSingleNews(newsId: string): Observable<{ data: News }> {
    return this.http.get<{ data: News }>(`${this.SINGLE_NEWS_URL}/${newsId}`);
  }

  public postNews(news: News): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      this.HOME_NEWS_URL,
      news
    );
  }

  public updateNews(newsData: News): Observable<{ message: string }> {
    console.log(newsData)
    return this.http.put<{ message: string }>(`${this.UPDATE_NEWS_URL}/${newsData._id}`, newsData);
  }

  public deleteNews(news: News): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.DELETE_NEWS_URL}/${news._id}`);
  }

  // EVENTS  
  public postEvent(data: Event): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      this.HOME_EVENT_URL,
      data
    );
  }

  public getDaysDayEvents(): Observable<{ daysListFiltered: DayEvents[] }> {
    return this.http.get<{ daysListFiltered: DayEvents[] }>(this.HOME_DAYS_EVENTS_URL);
  }

  public getEvents(): Observable<{ events: Event[] }> {
    return this.http.get<{ events: Event[] }>(this.HOME_EVENTS_URL);
  }

  public getSingleEvent(eventId: string): Observable<{ data: Event }> {
    return this.http.get<{ data: Event }>(`${this.SINGLE_EVENT_URL}/${eventId}`);
  }

  public updateEvent(eventData: Event): Observable<{ message: string }> {
    return this.http.put<{ message: string }>(`${this.UPDATE_EVENT_URL}/${eventData._id}`, eventData);
  }

  public deleteEvent(Event: Event): Observable<{ message: string }> {
    return this.http.delete<{ message: string }>(`${this.DELETE_EVENT_URL}/${Event._id}`);
  }
}
