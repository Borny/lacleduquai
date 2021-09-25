import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import * as moment from 'moment';
import { Subject } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalStudioBooking } from './modal-studio-booking/modal-studio-booking.page';
import { ModalActionsEnum } from 'src/app/models/modal-actions.enum';
import { StudioService } from 'src/app/services/studio.service';
import { MainStudioBooking } from 'src/app/models/studio-booking.model';
import { map } from 'rxjs/operators';

// Defining the day to start the week
moment.updateLocale('fr', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
  },
});

@Component({
  selector: 'organism-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './organism-calendar.component.html',
  styleUrls: ['./organism-calendar.component.scss'],
})
export class OrganismCalendarComponent implements OnInit {
  public view: CalendarView = CalendarView.Week;
  public calendarViewEnum = CalendarView;
  public viewDate: Date = new Date();
  // public groupedSimilarExports: CalendarEvent[] = [];
  public bookings: CalendarEvent[] = [];
  public modalActionsEnum = ModalActionsEnum;
  public modalActionsValues = Object.values(ModalActionsEnum);

  public refresh$: Subject<void> = new Subject();

  private _startOfWeek: string;
  private _endOfWeek: string;

  // bookings: CalendarEvent[] = [
  //   {
  //     start: new Date(),

  //     title: 'A 3 day event',
  //     // color: colors.red,
  //     // actions: this.actions,
  //     allDay: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true,
  //     },
  //     draggable: true,
  //   },
  // ];

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    private studioService: StudioService
  ) {}

  ngOnInit() {
    this._init();
  }

  public onSelectedTime(date: Date): void {
    console.log(date);
    const time = new Date(date).getTime();
    // Opening the modal only if the selected date is superior to the current date/time
    if (date > moment().subtract(30, 'm').toDate()) {
      console.log(time);
      this._onOpenBookingDialog(date);
    }
  }

  public beforeWeekViewRender(
    renderEvent: CalendarWeekViewBeforeRenderEvent
  ): void {
    // Adding a disabled class to any segment prior to the current date/time
    renderEvent.hourColumns.forEach((hourColumn) => {
      hourColumn.hours.forEach((hour) => {
        hour.segments.forEach((segment) => {
          if (segment.date < moment().subtract(30, 'm').toDate()) {
            segment.cssClass = 'cal--disabled';
          }
        });
      });
    });
  }

  // Manage Residence
  async _onOpenBookingDialog(time: Date): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalStudioBooking,
      componentProps: {
        time,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    const mainStudioBooking: MainStudioBooking = data.booking;
    console.log('data', data);
    if (data.dismissed === this.modalActionsEnum.CONFIRM) {
      this.studioService.postMainStudioBooking(mainStudioBooking).subscribe(
        (response) => {
          console.log(response);
          this._getMainStudioBookings(this.viewDate);
          // show snack bar
          // this._presentToast(this.RESIDENCE_UPDATED_SUCCESS, 'success');
        },
        (err) => {
          // this._presentToast(this.RESIDENCE_UPDATED_FAIL, 'warning');
        }
      );
    } else if (data.dismissed === this.modalActionsEnum.CANCEL) {
      //   this.residenceService.deleteResidence(updatedResidence).subscribe(
      //     (result) => {
      //       this.originalResidenceData = this.originalResidenceData.filter(
      //         (residence) => residence._id !== updatedResidence._id
      //       );
      //       this.currentResidenceData = this.originalResidenceData;
      //       this.candidates = this.currentResidenceData.filter(
      //         (residence) => !residence.booked
      //       );
      //       this.residencesBooked = this.currentResidenceData.filter(
      //         (residence) => residence.booked
      //       );
      //       // show snack bar
      //       this._presentToast(this.RESIDENCE_DELETED_SUCCESS, 'success');
      //     },
      //     (err) => {
      //       // show snack bar
      //       this._presentToast(this.RESIDENCE_DELETED_FAIL, 'warning');
      //     }
      //   );
    }
  }

  ////////////
  // PRIVATE
  ////////////
  // bookings: CalendarEvent[] = [
  //   {
  //     title: 'Click me',
  //     // color: colors.yellow,
  //     start: new Date(),
  //   },
  //   {
  //     title: 'Or click me',
  //     // color: colors.blue,
  //     start: new Date(),
  //   },
  // ];

  // eventClicked({ event }: { event: CalendarEvent }): void {
  //   console.log('Event clicked', event);
  // }

  // handleEvent(action: string, event: CalendarEvent): void {
  //   console.log(event);
  // }

  // events: CalendarEvent[] = [
  //   {
  //     title: 'Click me',
  //     start: new Date(),
  //   },
  //   {
  //     title: 'Or click me',
  //     start: new Date(),
  //   },
  // ];

  private _getMainStudioBookings(date: Date): void {
    this._startOfWeek = moment(date).startOf('week').toISOString();
    this._endOfWeek = moment(date).endOf('week').toISOString();
    this.studioService
      .getMainStudioBookings()
      .pipe(
        map((bookings: any[]) => {
          console.log(bookings);
          const bookingsUpdated: CalendarEvent[] = [];

          bookings.forEach((booking) => {
            const updatedBooking: CalendarEvent = {
              id: booking._id,
              start: new Date(+booking.startTime),
              end: new Date(booking.endTime),
              // end: moment().add(5, 'h').toDate(),
              title: booking.firstName,
              meta: {
                // projectId: booking.project.id,
                // isDisabled: booking.isDisable,
              },
            };
            bookingsUpdated.push(updatedBooking);
          });
          return bookingsUpdated;
        })
      )
      .subscribe((mainStudioBookingsUpdated) => {
        console.log(mainStudioBookingsUpdated);
        this.bookings = mainStudioBookingsUpdated;

        this.refresh$.next();
      });
  }

  private _init(): void {
    this._getMainStudioBookings(this.viewDate);
  }
}
