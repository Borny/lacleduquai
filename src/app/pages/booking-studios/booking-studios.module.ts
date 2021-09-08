import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BookingStudiosPageRoutingModule } from './booking-studios-routing.module';

import { BookingStudiosPage } from './booking-studios.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BookingStudiosPageRoutingModule,
    SharedModule
  ],
  declarations: [BookingStudiosPage]
})
export class BookingStudiosPageModule { }
