import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { CafeSubscription } from '../../../models/cafeSubscription.model';
import { CafeSubscriptionService } from '../../../services/cafeSubscription.service';
import { DeleteCafeMemberDialog } from '../delete-cafe-member-dialog/delete-cafe-member-dialog.component';

@Component({
  selector: 'cafe-member-manager',
  templateUrl: './cafe-member-manager.component.html',
  styleUrls: ['./cafe-member-manager.component.scss']
})
export class CafeMemberManagerDialog implements OnInit {

  public memberEditionForm: FormGroup = new FormGroup({});
  public courseForm: FormArray = new FormArray([]);
  public member: CafeSubscription;
  public memberId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public memberError: boolean;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  public newsletterSubscriptionOptions = [
    {
      value: true,
      label: 'Oui',
    },
    {
      value: false,
      label: 'Non',
    },
  ];

  constructor(
    public dialogRef: MatDialogRef<CafeMemberManagerDialog>,
    private cafeSubscriptionService: CafeSubscriptionService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.memberId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._getMemberData();
  }

  public onSubmit(): void {
    this.member.firstName = this.memberEditionForm.get('firstName').value;
    this.member.lastName = this.memberEditionForm.get('lastName').value;
    this.member.email = this.memberEditionForm.get('email').value;
    this.member.newsletterSubscription = this.memberEditionForm.get('newsletterSubscription').value;
  }

  public onCancel(): void {
    this.dialogRef.close({ member: this.member, action: this.CANCEL });
  }

  public onOpenDeleteModal(): void {
    const dialogRef = this.dialog.open(DeleteCafeMemberDialog, {
      minWidth: '500px',
      data: this.member
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.action === this.CONFIRM_DELETE) {
          this.dialogRef.close({ member: this.member, action: this.CONFIRM_DELETE });
        }
      });
  }

  public onClose():void {
    this.dialogRef.close()
  }

  ////////////
  // PRIVATE
  ////////////
  private _getMemberData(): void {
    this.cafeSubscriptionService.getCafeSubscriptionMemberData(this.memberId)
      .subscribe(
        result => {
          this.isLoading = false;
          this.showDialog = true;
          this.member = result.member;

          this.memberEditionForm.addControl('firstName', new FormControl(this.member.firstName, Validators.required));
          this.memberEditionForm.addControl('lastName', new FormControl(this.member.lastName, Validators.required));
          this.memberEditionForm.addControl('email', new FormControl(this.member.email, [Validators.required, Validators.email]));
          this.memberEditionForm.addControl('newsletterSubscription', new FormControl(this.member.newsletterSubscription));

        },
        err => {
          this.isLoading = false;
          this.memberError = true;
          console.log('fetching user err :', err)
        }
      )
  }
}

@NgModule({
  declarations: [CafeMemberManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class CafeMemberManagerModule { }