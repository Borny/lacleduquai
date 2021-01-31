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

  @Input() event: Event;
  @ViewChild('picker') _picker: MatDatepicker<Date>;

  public eventEditionForm: FormGroup = new FormGroup({});
  public init = new Date();
  public eventId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public eventError: boolean;
  public dates: Date[] = [];
  public minDate: Date;
  public maxDate: Date;
  public resetDates = new Date(0);
  public isExternalLink: boolean;

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
    'contact'
  ]

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';
  public readonly INTERNAL_LINK = 'interne'
  public readonly EXTERNAL_LINK = 'externe';

  private _close_on_selected = false;

  constructor(
    public modalCtrl: ModalController
  ) { }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._initEventEditForm();
    this._setMinMaxDates();

    this.isExternalLink = this.event.linkType === this.EXTERNAL_LINK;
  }

  public onSubmit(): void {
    if (this.eventEditionForm.invalid) {
      return;
    }
    this.event.name = this.eventEditionForm.get('name').value;
    this.event.prof = this.eventEditionForm.get('prof').value;
    this.event.timeStart = this.eventEditionForm.get('timeStart').value;
    this.event.timeStart = this.eventEditionForm.get('timeEnd').value;
    this.event.price = this.eventEditionForm.get('price').value;
    this.event.phone = this.eventEditionForm.get('phone').value;
    this.event.description = this.eventEditionForm.get('description').value;
    this.event.link = this.eventEditionForm.get('link').value;
    this.event.linkType = this.eventEditionForm.value.externalLink
      ? this.EXTERNAL_LINK
      : this.INTERNAL_LINK;

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

  // LINK TYPE
  public toggleLinkType(event: CustomEvent): void {
    this.isExternalLink = !this.isExternalLink;
  }

  ////////////
  // PRIVATE
  ////////////
  private _initEventEditForm(): void {
    const externalLink = this.event.linkType === 'externe';
    this.eventEditionForm.addControl('name', new FormControl(this.event.name, Validators.required));
    this.eventEditionForm.addControl('prof', new FormControl(this.event.prof, Validators.required));
    this.eventEditionForm.addControl('timeStart', new FormControl(this.event.timeStart, Validators.required));
    this.eventEditionForm.addControl('timeEnd', new FormControl(this.event.timeEnd, Validators.required));
    this.eventEditionForm.addControl('price', new FormControl(this.event.price, Validators.compose([Validators.min(0), Validators.required])));
    this.eventEditionForm.addControl('phone', new FormControl(this.event.phone, Validators.compose([Validators.required, Validators.minLength(10)])));
    this.eventEditionForm.addControl('description', new FormControl(this.event.description, Validators.required));
    this.eventEditionForm.addControl('externalLink', new FormControl(externalLink, Validators.required));
    this.eventEditionForm.addControl('link', new FormControl(this.event.link, Validators.required));
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
