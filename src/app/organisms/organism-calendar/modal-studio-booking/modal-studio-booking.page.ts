import { Input, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import * as moment from 'moment';

import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ModalActionsEnum } from 'src/app/models/modal-actions.enum';
import { SharedModule } from 'src/app/shared/shared.module';

// import { ModalDelete } from '../modal-delete/modal-delete.component';

@Component({
  selector: 'modal-studio-booking-page',
  templateUrl: './modal-studio-booking.page.html',
  styleUrls: ['./modal-studio-booking.page.scss'],
})
export class ModalStudioBooking implements OnInit {
  // @Input() news: News;
  @Input() time: Date;
  @Input() dialogTitle = 'Réserver un créneau';

  public bookingForm: FormGroup = new FormGroup({});
  // public booking: StudioBooking;
  public booking: any;

  public modalActionsEnum = ModalActionsEnum;
  public modalActionsValues = Object.values(ModalActionsEnum);

  constructor(private fb: FormBuilder, public modalCtrl: ModalController) {}

  ngOnInit() {
    this._initBookingForm();
    console.log(this.time);
  }

  // Submitting the news form
  public onSubmit(): void {
    if (this.bookingForm.invalid) {
      return;
    }
    console.log(this.bookingForm.value);
    this.booking = this.bookingForm.value;

    this.modalCtrl.dismiss({
      dismissed: this.modalActionsEnum.CONFIRM,
      booking: { ...this.booking },
    });
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.modalActionsEnum.CANCEL,
    });
  }

  // async onOpenDeleteModal(): Promise<void> {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalDelete,
  //     cssClass: 'modal-delete',
  //     componentProps: {
  //       contentData: this.news,
  //     },
  //   });
  //   await modal.present();
  //   const { data } = await modal.onDidDismiss();
  //   if (!data) {
  //     return;
  //   }
  //   if (data.dismissed === this.CONFIRM_DELETE) {
  //     // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
  //     setTimeout(() => {
  //       this.modalCtrl.dismiss({
  //         dismissed: this.CONFIRM_DELETE,
  //         news: this.news,
  //       });
  //     });
  //   }
  // }

  public onTimeEndChange(event): void {
    this.bookingForm.get('endTime').setValue(event.detail.value);
  }

  ////////////
  // PRIVATE
  ////////////
  private _initBookingForm(): void {
    this.bookingForm = this.fb.group({
      lastName: this.fb.control(null, Validators.required),
      firstName: this.fb.control(null, Validators.required),
      phone: this.fb.control(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(10),
      ]),
      startTime: new FormControl(this.time.getTime(), Validators.required),
      // endTime: new FormControl(this.time.getTime(), Validators.required),
      endTime: new FormControl(
        moment().add(5, 'h').toDate(),
        Validators.required
      ),
      activity: this.fb.control(null, [Validators.required]),
      paidActivity: this.fb.control(false, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      date: this.fb.control(this.time, [Validators.required]),
      // extraInfo: this.fb.control(null, Validators.required),
    });
  }
}

@NgModule({
  declarations: [ModalStudioBooking],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
})
export class ModalStudioBookingModule {}
