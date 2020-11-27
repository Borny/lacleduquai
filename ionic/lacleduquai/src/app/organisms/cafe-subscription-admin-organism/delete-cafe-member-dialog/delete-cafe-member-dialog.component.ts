import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { CafeSubscription } from '../../../models/cafe-subscription.model';

@Component({
  selector: 'delete-member',
  templateUrl: './delete-cafe-member-dialog.component.html'
})
export class DeleteCafeMemberDialog {
  public member: CafeSubscription;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<DeleteCafeMemberDialog>,
    @Inject(MAT_DIALOG_DATA) public data: CafeSubscription,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.member = data;
  }

  public onCancel(): void {
    this.dialogRef.close({ action: this.CANCEL });
  }
}

@NgModule({
  declarations: [DeleteCafeMemberDialog],
  imports: [CommonModule, MaterialModule],
  exports: [],
  providers: [],
})
class DeleteMemberModule { }
