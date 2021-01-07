import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Member, Refund } from '../../../models/member.model';

@Component({
  selector: 'refund-dialog',
  templateUrl: './refund-dialog.component.html',
  styleUrls: ['./refund-dialog.component.scss']
})
export class RefundDialog implements OnInit {

  public member: Member;
  public refundForm: FormGroup = new FormGroup({});
  public refundArray: FormArray = new FormArray([], Validators.required);
  public refundTotal: number;

  public readonly REFUND_TITLE = `Ajouter un remboursements`;
  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<RefundDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Member) {
    this.member = data;
  }

  ngOnInit(): void {
    this._initRefundForm();
    this._getRefundTotal();
    this.dialogRef.disableClose = true;
  }

  public onSubmit(): void {
    const refunds = this.refundForm.get('refunds').value;
    refunds.forEach((value: Refund) => {
      this.member.refunds.push(value);
    })

    this.member.totalRefund = this._getRefundTotal();

    // Closing the dialog
    this.dialogRef.close({
      member: this.member,
      action: this.CONFIRM
    });
  }

  public onCancel(): void {
    this.dialogRef.close({
      member: this.member,
      action: this.CANCEL
    });
  }

  public onAddRefund(): void {
    const refundFormGroup = new FormGroup({
      amount: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
    this.refundArray.push(refundFormGroup);
  }

  public onRemoveLastRefund(index: number): void {
    this.refundArray.removeAt(index);
  }

  // Refund Form Array
  get refunds() {
    return this.refundForm.get('refunds') as FormArray;
  }

  ////////////
  // PRIVATE
  ////////////
  private _initRefundForm(): void {
    const refundFormGroup = new FormGroup({
      amount: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required)
    });
    this.refundArray.push(refundFormGroup);
    this.refundForm.addControl('refunds', this.refundArray);
  }

  private _getRefundTotal(): number {
    let total = 0;
    this.member.refunds.forEach(refund => {
      total += +refund.amount;
    })
    return this.refundTotal = total;
  }
}

@NgModule({
  declarations: [RefundDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule, IonicModule],
  exports: [],
  providers: [],
})
class RefundDialogModule { }