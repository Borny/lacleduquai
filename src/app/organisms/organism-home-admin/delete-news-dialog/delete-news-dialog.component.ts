import { Component, Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialModule } from '../../../angular-material/angular-material.module';
import { News } from '../../../models/news.model';

@Component({
  selector: 'delete-news',
  templateUrl: './delete-news-dialog.component.html'
})
export class DeleteNewsDialog {
  public news: News;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<DeleteNewsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: News,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.news = data;
  }

  public onCancel(): void {
    this.dialogRef.close({ action: this.CANCEL });
  }
}

@NgModule({
  declarations: [DeleteNewsDialog],
  imports: [CommonModule, MaterialModule, IonicModule],
  exports: [],
  providers: [],
})
class DeleteNewsModule { }
