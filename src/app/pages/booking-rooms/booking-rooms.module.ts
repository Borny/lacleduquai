import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { BookingRoomsPageRoutingModule } from './booking-rooms-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule,
    SharedModule,
    BookingRoomsPageRoutingModule
  ]
})
export class BookingRoomsPageModule { }
