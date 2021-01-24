import { Input, NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { ModalDelete } from '../modal-delete/modal-delete.component';

import { News } from '../../../models/news.model';

@Component({
  selector: 'modal-news-manager-page',
  templateUrl: './modal-news-manager.page.html',
  styleUrls: ['./modal-news-manager.page.scss']
})
export class ModalNewsManagerPage implements OnInit {

  @Input() news: News;

  public newsEditionForm: FormGroup = new FormGroup({});
  public isExternalLink: boolean;

  public internalLinks: string[] = [
    'accueil',
    'cafe',
    'reservation-salles',
    'a-emporter',
    'galerie',
    'belaetcome',
    'residence',
    'coworking',
    'cours-stages',
    'notre-equipe',
    'contact'
  ]

  public readonly CONFIRM = 'confirm';
  public readonly CANCEL = 'cancel';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly INTERNAL_LINK = 'interne'
  public readonly EXTERNAL_LINK = 'externe';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this._initNewsEditionForm();
    this.isExternalLink = this.news.linkType === this.EXTERNAL_LINK;
  }

  // Submitting the news form
  public onSubmit(): void {
    if (this.newsEditionForm.invalid) {
      return;
    }
    console.log(this.newsEditionForm.value)

    this.news.label = this.newsEditionForm.value.label;
    this.news.link = this.newsEditionForm.value.link;
    this.news.linkType = this.newsEditionForm.value.externalLink
      ? this.EXTERNAL_LINK
      : this.INTERNAL_LINK;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'news': { ...this.news }
    })
  }

  // LINK TYPE
  public toggleInternalLink(event: CustomEvent): void {
    this.isExternalLink = !this.isExternalLink;
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    });
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        'contentData': this.news
      }
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();
    if (!data) {
      return;
    }
    if (data.dismissed === this.CONFIRM_DELETE) {
      // !!! Not sure why but the setTimeout is needed, probably asynchronous stuff...
      setTimeout(() => {
        this.modalCtrl.dismiss({
          'dismissed': this.CONFIRM_DELETE,
          'news': this.news
        })
      })
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private _initNewsEditionForm(): void {
    const externalLink = this.news.linkType === 'externe';
    this.newsEditionForm.addControl('label', new FormControl(this.news.label, Validators.required));
    this.newsEditionForm.addControl('externalLink', new FormControl(externalLink, Validators.required));
    this.newsEditionForm.addControl('link', new FormControl(this.news.link, Validators.required));
  }

}

@NgModule({
  declarations: [ModalNewsManagerPage],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class ModalEventCreateModule { }
