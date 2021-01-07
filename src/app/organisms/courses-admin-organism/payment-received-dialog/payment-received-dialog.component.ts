import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Member, Check } from '../../../models/member.model';
import { PaymentMethods } from '../../../models/payment-methods.enum';

@Component({
  selector: 'payment-received-dialog',
  templateUrl: './payment-received-dialog.component.html',
  styleUrls: ['./payment-received-dialog.component.scss']
})
export class PaymentReceivedDialog implements OnInit {

  public isPaymentReceived: boolean;
  public member: Member;
  public memberPaymentForm: FormGroup = new FormGroup({});
  public checkArray: FormArray = new FormArray([], Validators.required);
  public checks: Check[] = [];

  public paymentMethods = PaymentMethods;

  public payment_received_title = `Vous confirmez avoir reçu le paiement : `
  public payment_not_received_title = `Attention, vous indiquez que vous n'avez pas reçu de paiement : `

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<PaymentReceivedDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Member) {
    this.member = data;
    this.isPaymentReceived = this.member.paymentReceived;
  }

  ngOnInit(): void {
    this.payment_received_title += this.member.paymentMethod;
    this.payment_not_received_title += this.member.paymentMethod;
    this.dialogRef.disableClose = true;

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
      this.member.paymentAmount = checkSum.toString();
    } else {
      this.member.paymentAmount = this.memberPaymentForm.get('amount').value;
    }
  }

  public onCancel(): void {
    this.dialogRef.close({
      isPaymentReceived: this.isPaymentReceived,
      member: this.member,
      action: this.CANCEL
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
  declarations: [PaymentReceivedDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule, IonicModule],
  exports: [],
  providers: [],
})
class MemberManagerModule { }