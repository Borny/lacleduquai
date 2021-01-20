import { Inject, NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';
// import { DeleteDialog } from '../modal-delete/modal-delete.component';
import { IonicModule } from '@ionic/angular';
import { HomeService } from '../../../services/home.service';
import { Event } from '../../../models/events.model';

@Component({
  selector: 'event-manager',
  templateUrl: './event-manager-dialog.component.html',
  styleUrls: ['./event-manager-dialog.component.scss']
})
export class EventManagerDialog implements OnInit {
  @ViewChild('picker') _picker: MatDatepicker<Date>;

  public eventEditionForm: FormGroup = new FormGroup({});
  public event: Event;
  public init = new Date();
  public eventId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public eventError: boolean;
  public dates: Date[] = [];
  public minDate: Date;
  public maxDate: Date;
  public resetModel = new Date(0);

  // public eventName: string;
  // public eventProf: string;
  // public eventSchedule: string;
  // public eventPrice: number;
  // public eventPhone: number;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  private _close_on_selected = false;


  constructor(
    public dialogRef: MatDialogRef<EventManagerDialog>,
    private homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.eventId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._getEventData();
    this._setMinMaxDates();
  }

  public onSubmit(): void {
    if (this.eventEditionForm.invalid) {
      return;
    }
    this.event.name = this.eventEditionForm.get('name').value;
    this.event.prof = this.eventEditionForm.get('prof').value;
    this.event.schedule = this.eventEditionForm.get('schedule').value;
    this.event.price = this.eventEditionForm.get('price').value;
    this.event.phone = this.eventEditionForm.get('phone').value;
    // this.event.prof = this.eventEditionForm.get('link').value;

    this.dialogRef.close({ event: this.event, action: this.CONFIRM });

  }

  public onCancel(): void {
    this.dialogRef.close({ event: this.event, action: this.CANCEL });
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onOpenDeleteModal(): void {
    // const dialogRef = this.dialog.open(DeleteDialog, {
    //   minWidth: '500px',
    //   data: this.event
    // });
    // dialogRef.afterClosed()
    //   .subscribe(result => {
    //     if (result.action === this.CONFIRM_DELETE) {
    //       this.dialogRef.close({ event: this.event, action: this.CONFIRM_DELETE });
    //     }
    //   });
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
    console.log(this.eventEditionForm.get('dates'));

    if (event.value) {
      const date = event.value;
      const index = this._findDate(date);
      const eventDateFormArray = this.eventEditionForm.get('dates') as FormArray;
      if (index === -1) {
        this.dates.push(date);
        eventDateFormArray.push(new FormControl(date));
      } else {
        this.dates.splice(index, 1)
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
    this.dates.splice(index, 1);

    const eventDateFormArray = this.eventEditionForm.get('dates') as FormArray;
    eventDateFormArray.removeAt(index);
  }

  ////////////
  // PRIVATE
  ////////////
  private _getEventData(): void {
    this.homeService.getSingleEvent(this.eventId)
      .subscribe(
        result => {
          this.isLoading = false;
          this.showDialog = true;
          this.event = result.data;
          // this.eventName = this.event.name;
          // this.eventProf = this.event.prof;
          // this.eventSchedule = this.event.schedule;
          // this.eventPrice = this.event.price;
          // this.eventPhone = this.event.phone;
          this._initEventEditForm();
        },
        err => {
          this.isLoading = false;
          this.eventError = true;
        }
      )
  }

  private _initEventEditForm(): void {
    this.eventEditionForm.addControl('name', new FormControl(this.event.name, Validators.required));
    this.eventEditionForm.addControl('prof', new FormControl(this.event.prof, Validators.required));
    this.eventEditionForm.addControl('schedule', new FormControl(this.event.schedule, Validators.required));
    this.eventEditionForm.addControl('price', new FormControl(this.event.price, Validators.required));
    this.eventEditionForm.addControl('phone', new FormControl(this.event.phone, Validators.required));
    this.eventEditionForm.addControl('dates', new FormArray([], Validators.required));
    this._addControl('dates', this.event.dates, true);
    this.dates = this.event.dates;
  }

  private _addControl(controlsName: string, controls: any[], required?: boolean): void {
    controls.forEach(control => {
      (<FormArray>this.eventEditionForm.controls[controlsName]).push(new FormControl(control));
    });
  }

  private _findDate(date: Date): number {
    return this.event.dates.map(d => +(new Date(d))).indexOf(+(new Date(date)));
  }

  // Setting the min and max available dates
  private _setMinMaxDates(): void {
    this.minDate = new Date();

    const currentYear = new Date().getFullYear();
    this.maxDate = new Date(currentYear + 0, 5, 30);
  }

}

@NgModule({
  declarations: [EventManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class EventManagerModule { }