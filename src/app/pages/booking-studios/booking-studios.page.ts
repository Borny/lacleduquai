import { Component, HostBinding, OnInit } from '@angular/core';
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
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-booking-studios',
  templateUrl: './booking-studios.page.html',
  styleUrls: ['./booking-studios.page.scss'],
  animations: [
    trigger('staggerAnimation', [
      transition(':enter', [
        query('.ion-justify-content-center, .ion-card', [
          style({ opacity: 0, transform: 'translateY(100px)' }),
          stagger(100, [
            animate('1000ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
  ]
})
export class BookingStudiosPage implements OnInit {
  @HostBinding('@staggerAnimation')

  public readonly HEADER_TITLE = 'Réserver une salle';

  constructor() { }

  ngOnInit() {
  }

}
