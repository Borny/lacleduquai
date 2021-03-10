import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';
import { Member, Check } from '../../../models/member.model';
import { PaymentMethods } from '../../../models/payment-methods.enum';

@Component({
  selector: 'payment-received-dialog',
  templateUrl: './modal-course-payment-received.component.html',
  styleUrls: ['./modal-course-payment-received.component.scss']
})
export class ModalCoursePaymentReceivedPage implements OnInit {

  public isPaymentReceived: boolean;
  public member: Member;
  public memberPaymentForm: FormGroup = new FormGroup({});
  public checkArray: FormArray = new FormArray([], Validators.required);
  public checks: Check[] = [];

  public paymentMethods = PaymentMethods;

  public payment_received_title = `Vous confirmez avoir reçu le paiement : `
  public payment_not_received_title = `Attention, annuler le paiement ? `

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(public modalCtrl: ModalController) {
  }

  ngOnInit(): void {
    console.log(this.member);
    this.isPaymentReceived = this.member.paymentReceived;

    this.payment_received_title += this.member.paymentMethod;
    this.payment_not_received_title += this.member.paymentMethod;

    this.member.paymentMethod === this.paymentMethods.SECOND
      ? this.memberPaymentForm.addControl('checks', this.checkArray)
      : this.memberPaymentForm.addControl('amount', new FormControl('', Validators.required));
  }

  public onSubmit(): void {
    if (this.member.paymentMethod === this.paymentMethods.SECOND) {
      this.member.checks = [];
      let checkSum: number = 0;
      this.checkArray.value.forEach((value: string) => {
        this.member.checks.push({
          amount: value,
          depositMade: false
        })
        checkSum += +value;
      });
      this.member.paymentAmount = checkSum;
    } else {
      this.member.paymentAmount = this.memberPaymentForm.get('amount').value;
    }

    this.member.paymentReceived = !this.member.paymentReceived;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'member': { ...this.member }
    })
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    });
  }

  public onAddCheck(): void {
    this.checkArray.push(new FormControl('', Validators.required));
  }

  public onRemoveLastCheck(index: number): void {
    this.checkArray.removeAt(index);
  }
}

@NgModule({
  declarations: [ModalCoursePaymentReceivedPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    IonicModule,
    AtomAsteriskModule
  ],
  exports: [],
  providers: [],
})
class ModalMemberManagerModule { }