import { Input, NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { ModalDelete } from '../modal-delete/modal-delete.component';

import { Event } from '../../../models/events.model';

@Component({
  selector: 'modal-event-manager-page',
  templateUrl: './modal-event-manager.page.html',
  styleUrls: ['./modal-event-manager.page.scss']
})
export class ModalEventManagerPage implements OnInit {

  @ViewChild('picker') _picker: MatDatepicker<Date>;

  //TODO:
  @Input() event: Event;

  public eventEditionForm: FormGroup = new FormGroup({});
  // public event: Event;
  public init = new Date();
  public eventId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public eventError: boolean;
  public dates: Date[] = [];
  public minDate: Date;
  public maxDate: Date;
  public resetDates = new Date(0);

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  private _close_on_selected = false;

  constructor(
    // public dialogRef: MatDialogRef<EventManagerDialog>,
    // private homeService: HomeService,
    // @Inject(MAT_DIALOG_DATA) public data: string,
    // public dialog: MatDialog,
    public modalCtrl: ModalController
  ) {
    // this.dialogRef.disableClose = true;
    // this.eventId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    // this._getEventData();
    // TODO:
    // console.log('event modal:', this.event)
    this._initEventEditForm();
    this._setMinMaxDates();


  }

  public onSubmit(): void {
    if (this.eventEditionForm.invalid) {
      return;
    }
    this.event.name = this.eventEditionForm.get('name').value;
    this.event.prof = this.eventEditionForm.get('prof').value;
    this.event.schedule = this.eventEditionForm.get('timeStart').value;
    this.event.schedule = this.eventEditionForm.get('timeEnd').value;
    this.event.price = this.eventEditionForm.get('price').value;
    this.event.phone = this.eventEditionForm.get('phone').value;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'event': { ...this.event }
    })
  }

  // TIME PICKER
  public onTimeFromChange(event): void {
    this.eventEditionForm.get('timeStart').setValue(event.detail.value);
  }

  public onTimeToChange(event): void {
    this.eventEditionForm.get('timeEnd').setValue(event.detail.value);
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    })
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        'contentData': this.event
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    if (data.dismissed === this.CONFIRM_DELETE) {
      // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
      setTimeout(() => {
        this.modalCtrl.dismiss({
          'dismissed': this.CONFIRM_DELETE,
          'event': this.event
        })
      })
    }
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
    // console.log(this.eventEditionForm.get('dates'));

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

    const eventDateFormArray = this.eventEditionForm.get('dates') as FormArray;
    eventDateFormArray.removeAt(index);
  }

  ////////////
  // PRIVATE
  ////////////
  // private _getEventData(): void {
  //   this.homeService.getSingleEvent(this.eventId)
  //     .subscribe(
  //       result => {
  //         this.isLoading = false;
  //         this.showDialog = true;
  //         this.event = result.data;
  //         // this.eventName = this.event.name;
  //         // this.eventProf = this.event.prof;
  //         // this.eventSchedule = this.event.schedule;
  //         // this.eventPrice = this.event.price;
  //         // this.eventPhone = this.event.phone;
  //         this._initEventEditForm();
  //       },
  //       err => {
  //         this.isLoading = false;
  //         this.eventError = true;
  //       }
  //     )
  // }

  private _initEventEditForm(): void {
    // console.log('event:', this.event)
    this.eventEditionForm.addControl('name', new FormControl(this.event.name, Validators.required));
    this.eventEditionForm.addControl('prof', new FormControl(this.event.prof, Validators.required));
    this.eventEditionForm.addControl('timeStart', new FormControl(this.event.timeStart, Validators.required));
    this.eventEditionForm.addControl('timeEnd', new FormControl(this.event.timeEnd, Validators.required));
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
  declarations: [ModalEventManagerPage],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class ModalEventCreateModule { }
