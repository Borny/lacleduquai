import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { CoworkingService } from '../../services/coworking.service';
import { Coworking, CoworkingBookedDay } from '../../models/coworking.model';

// declare var Stripe: any; // : stripe.StripeStatic;

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.page.html',
  styleUrls: ['./coworking.page.scss'],
})
export class CoworkingPage implements OnInit {
  @ViewChild('picker') _picker: MatDatepicker<Date>;
  @ViewChild('creditCardElement') creditCardElement: ElementRef;

  public cardErrors: any;
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
  public isCardValid = false;
  public pricePerHour = 6.5;

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
    },
    {
      date: new Date('1/20/2021'),
      bookedPeople: 7
    },
    {
      date: new Date('1/25/2021'),
      bookedPeople: 7
    }
  ];

  public readonly HEADER_TITLE = 'Coworking';
  public readonly TITLE = 'Coworking Artistique et Culturel';
  public readonly HOME_BTN_TEXT = 'Accueil';
  public readonly VALIDATE_BUTTON_TEXT = 'Valider';
  public readonly PAY_BUTTON_TEXT = 'Régler';
  public readonly RELOAD = 'Réessayer';

  private _close_on_selected = false;

  private stripe: any; // : stripe.Stripe;
  private creditCardContainer: any;

  constructor(private router: Router, private coworkingService: CoworkingService) { }

  // LYFE CYCLE HOOKS
  ngOnInit(): void {
    this._initCoworkingForm();
    this._setMinMaxDates();
  }

  ionViewDidEnter(): void {
    this._initStripe();
  }

  ionViewDidLeave(): void {
    // Reseting the form on page leave
    this.coworkingForm.reset();
    this.model = [];
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

      this.totalPrice = (this.coworkingForm.get('personsNumber').value * this.model.length) * this.pricePerHour;
    }
  }

  // Remove a selected date
  public remove(date: Date): void {
    const index = this._findDate(date);
    this.model.splice(index, 1);

    const bookingDateFormArray = this.coworkingForm.get('bookingDateList') as FormArray;
    bookingDateFormArray.removeAt(index);

    this.totalPrice = (this.coworkingForm.get('personsNumber').value * this.model.length) * this.pricePerHour;
  }

  // Submitting the form
  public async onSubmit(): Promise<void> {
    if (this.coworkingForm.invalid) {
      return;
    }

    const result = await this.stripe.createToken(this.creditCardContainer);
    const formValues: Coworking = this.coworkingForm.value;
    formValues.token = result.token;

    if (result.error) {
      // this.cardErrors = result.error.message;
    } else {
      this.isLoading = true;
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


    // Sending the form
  }

  // On select change
  public onSelectChange(event: CustomEvent): void {
    if (this.totalPrice !== 0) {
      this.totalPrice = (event.detail.value * this.model.length) * this.pricePerHour;
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

  // Calling stripe and creating the card input element
  private _initStripe(): void {

    // Importing the key
    this.stripe = Stripe('pk_test_51HuFU7H5cEg8n0QAB1Y3OMIH5H6T3o4rs7q8pBLsLzQ3w01hNGmPjuipe4R8G1zn9AAp4IHCzMm0K1erufpLAcjU00ISs2mBZX');

    // Creating the element
    const elements = this.stripe.elements({ locale: 'fr' });

    this.creditCardContainer = elements.create('card');
    this.creditCardContainer.mount(this.creditCardElement.nativeElement);

    this.creditCardContainer.addEventListener('change', (callback) => {
      console.log(callback);

      this.cardErrors = callback.error && callback.error.message;
      this.isCardValid = callback.complete;
    });

  }

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

    const currentYear = new Date().getFullYear();
    this.maxDateFilter = new Date(currentYear + 0, 5, 30);
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
    console.log(unAvailableDays)
    return unAvailableDays;
  }
}
