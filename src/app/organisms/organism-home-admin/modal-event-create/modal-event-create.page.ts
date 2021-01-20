import { NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { Event } from '../../../models/events.model';


@Component({
  selector: 'modal-event-create-page',
  templateUrl: './modal-event-create.page.html',
  styleUrls: ['./modal-event-create.page.scss']
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

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  private _close_on_selected = false;

  constructor(public modalCtrl: ModalController) { }

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
    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'event': { ...this.event }
    })
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
      'dismissed': this.CANCEL
    });
  }

  // CALENDAR
  public dateClass = (date: Date) => {
    if (this._findDate(date) !== -1) {
      return ['selected'];
    }
    return [];
  }

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
        this.dates.splice(index, 1)
        eventDateFormArray.removeAt(index);
      }
      this.resetDates = new Date(0);
      if (!this._close_on_selected) {
        const closeFn = this._picker.close;
        this._picker.close = () => { };
        this._picker['_popupComponentRef'].instance._calendar.monthView._createWeekCells()
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
      phone: new FormControl(null, Validators.required),
      dates: new FormArray([], Validators.required),
    });
  }

  private _findDate(date: Date): number {
    return this.dates.map((m) => +m).indexOf(+date);
  }

  // Setting the min and max available dates
  private _setMinMaxDates(): void {
    this.minDate = new Date();

    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear + 0, 5, 30);
  }

}

@NgModule({
  declarations: [ModalEventCreatePage],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class ModalEventCreateModule { }
