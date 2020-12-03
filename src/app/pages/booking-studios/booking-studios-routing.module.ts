import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingStudiosPage } from './booking-studios.page';

const routes: Routes = [
  {
    path: '',
    component: BookingStudiosPage
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
export class BookingStudiosPageRoutingModule { }
