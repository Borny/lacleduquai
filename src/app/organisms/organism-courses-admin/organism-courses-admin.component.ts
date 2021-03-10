import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

import { Member } from '../../models/member.model';
import { PaymentMethods } from '../../models/payment-methods.enum';
import { SubscriptionService } from '../../services/subscription.service';
import { ModalCourseManagerPage } from './modal-course-manager/modal-course-manager.component';
import { ModalCoursePaymentReceivedPage } from './modal-course-payment-received/modal-course-payment-received.component';
import { ModalCourseRefundPage } from './modal-course-refund/modal-course-refund.component';

@Component({
  selector: 'organism-courses-admin',
  templateUrl: './organism-courses-admin.component.html',
  styleUrls: ['./organism-courses-admin.component.scss'],
})
export class OrganismCoursesAdminComponent implements OnInit {

  public originalMembersData: Member[] = [];
  public currentMembersData: Member[] = [];
  public isLoading = false;
  public memberError = false;
  public matSelect: any;
  public emailList: string;

  public readonly CONFIRM = `confirm`;
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = `cancel`;
  public readonly PAYMENT_UPDATED_SUCCESS = `Paiement mis à jour`;
  public readonly REFUND_UPDATED_SUCCESS = `Remboursement mis à jour`;
  public readonly MEMBER_UPDATED_SUCCESS = `Infos adhérent mises à jour`;
  public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;
  public readonly MEMBER_DELETED_SUCCESS = `Adhérent supprimer`;
  public readonly MEMBER_DELETED_FAIL = `Erreur suppression adhérent`;
  public readonly LOADING_TEXT = 'Chargement des données...';
  public readonly EMAIL_LIST_COPIED = 'Emails copiés';

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD
  ];

  public tableHeaderSubscriptionCells: string[] = [
    'Nom',
    'Prénom',
    'Téléphone',
    'Email',
    'Cours',
    'Moyen de paiement',
    'Réglement reçu',
    'Montant du réglement',
    'Encaissement chèques',
    'Remboursement',
    'Inscrit 2019/2020',
    'Cours 2019/2020',
    'Extra info'
  ];

  public filterOptions = [
    {
      filterName: 'payment',
      filterLabel: 'Paiement',
      values: [
        'Paiement dû',
        'Paiement effectué'
      ]
    },
    {
      filterName: 'course',
      filterLabel: 'Cours',
      values: [
        'lundi 18h30', 'lundi 20h30', 'mardi 18h30', 'mardi 20h30', 'mercredi 18h30', 'mercredi 20h30', 'jeudi 18h30', 'jeudi 20h30'
      ],
    },
    {
      filterName: 'alphabeticalOrder',
      filterLabel: 'Ordre alphabétique',
      values: [
        'A - Z',
        'Z - A'
      ]
    }
  ];

  constructor(
    private subscriptionService: SubscriptionService,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this._getMembersData();
  }

  async onOpenCourseRefundModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalCourseRefundPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedMember = data.member;
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember)
        .subscribe(
          result => {
            // show snack bar
            this._presentToast(this.REFUND_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
          });
    }
  }

  async onOpenCoursePaymentReceivedModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalCoursePaymentReceivedPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    const updatedMember = data.member;

    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember)
        .subscribe(
          result => {
            this.currentMembersData[index] = updatedMember;
            // show snack bar
            this._presentToast(this.PAYMENT_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
          });
    }
  }

  async onOpenCourseManagerModal(
    memberData: Member,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalCourseManagerPage,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }
    // On dismiss
    let updatedMember = data.member;
    if (data.dismissed === this.CONFIRM) {
      this.subscriptionService.updateMember(updatedMember)
        .subscribe(
          result => {
            this.currentMembersData[index] = updatedMember;
            // show snack bar
            this._presentToast(this.MEMBER_UPDATED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.MEMBER_UPDATED_FAIL, 'warning');
          });

    } else if (data.dismissed === this.CONFIRM_DELETE) {
      this.subscriptionService.deleteMember(updatedMember)
        .subscribe(
          result => {
            this.originalMembersData = this.originalMembersData.filter(member => member._id !== updatedMember._id);
            this.currentMembersData = this.originalMembersData;
            // show snack bar
            this._presentToast(this.MEMBER_DELETED_SUCCESS, 'success');
          },
          err => {
            this._presentToast(this.MEMBER_DELETED_FAIL, 'warning');
          });
    }
  }

  public onSelectedOption(filter: string, value?: string): void {
    this.matSelect = value;
    switch (filter) {
      case 'payment':
        this.filterPayment(value);
        break;
      case 'course':
        this.filterCourses(value);
        break;
      case 'alphabeticalOrder':
        this.filterAlphaOrder(value);
        break;
      default:
        this.currentMembersData = this.originalMembersData;
        break;
    }
    this._generateEmailList();
  }

  public onResetFilters(): void {
    this._getMembersData();
    this.matSelect = null;
  }

  public onCopyToClipBoard(): void {
    this._presentToast(this.EMAIL_LIST_COPIED, 'success');
  }

  // public get getTotalRefund(member: Member): number {
  //   let total = 0;
  //   member.refunds.forEach(refund => {
  //     total += refund.amount
  //   })
  //   return total;

  // }

  ////////////
  // PRIVATE
  ////////////
  private async _presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color
    });
    toast.present();
  }

  private _getMembersData(): void {
    this.isLoading = true;
    this.subscriptionService.getMembersData()
      .subscribe(
        response => {
          this.isLoading = false;
          this.originalMembersData = response.data;
          this.currentMembersData = [...this.originalMembersData];

          this._generateEmailList();
        },
        err => {
          this.isLoading = false;
          this.memberError = true;
        }
      );
  }

  private filterPayment(selectValue: string): void {
    if (selectValue === this.filterOptions[0].values[0]) {
      this.currentMembersData = this.originalMembersData.filter(member => member.paymentReceived === false)
    } else if (selectValue === this.filterOptions[0].values[1]) {
      this.currentMembersData = this.originalMembersData.filter(member => member.paymentReceived === true)
    } else {
      this.currentMembersData = this.originalMembersData;
    }
  }

  private filterCourses(selectValue: string): Member[] | void {
    if (selectValue === undefined) {
      return this.currentMembersData = this.originalMembersData;
    }
    this.currentMembersData = this.originalMembersData.filter(member => member.courses.includes(selectValue));
  }

  private filterAlphaOrder(selectValue: string): void {
    if (selectValue === this.filterOptions[2].values[0]) {
      this.currentMembersData = this.currentMembersData.sort(function (a, b) {
        const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else if (selectValue === this.filterOptions[2].values[1]) {
      this.currentMembersData = this.currentMembersData.sort((a, b) => {
        const nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
        const nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
    } else {
      this.currentMembersData = this.originalMembersData;
    }
  }

  private _generateEmailList(): void {
    // The email list will reflect the members displayed in the main table
    this.emailList = this.currentMembersData.map(member => member.email).toString();
  }

}