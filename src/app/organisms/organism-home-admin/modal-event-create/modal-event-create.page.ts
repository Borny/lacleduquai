import { NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import {
  MatDatepicker,
  MatDatepickerInputEvent,
} from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { Event } from '../../../models/events.model';
import { PriceMode } from 'src/app/models/price-mode.enum';

@Component({
  selector: 'modal-event-create-page',
  templateUrl: './modal-event-create.page.html',
  styleUrls: ['./modal-event-create.page.scss'],
})
export class ModalEventCreatePage implements OnInit {
  @ViewChild('picker') _picker: MatDatepicker<Date>;

  public eventCreateForm: FormGroup;
  public init = new Date();
  public event: Event;
  public dates: Date[] = [];
  public minDate: Date;
  public maxDate: Date;
  public resetDates = new Date(0);
  public isExternalLink = false;
  public priceModePaying = false;

  public internalLinks: string[] = [
    'accueil',
    'cafe',
    'reservation-salles',
    'a-emporter',
    'galerie',
    'belaetcome',
    'residence',
    'coworking',
    'cours-stages',
    'notre-equipe',
    'contact',
  ];

  public priceModes = [
    {
      label: PriceMode.FREE,
      value: PriceMode.FREE,
    },
    {
      label: PriceMode.OPEN_PRICE,
      value: PriceMode.OPEN_PRICE,
    },
    {
      label: PriceMode.PAYING,
      value: PriceMode.PAYING,
    },
  ];

  // public hoursRange = [
  //   0, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
  // ];
  public minutesRange = [0, 15, 30, 45];

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly INTERNAL_LINK = 'interne';
  public readonly EXTERNAL_LINK = 'externe';

  private _close_on_selected = false;

  constructor(public modalCtrl: ModalController) {}

  ngOnInit() {
    this._initEventCreateForm();
    this._setMinMaxDates();
  }

  // Submitting the event form
  public onSubmit(): void {
    if (this.eventCreateForm.invalid) {
      return;
    }
    this.event = { ...this.eventCreateForm.value };
    this.event.linkType = this.eventCreateForm.value.externalLink
      ? this.EXTERNAL_LINK
      : this.INTERNAL_LINK;

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      event: { ...this.event },
    });
  }

  // LINK TYPE
  public toggleLinkType(event: CustomEvent): void {
    this.isExternalLink = !this.isExternalLink;
  }

  // TIME PICKER
  public onTimeFromChange(event): void {
    this.eventCreateForm.get('timeStart').setValue(event.detail.value);
  }

  public onTimeToChange(event): void {
    this.eventCreateForm.get('timeEnd').setValue(event.detail.value);
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
  }

  // CALENDAR
  public dateClass = (date: Date) => {
    if (this._findDate(date) !== -1) {
      return ['selected'];
    }
    return [];
  };

  // On toggle date
  public dateChanged(event: MatDatepickerInputEvent<Date>): void {
    if (event.value) {
      const date = event.value;
      const index = this._findDate(date);
      const eventDateFormArray = this.eventCreateForm.get('dates') as FormArray;
      if (index === -1) {
        this.dates.push(date);
        eventDateFormArray.push(new FormControl(date));
      } else {
        this.dates.splice(index, 1);
        eventDateFormArray.removeAt(index);
      }
      this.resetDates = new Date(0);
      if (!this._close_on_selected) {
        const closeFn = this._picker.close;
        this._picker.close = () => {};
        this._picker[
          '_popupComponentRef'
        ].instance._calendar.monthView._createWeekCells();
        setTimeout(() => {
          this._picker.close = closeFn;
        });
      }
    }
  }

  // Remove a selected date
  public remove(date: Date): void {
    const index = this._findDate(date);
    this.dates.splice(index, 1);

    const eventDateFormArray = this.eventCreateForm.get('dates') as FormArray;
    eventDateFormArray.removeAt(index);
  }

  public onPriceModeSelected(priceMode: any): void {
    this.priceModePaying = priceMode.value === PriceMode.PAYING;
    this.eventCreateForm.get('price').patchValue(priceMode.value);
    this.eventCreateForm.get('priceMode').patchValue(priceMode.value);
  }

  ////////////
  // PRIVATE
  ////////////
  private _initEventCreateForm(): void {
    this.eventCreateForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      prof: new FormControl(null, Validators.required),
      timeStart: new FormControl(null, Validators.required),
      timeEnd: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      priceMode: new FormControl(null, Validators.required),
      phone: new FormControl(
        null,
        Validators.compose([Validators.required, Validators.minLength(10)])
      ),
      dates: new FormArray([], Validators.required),
      description: new FormControl(null),
      externalLink: new FormControl(false, Validators.required),
      link: new FormControl(null, Validators.required),
    });
  }

  private _findDate(date: Date): number {
    return this.dates.map((m) => +m).indexOf(+date);
  }

  // Setting the min and max available dates
  private _setMinMaxDates(): void {
    this.minDate = new Date();

    const nextYear = new Date().getFullYear() + 1;
    this.maxDate = new Date(nextYear + 0, 11, 31);
  }
}

@NgModule({
  declarations: [ModalEventCreatePage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [],
  providers: [],
})
export class ModalEventCreateModule {}
