import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import {
  CalendarDateFormatter,
  CalendarModule,
  CalendarMomentDateFormatter,
  DateAdapter,
  MOMENT,
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/moment';
import * as moment from 'moment';

export function momentAdapterFactory() {
  return adapterFactory(moment);
}

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganismCalendarComponent } from './organism-calendar.component';
import { ModalStudioBookingModule } from './modal-studio-booking/modal-studio-booking.page';

@NgModule({
  declarations: [OrganismCalendarComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ModalStudioBookingModule,
    CalendarModule.forRoot(
      {
        provide: DateAdapter,
        useFactory: momentAdapterFactory,
      },
      {
        dateFormatter: {
          provide: CalendarDateFormatter,
          useClass: CalendarMomentDateFormatter,
        },
      }
    ),
  ],
  exports: [OrganismCalendarComponent],
  providers: [
    {
      provide: MOMENT,
      useValue: moment,
    },
  ],
})
export class OrganismCalendarModule {}
