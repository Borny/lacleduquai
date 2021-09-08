import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-away',
  templateUrl: './take-away.page.html',
  styleUrls: ['./take-away.page.scss'],
})
export class TakeAwayPage implements OnInit {

  public readonly HEADER_TITLE = 'A Emporter';
  public readonly TITLE = 'Notre délicieux Chaï à emporter';

  constructor() { }

  ngOnInit() {
  }

}
