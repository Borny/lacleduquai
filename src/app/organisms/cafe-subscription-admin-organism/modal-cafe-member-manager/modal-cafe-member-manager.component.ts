import { NgModule, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule,
  FormArray,
} from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

import { MaterialModule } from '../../../angular-material/angular-material.module';
import { AtomAsteriskModule } from '../../../atoms/atom-asterisk/atom-asterisk.module';

import { ModalDelete } from '../modal-delete/modal-delete.component';

import { CafeSubscription } from '../../../models/cafe-subscription.model';
import { CafeSubscriptionService } from '../../../services/cafe-subscription.service';

@Component({
  selector: 'cafe-member-manager',
  templateUrl: './modal-cafe-member-manager.component.html',
  styleUrls: ['./modal-cafe-member-manager.component.scss'],
})
export class ModalCafeMemberManagerDialog implements OnInit {
  public memberEditionForm: FormGroup = new FormGroup({});
  public courseForm: FormArray = new FormArray([]);
  public member: CafeSubscription;
  public isLoading: boolean;
  public memberError: boolean;
  public newsletterSubscription: boolean;

  public readonly CONFIRM = 'confirm';
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = 'cancel';

  public newsletterSubscriptionOptions = [
    {
      value: true,
      label: 'Oui',
    },
    {
      value: false,
      label: 'Non',
    },
  ];

  constructor(
    public modalCtrl: ModalController,
    private cafeSubscriptionService: CafeSubscriptionService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this._getMemberData();
  }

  public onSubmit(): void {
    this.member.firstName = this.memberEditionForm.get('firstName').value;
    this.member.lastName = this.memberEditionForm.get('lastName').value;
    this.member.email = this.memberEditionForm.get('email').value;
    this.member.newsletterSubscription = this.memberEditionForm.get(
      'newsletterSubscription'
    ).value;

    this.modalCtrl.dismiss({
      dismissed: this.CONFIRM,
      member: { ...this.member },
    });
  }

  public onCancel(): void {
    this.modalCtrl.dismiss({
      dismissed: this.CANCEL,
    });
  }

  public toggleNewsletterSubscription(event: CustomEvent): void {
    this.newsletterSubscription = !this.newsletterSubscription;
  }

  async onOpenDeleteModal(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: ModalDelete,
      cssClass: 'modal-delete',
      componentProps: {
        contentData: this.member,
      },
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
          dismissed: this.CONFIRM_DELETE,
          member: this.member,
        });
      });
    }
  }

  ////////////
  // PRIVATE
  ////////////
  private _getMemberData(): void {
    this.cafeSubscriptionService
      .getCafeSubscriptionMemberData(this.member._id)
      .subscribe(
        (result) => {
          this.member = result.member;
          const formatedSubscriptionDate = new Date(
            this.member.subscriptionDate
          ).toLocaleDateString();
          this.newsletterSubscription = this.member.newsletterSubscription;

          this.memberEditionForm.addControl(
            'firstName',
            new FormControl(this.member.firstName, Validators.required)
          );
          this.memberEditionForm.addControl(
            'lastName',
            new FormControl(this.member.lastName, Validators.required)
          );
          this.memberEditionForm.addControl(
            'email',
            new FormControl(this.member.email, [
              Validators.required,
              Validators.email,
            ])
          );
          this.memberEditionForm.addControl(
            'subscriptionDate',
            new FormControl(
              { value: formatedSubscriptionDate, disabled: true },
              Validators.required
            )
          );
          this.memberEditionForm.addControl(
            'newsletterSubscription',
            new FormControl(this.member.newsletterSubscription)
          );
          this.isLoading = false;
        },
        (err) => {
          this.isLoading = false;
          this.memberError = true;
          console.log('fetching user err :', err);
        }
      );
  }
}

@NgModule({
  declarations: [ModalCafeMemberManagerDialog],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    FormsModule,
    AtomAsteriskModule,
  ],
})
export class CafeMemberManagerModule {}
