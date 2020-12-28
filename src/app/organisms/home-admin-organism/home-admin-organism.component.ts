import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { HomeService } from '../../services/home.service';

import { News } from '../../models/news.model';
import { DailyEvents } from '../../models/daily-events.model';
import { NewsManagerDialog } from './news-manager-dialog/news-manager-dialog.component';
import { NewsCreateDialog } from './news-create-dialog/news-create-dialog.component';

@Component({
  selector: 'home-admin-organism',
  templateUrl: './home-admin-organism.component.html',
  styleUrls: ['./home-admin-organism.component.scss'],
})
export class HomeAdminOrganismComponent implements OnInit {

  public originalNewsData: News[] = [];
  public currentNewsData: News[] = [];
  public isLoading = false;
  public newsForm: FormGroup = new FormGroup({});

  public dailyEvents: DailyEvents[] = [];

  public readonly CREATE_BTN_TEXT = 'Valider';
  public readonly NEWS_CREATED_SUCCESS = 'News created';
  public readonly NEWS_CREATED_FAIL = 'News creation failed';
  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly NEWS_DELETED_SUCCESS = `News supprimée`;
  public readonly NEWS_DELETED_FAIL = `Erreur suppression de la news`;
  public readonly NEWS_UPDATED_SUCCESS = `La news a été mise à jour`;
  public readonly NEWS_UPDATED_FAIL = `La news n'a pas été mise à jour`;

  constructor(
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getNews();
    this._getDaysEvents();
    this._initNewsForm();
  }

  // News Manager dialog
  public onOpenNewsManager(newsData: News, index: number): void {
    const id = newsData._id;
    const dialogRef = this.dialog.open(NewsManagerDialog, {
      minWidth: '500px',
      data: id
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) {
          return;
        }
        let updatedNews = result.news;
        if (result.action === this.CONFIRM) {
          this.homeService.updateNews(updatedNews)
            .subscribe(
              updateResult => {
                console.log('updateResult:', updateResult)
                this.currentNewsData[index] = result.news;
                // show snack bar
                this._snackBar.open(this.NEWS_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.NEWS_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        } else if (result.action === this.CONFIRM_DELETE) {
          console.log('deleted');
          this.homeService.deleteNews(result.news)
            .subscribe(
              result => {
                this.originalNewsData = this.originalNewsData.filter(news => news._id !== updatedNews._id);
                this.currentNewsData = this.originalNewsData;
                // show snack bar
                this._snackBar.open(this.NEWS_DELETED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.NEWS_DELETED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  // Create
  public onOpenCreateNewsDialog(): void {
    const dialogRef = this.dialog.open(NewsCreateDialog, {
      minWidth: '500px'
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) {
          return;
        }
        console.log(result.news)
        const createdNews = result.news;
        if (result.action === this.CONFIRM) {
          // Sending the news
          this.homeService.postNews(createdNews)
            .subscribe(
              (response) => {
                this.isLoading = false;
                this.currentNewsData.push(createdNews);
                // show snack bar
                this._snackBar.open(this.NEWS_CREATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              (error) => {
                this._snackBar.open(this.NEWS_CREATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  ////////////
  // PRIVATE
  ////////////

  // Builds the news form
  private _initNewsForm(): void {
    this.newsForm = new FormGroup({
      label: new FormControl(null, Validators.required),
      link: new FormControl(null, Validators.required),
    });
  }

  private _getNews(): void {
    this.homeService.getNews().subscribe(
      response => {
        console.log('news list:', response.data);
        this.originalNewsData = response.data;
        this.currentNewsData = this.originalNewsData;
      },
      error => console.log('news error:', error)
    )
  }

  private _getDaysEvents(): void {
    this.homeService.getDaysEvents().subscribe(
      response => {
        this.dailyEvents = response.data;
      },
      error => console.log('news error:', error)
    )
  }

}
