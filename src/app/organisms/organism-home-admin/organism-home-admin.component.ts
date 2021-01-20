import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ModalController } from '@ionic/angular';

import { HomeService } from '../../services/home.service';

import { News } from '../../models/news.model';
import { Event } from '../../models/events.model';

import { NewsManagerDialog } from './news-manager-dialog/news-manager-dialog.component';
import { NewsCreateDialog } from './news-create-dialog/news-create-dialog.component';

import { ModalEventCreatePage } from './modal-event-create/modal-event-create.page';
import { ModalEventManagerPage } from './modal-event-manager/modal-event-manager.page';

@Component({
  selector: 'organism-home-admin',
  templateUrl: './organism-home-admin.component.html',
  styleUrls: ['./organism-home-admin.component.scss'],
})
export class HomeAdminOrganismComponent implements OnInit {

  // NEWS
  public originalNewsData: News[] = [];
  public currentNewsData: News[] = [];
  public isNewsLoading = false;

  // EVENT
  public originalEventsData: Event[] = [];
  public currentEventsData: Event[] = [];
  public isEventsLoading = false;

  public readonly CREATE_BTN_TEXT = 'Valider';
  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';

  // NEWS
  public readonly NEWS_DELETED_SUCCESS = `News supprimée`;
  public readonly NEWS_CREATED_SUCCESS = 'News created';
  public readonly NEWS_CREATED_FAIL = 'News creation failed';
  public readonly NEWS_DELETED_FAIL = `Erreur suppression de la news`;
  public readonly NEWS_UPDATED_SUCCESS = `La news a été mise à jour`;
  public readonly NEWS_UPDATED_FAIL = `La news n'a pas été mise à jour`;

  // EVENT
  public readonly EVENT_DELETED_SUCCESS = `Event supprimée`;
  public readonly EVENT_DELETED_FAIL = `Erreur suppression de l'évènement`;
  public readonly EVENT_CREATED_SUCCESS = 'Event created';
  public readonly EVENT_CREATED_FAIL = 'Event creation failed';
  public readonly EVENT_UPDATED_SUCCESS = `L'event a été mise à jour`;
  public readonly EVENT_UPDATED_FAIL = `L'event n'a pas été mise à jour`;

  constructor(
    private homeService: HomeService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    this._getNews();
    this._getEvents();
  }

  // NEWS
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

  // Open create news 
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
              response => {
                this.isNewsLoading = false;
                this.currentNewsData.push(createdNews);
                // show snack bar
                this._snackBar.open(this.NEWS_CREATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              error => {
                this._snackBar.open(this.NEWS_CREATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  // EVENTS
  async onOpenCreateEventModal() {
    const modal = await this.modalController.create({
      component: ModalEventCreatePage,
      cssClass: 'my-custom-class',
      componentProps: {
        'name': 'douglas',
        'event': this.currentEventsData
      }
    });
    await modal.present();

    // On dismiss
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    const createdEvent = data.event;
    if (data.dismissed === this.CONFIRM) {
      // Sending the event
      this.homeService.postEvent(createdEvent)
        .subscribe(
          response => {
            this.isEventsLoading = false;
            this.currentEventsData.push(createdEvent);
            // show snack bar
            this._snackBar.open(this.EVENT_CREATED_SUCCESS, null, {
              duration: 3000,
            });
          },
          error => {
            this._snackBar.open(this.EVENT_CREATED_FAIL, null, {
              duration: 3000,
            });
          });
    }
  }

  // EVENTS
  async onOpenManageEventModal(eventData: Event, index: number): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalEventManagerPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'event': eventData
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    console.log(data);
    // On dismiss
    let updatedEvent = data.event;
    if (data.dismissed === this.CONFIRM) {
      this.homeService.updateEvent(updatedEvent)
        .subscribe(
          updateData => {
            console.log('updateData:', updateData)
            // this.currentEventsData[index] = data.event;
            this.currentEventsData[index] = data.event;
            // show snack bar
            this._snackBar.open(this.EVENT_UPDATED_SUCCESS, null, {
              duration: 3000,
            });
          },
          err => {
            this._snackBar.open(this.EVENT_UPDATED_FAIL, null, {
              duration: 3000,
            });
          });
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      console.log('deleted');
      this.homeService.deleteEvent(data.event)
        .subscribe(
          result => {
            this.originalEventsData = this.originalEventsData.filter(event => event._id !== updatedEvent._id);
            this.currentEventsData = this.originalEventsData;
            // show snack bar
            this._snackBar.open(this.EVENT_DELETED_SUCCESS, null, {
              duration: 3000,
            });
          },
          err => {
            this._snackBar.open(this.EVENT_DELETED_FAIL, null, {
              duration: 3000,
            });
          });
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private _getNews(): void {
    this.isNewsLoading = true;
    this.homeService.getNews().subscribe(
      response => {
        this.isNewsLoading = false;
        // console.log('news list:', response.data);
        this.originalNewsData = response.data;
        this.currentNewsData = this.originalNewsData;
      },
      error => {
        this.isNewsLoading = false;
        console.log('news error:', error)
      }
    )
  }

  private _getEvents(): void {
    this.isEventsLoading = true;
    this.homeService.getEvents().subscribe(
      response => {
        this.isEventsLoading = false;
        // console.log('events:', response);
        this.originalEventsData = response.events;
        this.currentEventsData = this.originalEventsData;
      },
      error => {
        this.isEventsLoading = false;
        console.log('events error:', error)
      }
    )
  }

}
