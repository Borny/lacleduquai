import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NgForm, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Member, Check } from '../../../models/member.model';
import { PaymentMethods } from '../../../models/paymentMethods.enum';

@Component({
  selector: 'payment-received-dialog',
  templateUrl: './payment-received-dialog.component.html',
  styleUrls: ['./payment-received-dialog.component.scss']
})
export class PaymentReceivedDialog implements OnInit {

  public isPaymentReceived: boolean;
  public member: Member;
  public checkArray: FormArray = new FormArray([], Validators.required);
  public checks: Check[] = [];

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD
  ];

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
  }

  public onSubmit(): void {
    this.member.checks = [];
    this.checkArray.value.forEach((value: string) => this.member.checks.push({
      amount: value,
      depositMade: false
    }));
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
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class MemberManagerModule { }