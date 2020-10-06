import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { Member } from '../../../models/member.model';

@Component({
  selector: 'delete-member',
  templateUrl: './delete-member-dialog.component.html'
})
export class DeleteMemberDialog {
  public member: Member;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<DeleteMemberDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Member,
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
  declarations: [DeleteMemberDialog],
  imports: [CommonModule, MaterialModule],
  exports: [],
  providers: [],
})
class DeleteMemberModule { }