import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { HomeService } from '../../services/home.service';

import { News } from '../../models/news.model';
import { Event } from '../../models/events.model';

import { ModalNewsCreatePage } from './modal-news-create/modal-news-create.page';
import { ModalNewsManagerPage } from './modal-news-manager/modal-news-manager.page';
import { ModalEventCreatePage } from './modal-event-create/modal-event-create.page';
import { ModalEventManagerPage } from './modal-event-manager/modal-event-manager.page';

@Component({
  selector: 'organism-home-admin',
  templateUrl: './organism-home-admin.component.html',
  styleUrls: ['./organism-home-admin.component.scss'],
})
export class OrganismHomeAdminComponent implements OnInit {

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
  public readonly EVENT_UPDATED_SUCCESS = `L'event a été mis à jour`;
  public readonly EVENT_UPDATED_FAIL = `L'event n'a pas été mis à jour`;

  constructor(
    private homeService: HomeService,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this._getNews();
    this._getEvents();
  }

  // NEWS
  // Open create news 
  async onOpenCreateNewsModal() {
    const modal = await this.modalController.create({
      component: ModalNewsCreatePage,
    });
    await modal.present();

    // On dismiss
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    const createdNews = data.news;
    if (data.dismissed === this.CONFIRM) {
      // Sending the event
      this.homeService.postNews(createdNews)
        .subscribe(
          response => {
            this.isNewsLoading = false;
            this.currentNewsData.push(createdNews);
            // show snack bar
            this._presentToast(this.NEWS_CREATED_SUCCESS);
            this._getNews();
          },
          error => {
            this._presentToast(this.NEWS_CREATED_FAIL);
          });
    }
  }

  // manage news
  async onOpenManageNewsModal(newsData: Event, index: number): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalNewsManagerPage,
      componentProps: {
        'news': newsData
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    console.log(data);
    // On dismiss
    let updatedNews = data.news;
    if (data.dismissed === this.CONFIRM) {
      this.homeService.updateNews(updatedNews)
        .subscribe(
          updateData => {
            console.log('updateData:', updateData)
            // this.currentEventsData[index] = data.event;
            this.currentNewsData[index] = data.news;
            // show snack bar
            this._presentToast(this.NEWS_UPDATED_SUCCESS);
            this._getNews();
          },
          err => {
            this._presentToast(this.NEWS_UPDATED_FAIL);
          });
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      console.log('deleted');
      this.homeService.deleteNews(data.news)
        .subscribe(
          result => {
            this.originalNewsData = this.originalNewsData.filter(news => news._id !== updatedNews._id);
            this.currentNewsData = this.originalNewsData;
            // show snack bar
            this._presentToast(this.NEWS_DELETED_SUCCESS);
          },
          err => {
            // show snack bar
            this._presentToast(this.NEWS_DELETED_FAIL);
          });
    }
  }

  // EVENTS
  async onOpenCreateEventModal() {
    const modal = await this.modalController.create({
      component: ModalEventCreatePage
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
            this._presentToast(this.EVENT_CREATED_SUCCESS);
            this._getEvents();
          },
          error => {
            this._presentToast(this.EVENT_CREATED_FAIL);
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
            this._presentToast(this.EVENT_UPDATED_SUCCESS);
            this._getEvents();
          },
          err => {
            this._presentToast(this.EVENT_UPDATED_FAIL);
            console.log(err)
          });
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      console.log('deleted');
      this.homeService.deleteEvent(data.event)
        .subscribe(
          result => {
            this.originalEventsData = this.originalEventsData.filter(event => event._id !== updatedEvent._id);
            this.currentEventsData = this.originalEventsData;
            // show snack bar
            this._presentToast(this.EVENT_DELETED_SUCCESS);
          },
          err => {
            this._presentToast(this.EVENT_DELETED_FAIL);
          });
    }
  }

  ////////////
  // PRIVATE
  ////////////
  async _presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000
    });
    toast.present();
  }


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
