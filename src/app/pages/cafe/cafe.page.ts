import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
})
export class CafePage implements OnInit {

  public readonly HEADER_TITLE = 'Café';

  constructor() { }

  ngOnInit() {

  }

}
