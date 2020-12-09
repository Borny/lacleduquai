import { Component, OnInit } from '@angular/core';

import { fadeInAnimationView } from '../../animations';


@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.page.html',
  styleUrls: ['./cafe.page.scss'],
  animations: [
    fadeInAnimationView
  ]
})
export class CafePage implements OnInit {

  public todaysMainCourse = {
    title: 'Hâte de pouvoir vous proposer de nouveaux petits plats !',
    price: '',
  }

  public todaysDessert = {
    title: '',
    price: '',
  }

  public readonly HEADER_TITLE = 'Café';

  constructor() { }

  ngOnInit() {

  }

}
