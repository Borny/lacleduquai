import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarView,
  CalendarWeekViewBeforeRenderEvent,
  DAYS_OF_WEEK,
} from 'angular-calendar';
import * as moment from 'moment';
import { Subject } from 'rxjs';

// Defining the day to start the week
moment.updateLocale('fr', {
  week: {
    dow: DAYS_OF_WEEK.MONDAY,
  },
});
@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {
  public view: CalendarView = CalendarView.Week;
  public calendarViewEnum = CalendarView;
  public viewDate: Date = new Date();
  public groupedSimilarExports: CalendarEvent[] = [];
  public exports: CalendarEvent[] = [];

  public refresh$: Subject<void> = new Subject();

  private _startOfWeek: any;
  private _endOfWeek: any;

  public readonly HEADER_TITLE = 'Calendrier des studios';
  public readonly TITLE = 'Calendrier des studios';

  public descriptionItems: string[] = [
    `Située au sous-sol, jolie cave bordelaise voutée de 50m2`,
    `Parquet souple, idéal pour la danse`,
    `Equipée d'une sono: prise mini-jack / CD / bluetooth`,
    `Pas de réseau téléphonique ni internet`,
    `5€ de l'heure pour vos répétitions`,
    `20€ de l'heure pour vos ateliers`,
  ];

  constructor() {}

  ngOnInit() {}

  public onViewDateChange(date: Date): void {
    console.log('date change', date);
    // this._getPlannings(date);
  }

  public onSelectedTime(time: Date): void {
    // Opening the modal only if the selected date is superior to the current date/time
    if (time > moment().subtract(30, 'm').toDate()) {
      // this._onOpenPlanificationDialog(time);
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
}
