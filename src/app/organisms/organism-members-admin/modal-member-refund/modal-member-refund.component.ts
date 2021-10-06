import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Member, Refund } from '../../../models/member.model';

@Component({
  selector: 'refund-dialog',
  templateUrl: './modal-member-refund.component.html',
  styleUrls: ['./modal-member-refund.component.scss'],
})
export class ModalMemberRefundPage implements OnInit {
  public member: Member;
  public refundForm: FormGroup = new FormGroup({});
  public refundArray: FormArray = new FormArray([], Validators.required);
  public refundTotal: number;

  public readonly REFUND_TITLE = `Ajouter un remboursements`;
  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(public modalCtrl: ModalController) {}

  ngOnInit(): void {
    this._initRefundForm();
    this._getRefundTotal();
  }

  public onSubmit(): void {
    const refunds = this.refundForm.get('refunds').value;
    refunds.forEach((value: Refund) => {
      this.member.refunds.push(value);
    });

    this.member.totalRefund = this._getRefundTotal();

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      member: { ...this.member },
    });
  }

  public onAddRefund(): void {
    const refundFormGroup = new FormGroup({
      amount: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
    });
    this.refundArray.push(refundFormGroup);
  }

  public onRemoveLastRefund(index: number): void {
    this.refundArray.removeAt(index);
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
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
      date: new FormControl(null, Validators.required),
    });
    this.refundArray.push(refundFormGroup);
    this.refundForm.addControl('refunds', this.refundArray);
  }

  private _getRefundTotal(): number {
    let total = 0;
    this.member.refunds.forEach((refund) => {
      total += +refund.amount;
    });
    return (this.refundTotal = total);
  }
}

@NgModule({
  declarations: [ModalMemberRefundPage],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    IonicModule,
    AtomAsteriskModule,
  ],
  exports: [],
  providers: [],
})
class ModalMemberRefundModule {}
