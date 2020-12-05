import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belaetcome',
  templateUrl: './belaetcome.page.html',
  styleUrls: ['./belaetcome.page.scss'],
})
export class BelaetcomePage implements OnInit {

  public readonly HEADER_TITLE = 'Cie Bela & Côme';
  public readonly BELA_ET_COME_WEBSITE_LINK = 'https://belaetcome.com';

  constructor() { }

  ngOnInit() {
  }

}
