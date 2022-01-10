import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { filter, map } from 'rxjs/operators';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
  animation,
} from '@angular/animations';

import { fadeInAnimationView } from '../../animations';

import { HomeService } from '../../services/home.service';

import { News } from '../../models/news.model';
import { DayEvents, Event } from '../../models/events.model';
import { PriceMode } from 'src/app/models/price-mode.enum';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // host: { '[@fadeInAnimation]': '' }
})
export class HomePage implements OnInit {
  public isNewsLoading = false;
  public isDayEventsLoading = false;
  public eventOpen = false;
  public eventId: string;
  public newsList: News[] = [];
  public daysList: DayEvents[] = [];
  public carousselDescriptionWords: string[] = [
    'Mettre en mouvement',
    'Café',
    'Danse',
    'Théâtre',
    'Cours',
    'Ateliers',
    'Rencontres',
    'Partage',
    'Cie Bela & Côme',
    'Accueil en résidence',
    'Coworking',
    'Le Bruit des Corps',
  ];
  public months: string[] = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre',
  ];

  public priceMode = PriceMode;

  public readonly EVENT_CARD_CONTENT_MAX_HEIGHT = '500px';
  public readonly HEADER_TITLE = 'Accueil';
  public readonly TITLE = 'La Clé Du Quai';

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this._getNews();
    this._getDaysDayEvents();
  }

  public trackElement(index: number, element: any): any {
    return element ? element._id : null;
  }

  public toggleCollapse(eventClicked: Event): void {
    if (eventClicked.expanded) {
      eventClicked.expanded = false;
    } else {
      this.daysList.forEach((day) =>
        day.events.map((e) => {
          if (eventClicked === e) {
            e.expanded = !e.expanded;
          } else {
            e.expanded = false;
          }
          return e;
        })
      );
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private _getNews(): void {
    this.isNewsLoading = true;
    this.homeService.getNews().subscribe(
      (response) => {
        this.isNewsLoading = false;
        this.newsList = response.data;
      },
      (error) => {
        this.isNewsLoading = false;
        console.log('news error:', error);
      }
    );
  }

  private _getDaysDayEvents(): void {
    this.isDayEventsLoading = true;
    this.homeService
      .getDaysDayEvents()
      .pipe(
        map((response) => {
          response.daysListFiltered = response.daysListFiltered
            .map((day) => {
              // Sorting the events by ascending time
              day.events.sort(
                (a, b) =>
                  new Date(a.timeStart).getHours() -
                  new Date(b.timeStart).getHours()
              );
              // Adding a label to the day
              day.label = this._setDayEventLabel(day.date);
              return day;
            })
            // Sorting the days list to ascending order
            .sort((a, b) => a.dayOfYear - b.dayOfYear);
          return response;
        })
      )
      .subscribe(
        (response) => {
          this.isDayEventsLoading = false;
          response.daysListFiltered.forEach((day) =>
            day.events.forEach((event) => (event.expanded = false))
          );
          this.daysList = response.daysListFiltered;
        },
        (error) => {
          this.isDayEventsLoading = false;
          console.log('news error:', error);
        }
      );
  }

  private _setDayEventLabel(date: Date): string {
    if (new Date(date).getDate() === new Date().getDate()) {
      return `Aujourd'hui`;
    } else if (new Date(date).getDate() === new Date().getDate() + 1) {
      return `Demain`;
    } else {
      let [day] = new Date(date).toLocaleString('fr-FR').split('/');
      const month = this.months[new Date(date).getMonth()];
      return `${day} ${month}`;
    }
  }
}
