import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'lcdq',
  templateUrl: 'lcdq.page.html',
  styleUrls: ['lcdq.page.scss'],
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

}

