import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, NgForm, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'payment-received-dialog',
  templateUrl: './payment-received-dialog.component.html'
})
export class PaymentReceivedDialog {

  // public editMemberForm: FormGroup = new FormGroup({});
  public isPaymentReceived: boolean;

  // memberInfo: Member;

  constructor(
    public dialogRef: MatDialogRef<PaymentReceivedDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {
    // this.memberInfo = data;
    this.isPaymentReceived = data;
    this.dialogRef.disableClose = true;
  }

  onCancel(): void {
    this.dialogRef.close(this.isPaymentReceived);
    // this.dialogRef.close();
  }
}

@NgModule({
  declarations: [PaymentReceivedDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class MemberManagerModule { }