import { Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { Event } from '../../../models/events.model';

@Component({
  selector: 'event-create',
  templateUrl: './event-create-dialog.component.html',
  styleUrls: ['./event-create-dialog.component.scss']
})
export class EventCreateDialog implements OnInit {
  @ViewChild('picker') _picker: MatDatepicker<Date>;

  public eventCreateForm: FormGroup;
  public init = new Date();
  public event: Event;
  public model: Date[] = [];
  public minDate: Date;
  public maxDate: Date;
  public resetModel = new Date(0);

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  private _close_on_selected = false;

  constructor(
    public dialogRef: MatDialogRef<EventCreateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this._initEventCreateForm();
    this._setMinMaxDates();
  }

  // Submitting the event form
  public onSubmit(): void {
    if (this.eventCreateForm.invalid) {
      return;
    }
    this.event = this.eventCreateForm.value;
    this.dialogRef.close({ event: this.event, action: this.CONFIRM });
  }

  public onCancel(): void {
    this.dialogRef.close();
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
        this.model.push(date);
        eventDateFormArray.push(new FormControl(date));
      } else {
        this.model.splice(index, 1)
        eventDateFormArray.removeAt(index);
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
    }
  }

  // Remove a selected date
  public remove(date: Date): void {
    const index = this._findDate(date);
    this.model.splice(index, 1);

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
      schedule: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      dates: new FormArray([], Validators.required),
    });
  }

  private _findDate(date: Date): number {
    return this.model.map((m) => +m).indexOf(+date);
  }

  // Setting the min and max available dates
  private _setMinMaxDates(): void {
    this.minDate = new Date();

    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear + 0, 5, 30);
  }

}

@NgModule({
  declarations: [EventCreateDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class EventCreateModule { }
