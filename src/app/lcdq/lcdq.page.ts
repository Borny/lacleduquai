import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

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

// import { slideInAnimation } from '../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lcdq',
  templateUrl: 'lcdq.page.html',
  styleUrls: ['lcdq.page.scss'],
  animations: [
    // slideInAnimation
  ]

})
export class LcdqPage implements OnInit {

  @ViewChild('snav') navToggle: any;

  public mobileQuery: MediaQueryList;
  public toggleIconName = 'menu';
  public showSubNav = false;

  private readonly SCREEN_SM = '(max-width: 768px)';

  constructor(
    private media: MediaMatcher) {
    this.mobileQuery = media.matchMedia(this.SCREEN_SM);
  }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

}

