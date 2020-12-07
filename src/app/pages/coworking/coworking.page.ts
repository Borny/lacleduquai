import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { CoworkingService } from '../../services/coworking.service';
import { Coworking, CoworkingBookedDay } from '../../models/coworking.model';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.page.html',
  styleUrls: ['./coworking.page.scss'],
})
export class CoworkingPage implements OnInit {
  @ViewChild('picker') _picker: MatDatepicker<Date>;

  public init = new Date();
  public resetModel = new Date(0);
  public model: Date[] = [];
  public isLoading = false;
  public hideForm = false;
  public isFormSent = false;
  public isFormFailed = false;
  public coworkingForm: FormGroup;
  public maxPersonsAllowed: number = 10;
  public minDateFilter: Date;
  public maxDateFilter: Date;
  public totalPrice = 0;

  // TODO: get the real data form the server
  public bookedDays: any[] = [
    {
      date: new Date('12/15/2020'),
      bookedPeople: 5
    },
    {
      date: new Date('12/17/2020'),
      bookedPeople: 4
    },
    {
      date: new Date('12/7/2020'),
      bookedPeople: 10
    },
    {
      date: new Date('12/25/2020'),
      bookedPeople: 5
    },
    {
      date: new Date('12/29/2020'),
      bookedPeople: 8
    },
    {
      date: new Date('12/9/2020'),
      bookedPeople: 7
    }
  ];

  public readonly HEADER_TITLE = 'Coworking';
  public readonly HOME_BTN_TEXT = 'Accueil';
  public readonly VALIDATE_BUTTON_TEXT = 'Valider';
  public readonly RELOAD = 'Réessayer';

  private _close_on_selected = false;

  constructor(private router: Router, private coworkingService: CoworkingService) { }

  // LYFE CYCLE HOOKS
  ngOnInit(): void {
    this._initCoworkingForm();
    this._setMinMaxDates();
  }

  ionViewDidLeave(): void {
    // Reseting the form on page leave
    this.coworkingForm.reset();
    this.isLoading = false;
    this.hideForm = false;
    this.isFormSent = false;
    this.isFormFailed = false;
  }

  public dateClass = (date: Date) => {
    if (this._findDate(date) !== -1) {
      return ['selected'];
    }
    return [];
  }

  // CALENDAR

  // On toggle date
  public dateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      const date = event.value;
      const index = this._findDate(date);
      const bookingDateFormArray = this.coworkingForm.get('bookingDateList') as FormArray;
      if (index === -1) {
        this.model.push(date);
        bookingDateFormArray.push(new FormControl(date));
      } else {
        this.model.splice(index, 1)
        bookingDateFormArray.removeAt(index);
      }
      this.resetModel = new Date(0);
      if (!this._close_on_selected) {
        const closeFn = this._picker.close;
        this._picker.close = () => { };
        this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
        setTimeout(() => {
          this._picker.close = closeFn;
        });
      }

      this.totalPrice = (this.coworkingForm.get('personsNumber').value * this.model.length) * 5;
    }
  }

  // Remove a selected date
  public remove(date: Date): void {
    const index = this._findDate(date);
    this.model.splice(index, 1);

    const bookingDateFormArray = this.coworkingForm.get('bookingDateList') as FormArray;
    bookingDateFormArray.removeAt(index);

    this.totalPrice = (this.coworkingForm.get('personsNumber').value * this.model.length) * 5;
  }

  // Submitting the form
  public onSubmit(): void {
    if (this.coworkingForm.invalid) {
      return;
    }

    console.log(this.coworkingForm.value);
    this.isLoading = true;
    const formValues: Coworking = this.coworkingForm.value;
    formValues.totalPrice = this.totalPrice;

    // Sending the form
    this.coworkingService.postCoworking(formValues)
      .subscribe(
        (response) => {
          this.isLoading = false;
          this.isFormSent = true;
          this.hideForm = true;
          this.coworkingForm.reset();
        },
        (error) => {
          console.log(error)
          this.isLoading = false;
          this.isFormFailed = true;
        });
  }

  // On select change
  public onSelectChange(event: CustomEvent): void {
    if (this.totalPrice !== 0) {
      this.totalPrice = (event.detail.value * this.model.length) * 5;
    }
  }

  // Setting a filter on the datepicker
  public dateFilter = (date: Date | null): boolean => {
    const unAvailableDays: string[] = this._getUnAvailableDays(this.coworkingForm.get('personsNumber').value, this.bookedDays);

    // Get the day of the week
    const calendarDay: number = (date || new Date()).getDay();

    for (const unAvailableDay of unAvailableDays) {
      // Returns false if the calendar day is equal to any unavailable day
      if (date.toLocaleDateString() === unAvailableDay) {
        return false;
      }
    }

    // Only allows Monday to Friday to be selected
    return calendarDay !== 0 && calendarDay !== 6;
  }

  // Get the max count of people as an array
  public getCount(num: number): number[] {
    return new Array(num);
  }

  // Navigate home
  public onNavigateHome(): void {
    this.isLoading = false;
    this.isFormSent = false;
    this.isFormFailed = false;
    this.coworkingForm.reset();
    this.router.navigateByUrl('/lcdq/accueil');
  }

  // Reload the page
  public onReload(): void {
    location.reload();
  }

  ////////////
  // PRIVATE
  ////////////

  // Builds the coworking form
  private _initCoworkingForm(): void {
    this.coworkingForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      personsNumber: new FormControl(null, Validators.required),
      bookingDateList: new FormArray([], Validators.required),
    });
  }

  // Setting the min and max available booking dates
  private _setMinMaxDates(): void {
    this.minDateFilter = new Date();

    // TODO: uncomment from 01/01/2021
    // const currentYear = new Date().getFullYear();
    // this.maxDateFilter = new Date(currentYear + 0, 5, 30);
  }

  private _findDate(date: Date): number {
    return this.model.map((m) => +m).indexOf(+date);
  }

  // Get the unavailable
  private _getUnAvailableDays(peopleCount: number, bookedDays: CoworkingBookedDay[]): string[] {

    // Filtering the booked days to return the ones unavailable compared to the number of people chosen by the user
    const unAvailableDays = bookedDays
      .filter((day) => day.bookedPeople + peopleCount > this.maxPersonsAllowed)
      .map(day => day.date.toLocaleDateString());
    return unAvailableDays;
  }
}
