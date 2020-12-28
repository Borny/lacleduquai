import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
import { DailyEvents } from '../../models/daily-events.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // host: { '[@fadeInAnimation]': '' }
})
export class HomePage implements OnInit {

  public newsList: News[] = [];

  public descriptionWords: string[] = [
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
    'Le Bruit des Corps'
  ];

  today = new Date();

  public dailyEvents: DailyEvents[] = []

  public readonly HEADER_TITLE = 'Accueil';
  public readonly TITLE = 'La Clé Du Quai';

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this._getNews();
    this._getDaysEvents();
  }

  public dayEventLabel(date: Date): string {
    console.log('date:', new Date())

    if (date.getDate() === new Date().getDate()) {
      console.log('if')
      return 'Aujourd\'hui';
    } else if (date.getDate() === new Date().getDate() + 1) {
      console.log('else if')
      return 'Demain';
    } else {
      console.log('else')
      return date.toLocaleString();
    }
  }

  // PRIVATE
  private _getNews(): void {
    this.homeService.getNews().subscribe(
      response => {
        this.newsList = response.data;
      },
      error => console.log('news error:', error)
    )
  }

  private _getDaysEvents(): void {
    this.homeService.getDaysEvents().subscribe(
      response => {
        this.dailyEvents = response.data;
      },
      error => console.log('news error:', error)
    )
  }
}
