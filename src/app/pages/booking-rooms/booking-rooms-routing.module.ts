import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingRoomsPage } from './booking-rooms.page';

const routes: Routes = [
  {
    path: '',
    component: BookingRoomsPage
  },
  {
    path: 'reservation-salles',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingRoomsPageRoutingModule { }
