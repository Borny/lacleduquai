import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-studios',
  templateUrl: './booking-studios.page.html',
  styleUrls: ['./booking-studios.page.scss'],
})
export class BookingStudiosPage implements OnInit {

  public readonly HEADER_TITLE = 'Réserver une salle';

  constructor() { }

  ngOnInit() {
  }

}
