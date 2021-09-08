import {
  trigger,
  state,
  style,
  animate,
  transition,
  animateChild,
  query,
  group,
} from '@angular/animations';

export const fadeInAnimationView =
  trigger('fadeInAnimationView', [
    // transition(':enter', [
    //   style({ opacity: 0, top: '5%' }),
    //   animate('1000ms', style({ opacity: 1, top: 0 })),
    // ]),
    transition('* <=> *', [
      style({ opacity: 0, top: '5%' }),
      animate('500ms', style({ opacity: 1, top: 0 })),
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('500ms', style({ opacity: 0 })),
    ]),
  ]);