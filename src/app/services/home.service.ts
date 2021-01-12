import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  private readonly HOME_EVENTS_URL = this.HOME_URL + '/events';
  private readonly HOME_EVENT_URL = this.HOME_URL + '/event';

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

  // DAY EVENTS  
  public getDaysDayEvents(): Observable<{ daysList: DayEvents[] }> {
    return this.http.get<{ daysList: DayEvents[] }>(this.HOME_EVENTS_URL);
  }

  public postDaysDayEvents(data: Event): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      this.HOME_EVENT_URL,
      data
    );
  }
}
