import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Check, Member } from '../../../models/member.model';
import { SubscriptionService } from '../../../services/subscription.service';

@Component({
  selector: 'member-manager',
  templateUrl: './member-manager.component.html',
  styleUrls: ['./member-manager.component.scss']
})
export class MemberManagerDialog implements OnInit {

  public checkForm: FormArray = new FormArray([]);
  public member: Member;
  public checkList: Check[] = [];
  public memberId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public memberError: boolean;

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<MemberManagerDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private subscriptionService: SubscriptionService,

  ) {
    this.dialogRef.disableClose = true;
    this.memberId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this.subscriptionService.getMemberData(this.memberId)
      .subscribe(
        result => {
          this.showDialog = true;
          this.isLoading = false;
          this.member = result.member;
          this.checkList = this.member.checks;
          this.member.checks.forEach((check, i) => {
            let updateDepositDate: undefined | string | null | Date;
            if (this.member.checks[i].depositDate === null || this.member.checks[i].depositDate === undefined) {
              updateDepositDate = null;
            } else if (typeof (this.member.checks[i].depositDate) === 'string') {
              updateDepositDate = this.member.checks[i].depositDate;
            } else {
              updateDepositDate = this.member.checks[i].depositDate.toLocaleDateString();
            }

            const checkFormGroup: FormGroup = new FormGroup({
              depositMade: new FormControl(this.member.checks[i].depositMade),
              depositDate: new FormControl(updateDepositDate, Validators.required)
            });
            this.checkForm.push(checkFormGroup);
          });
        },
        err => {
          this.isLoading = false;
          this.memberError = true;
          console.log('fetching user err :', err)
        }
      )
  }

  public onSubmit() {
    this.checkForm.value.forEach((value: Check, index: number) => {
      this.member.checks[index].depositMade = value.depositMade;
      this.member.checks[index].depositDate = value.depositMade ? value.depositDate : null;
    })
  }

  public onCancel(): void {
    this.dialogRef.close({ member: this.member, action: this.CANCEL });
  }

  public onDepositMade(checkIndex: number, depositMade: boolean): void {
    this.checkList[checkIndex].depositMade = depositMade;
    if (!depositMade) {
      this.checkList[checkIndex].depositDate = null;
    }
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}

@NgModule({
  declarations: [MemberManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class MemberManagerModule { }