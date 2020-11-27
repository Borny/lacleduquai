import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ChaiTakeAway } from '../../../models/chai-take-away.model';

@Component({
  selector: 'delete-order-dialog',
  templateUrl: './delete-order-dialog.component.html'
})
export class DeleteOrderDialog {
  public order: ChaiTakeAway;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<DeleteOrderDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ChaiTakeAway,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.order = data;
  }

  public onCancel(): void {
    this.dialogRef.close({ action: this.CANCEL });
  }
}

@NgModule({
  declarations: [DeleteOrderDialog],
  imports: [CommonModule, MaterialModule],
  exports: [],
  providers: [],
})
class DeleteOrderModule { }