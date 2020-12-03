import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-rooms',
  templateUrl: './booking-rooms.page.html',
  styleUrls: ['./booking-rooms.page.scss'],
})
export class BookingRoomsPage implements OnInit {

  public readonly HEADER_TITLE = 'Réservation Studio';

  public title = 'Studio';

  constructor() { }

  ngOnInit() {
  }

}
