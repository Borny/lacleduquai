import { Inject, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { ChaiTakeAway, TakeAwayState } from '../../../models/chai-take-away.model';
import { TakeAwayService } from '../../../services/take-away.service';
import { DeleteNewsDialog } from '../delete-news-dialog/delete-news-dialog.component';
import { IonicModule } from '@ionic/angular';
import { HomeService } from '../../../services/home.service';
import { News } from '../../../models/news.model';

@Component({
  selector: 'news-manager',
  templateUrl: './news-manager-dialog.component.html',
  styleUrls: ['./news-manager-dialog.component.scss']
})
export class NewsManagerDialog implements OnInit {

  public newsEditionForm: FormGroup = new FormGroup({});
  public news: News;
  public newsId: string;
  public isLoading: boolean;
  public showDialog: boolean;
  public newsError: boolean;
  public newsLabel: string;
  public newsLink: string;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  constructor(
    public dialogRef: MatDialogRef<NewsManagerDialog>,
    private homeService: HomeService,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public dialog: MatDialog,
  ) {
    this.dialogRef.disableClose = true;
    this.newsId = data;
  }

  ngOnInit(): void {
    this.showDialog = false;
    this.isLoading = true;
    this._getNewsData();
  }

  public onSubmit(): void {
    this.news.label = this.newsEditionForm.get('label').value;
    this.news.link = this.newsEditionForm.get('link').value;
  }

  public onCancel(): void {
    this.dialogRef.close({ news: this.news, action: this.CANCEL });
  }

  public onClose(): void {
    this.dialogRef.close();
  }

  public onOpenDeleteModal(): void {
    const dialogRef = this.dialog.open(DeleteNewsDialog, {
      minWidth: '500px',
      data: this.news
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (result.action === this.CONFIRM_DELETE) {
          this.dialogRef.close({ news: this.news, action: this.CONFIRM_DELETE });
        }
      });
  }

  ////////////
  // PRIVATE
  ////////////
  private _getNewsData(): void {
    this.homeService.getSingleNews(this.newsId)
      .subscribe(
        result => {
          this.isLoading = false;
          this.showDialog = true;
          this.news = result.data;
          this.newsLabel = this.news.label;
          this.newsLink = this.news.link;
          this._initNewsEditForm();
        },
        err => {
          this.isLoading = false;
          this.newsError = true;
        }
      )
  }

  private _initNewsEditForm(): void {
    this.newsEditionForm.addControl('label', new FormControl(this.news.label, Validators.required));
    this.newsEditionForm.addControl('link', new FormControl(this.news.link, Validators.required));
  }

}

@NgModule({
  declarations: [NewsManagerDialog],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class NewsManagerModule { }