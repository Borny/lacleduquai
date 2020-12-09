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

import { IonSlides, PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    // fadeInAnimationView
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => open', [
        animate('2s')
      ]),
      transition('open <=> closed', [
        animate('5s')
      ]),
      // transition('* => open', [
      //   animate('0.5s')
      // ]),
    ]),

    trigger('fadeInAnimationView', [
      state('open', style({
        opacity: 1,
        top: 0
      })),
      state('closed', style({
        top: '20px',
        opacity: 0
      })),
      // transition(':enter', [
      //   style({ opacity: 0, top: '5%' }),
      //   animate('1000ms', style({ opacity: 1, top: 0 })),
      // ]),
      transition('* => open', [
        animate('2s')
      ]),
      transition('closed => open', [
        animate('2s')
      ]),
      transition('open => *', [
        animate('2s')
      ]),
      // transition(':enter', [
      //   style({ opacity: 0, top: '5px' }),
      //   animate('200ms',
      //     style({ opacity: 1, top: 0 })),
      // ]),
      // transition(':leave', [
      //   style({ opacity: 1 }),
      //   animate('200ms',
      //     style({ opacity: 0 })),
      // ]),
    ])
  ],
  // host: { '[@fadeInAnimation]': '' }
})
export class HomePage implements OnInit {

  @ViewChild('ionSlides') ionSlides: IonSlides;

  isOpen: boolean = false;

  public slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  public descriptionWords: string[] = [
    // 'Mettre en mouvement',
    'Café',
    'Danse',
    'Théâtre',
    'Communauté',
    // 'Cours',
    // 'Ateliers',
    // 'Rencontres',
    // 'Partage',
    // 'Cie Bela & Côme',
    // 'Accueil en résidence',
    // 'Coworking',
    // 'Festival / Le Bruit des Corps'
  ];

  public readonly HEADER_TITLE = 'Accueil';

  constructor(public popoverController: PopoverController) { }

  ngOnInit(
  ): void {

    // this.isOpen = true;
  }

  ionViewWillEnter(): void {
    this.isOpen = false;
    this.isOpen = true;
    console.log(this.isOpen)
  }

  ionViewWillLeave(): void {
    this.isOpen = false;
    console.log(this.isOpen)
  }

  ionViewDidLeave(): void {
    this.isOpen = false;
    console.log(this.isOpen)
  }

  onAnimate() {
    this.isOpen = !this.isOpen;
  }

  public onTap(event): void {
    this.ionSlides.startAutoplay();
  }

  // Popover
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      cssClass: 'my-custom-class',
      event: ev,
      mode: 'md'
    });
    return await popover.present();
  }

  public onOpenPopover(event) {
    this.presentPopover(event);
  }

}
