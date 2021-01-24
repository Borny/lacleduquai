import { NgModule, OnInit, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, FormsModule, FormArray } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { MatDatepicker, MatDatepickerInputEvent } from '@angular/material/datepicker';

import { MaterialModule } from '../../../angular-material/angular-material.module';

import { News } from '../../../models/news.model';


@Component({
  selector: 'modal-news-create-page',
  templateUrl: './modal-news-create.page.html',
  styleUrls: ['./modal-news-create.page.scss']
})
export class ModalNewsCreatePage implements OnInit {

  public newsCreateForm: FormGroup = new FormGroup({});
  public news: News;
  public isExternalLink: boolean = false;

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
  public readonly INTERNAL_LINK = 'interne'
  public readonly EXTERNAL_LINK = 'externe';

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this._initNewsCreateForm();
  }

  // Submitting the news form
  public onSubmit(): void {
    if (this.newsCreateForm.invalid) {
      return;
    }
    console.log(this.newsCreateForm.value)

    this.news = { ...this.newsCreateForm.value };
    this.news.linkType = this.newsCreateForm.value.externalLink
      ? this.EXTERNAL_LINK
      : this.INTERNAL_LINK;

    this.modalCtrl.dismiss({
      'dismissed': this.CONFIRM,
      'news': { ...this.news }
    })
  }

  // LINK TYPE
  public toggleLinkType(event: CustomEvent): void {
    this.isExternalLink = !this.isExternalLink;
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      'dismissed': this.CANCEL
    });
  }

  ////////////
  // PRIVATE
  ////////////
  private _initNewsCreateForm(): void {
    this.newsCreateForm.addControl('label', new FormControl(null, Validators.required));
    this.newsCreateForm.addControl('externalLink', new FormControl(false, Validators.required));
    this.newsCreateForm.addControl('link', new FormControl(null, Validators.required));
  }

}

@NgModule({
  declarations: [ModalNewsCreatePage],
  imports: [CommonModule, ReactiveFormsModule, IonicModule, MaterialModule, FormsModule],
  exports: [],
  providers: [],
})
class ModalEventCreateModule { }
