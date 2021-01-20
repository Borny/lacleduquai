import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { News } from '../../../models/news.model';

@Component({
  selector: 'news-create',
  templateUrl: './news-create-dialog.component.html',
  styleUrls: ['./news-create-dialog.component.scss']
})
export class NewsCreateDialog implements OnInit {

  public newsCreateForm: FormGroup = new FormGroup({});
  public news: News;

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<NewsCreateDialog>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
  }

  ngOnInit(): void {
    this._initNewsCreateForm();
  }

  // Submitting the news form
  public onSubmit(): void {
    if (this.newsCreateForm.invalid) {
      return;
    }
    this.news = this.newsCreateForm.value;
    this.dialogRef.close({ news: this.news, action: this.CONFIRM });
  }

  public onCancel(): void {
    this.dialogRef.close();
  }

  ////////////
  // PRIVATE
  ////////////
  private _initNewsCreateForm(): void {
    this.newsCreateForm.addControl('label', new FormControl(null, Validators.required));
    this.newsCreateForm.addControl('link', new FormControl(null, Validators.required));
  }

}

@NgModule({
  declarations: [NewsCreateDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class NewsCreateModule { }
