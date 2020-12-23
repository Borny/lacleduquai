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

interface News {
  link: string;
  label: string;
}

interface DailyEvent {
  date: Date | number;
  events: Event[];
}

interface Event {
  label: string;
  intervenant: string;
  schedule: string;
  price: string;
  phone: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // host: { '[@fadeInAnimation]': '' }
})
export class HomePage implements OnInit {

  public newsList: News[] = [
    {
      link: '/lcdq/coworking',
      label: 'Coworking de 10h à 13h'
    },
    {
      link: '/lcdq/a-emporter',
      label: 'Faites votre stock de Chaï !'
    }
  ];

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

  public dailyEvents: DailyEvent[] = [
    {
      date: new Date(),
      events: [
        {
          label: 'Yoga',
          intervenant: 'Jean-Luc',
          schedule: '12h30 / 13h30',
          price: '15',
          phone: '0789765434'
        },
        {
          label: 'Yoga',
          intervenant: 'Jean-Luc',
          schedule: '12h30 / 13h30',
          price: '15',
          phone: '0789765434'
        }
      ]

    },
    {
      date: new Date(),
      events: [
        {
          label: 'Yoga',
          intervenant: 'Jean-Luc',
          schedule: '12h30 / 13h30',
          price: '15',
          phone: '0789765434'
        },
        {
          label: 'Yoga',
          intervenant: 'Jean-Luc',
          schedule: '12h30 / 13h30',
          price: '15',
          phone: '0789765434'
        },
        {
          label: 'Yoga',
          intervenant: 'Jean-Luc',
          schedule: '12h30 / 13h30',
          price: '15',
          phone: '0789765434'
        }
      ]

    },
    {
      date: new Date(),
      events: [
        {
          label: 'Danse contemporaine',
          intervenant: 'Côme',
          schedule: '18h30 / 13h30',
          price: '15',
          phone: '0789765434'
        },
        {
          label: 'Danse contemporaine',
          intervenant: 'Côme',
          schedule: '18h30 / 13h30',
          price: '15',
          phone: '0789765434'
        }
      ]

    }
  ]

  public readonly HEADER_TITLE = 'Accueil';
  public readonly TITLE = 'La Clé Du Quai';

  constructor() { }

  ngOnInit(
  ): void {
    console.log(this.eventLabel(new Date()))
  }

  ionViewWillEnter(): void {

  }

  ionViewWillLeave(): void {

  }

  ionViewDidLeave(): void {

  }

  eventLabel(date: Date): string {
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

}
