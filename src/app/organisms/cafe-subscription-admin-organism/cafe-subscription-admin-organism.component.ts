import { Component, OnInit } from '@angular/core';
import { ModalController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

import { CafeSubscription } from '../../models/cafe-subscription.model';
import { CafeSubscriptionService } from '../../services/cafe-subscription.service';

import { ModalCafeMemberManagerDialog } from './modal-cafe-member-manager/modal-cafe-member-manager.component';

@Component({
  selector: 'cafe-subscription-admin-organism',
  templateUrl: './cafe-subscription-admin-organism.component.html',
  styleUrls: ['./cafe-subscription-admin-organism.component.scss'],
})
export class CafeSubscriptionAdminOrganismComponent implements OnInit {

  public originalMembersData: CafeSubscription[] = [];
  public currentMembersData: CafeSubscription[] = [];
  public isLoading = false;
  public memberError = false;
  public matSelect: any;
  public emailList: string;

  public readonly CONFIRM = `confirm`;
  public readonly CONFIRM_DELETE = 'confirm-delete';
  public readonly CANCEL = `cancel`;
  public readonly MEMBER_UPDATED_SUCCESS = `Infos adhérent mises à jour`;
  public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;
  public readonly MEMBER_DELETED_SUCCESS = `Adhérent supprimé`;
  public readonly MEMBER_DELETED_FAIL = `Erreur suppression adhérent`;
  public readonly LOADING_TEXT = 'Chargement des données...';
  public readonly EMAIL_LIST_COPIED = 'Emails copiés';

  // public tableHeaderSubscriptionCells: string[] = [
  //   'Nom',
  //   'Prénom',
  //   'Téléphone',
  //   'Email',
  //   'Cours',
  //   'Moyen de paiement',
  //   'Réglement reçu',
  //   'Montant du réglement',
  //   'Encaissement chèques',
  //   'Remboursement',
  //   'Inscrit 2019/2020',
  //   'Cours 2019/2020',
  //   'Extra info'
  // ];

  public filterOptions = [
    {
      filterName: 'newsletter',
      filterLabel: 'Inscription Newsletter',
      values: [
        'Oui',
        'Non'
      ]
    },
    {
      filterName: 'alphabeticalOrder',
      filterLabel: 'Ordre alphabétique',
      values: [
        'A - Z',
        'Z - A'
      ]
    }
  ]

  constructor(
    private cafeSubscriptionService: CafeSubscriptionService,
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this._getMembersInfo();
  }

  async onOpenManageCafeSubscriptionModal(
    memberData: CafeSubscription,
    index: number
  ): Promise<void> {
    const modal = await this.modalController.create({
      component: ModalCafeMemberManagerDialog,
      componentProps: {
        member: memberData,
      },
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (!data) {
      return;
    }

    let updatedMember = data.member;
    if (data.dismissed === this.CONFIRM) {
      console.log('confirm :', updatedMember)
      this.currentMembersData[index] = data.member;
      this.cafeSubscriptionService.updateCafeMember(updatedMember)
        .subscribe(
          result => {
            // show snack bar
            this._presentToast(this.MEMBER_UPDATED_SUCCESS);
          },
          err => {
            this._presentToast(this.MEMBER_UPDATED_FAIL);
          });
    } else if (data.dismissed === this.CONFIRM_DELETE) {
      this.cafeSubscriptionService.deleteCafeMember(data.member)
        .subscribe(
          result => {
            this.originalMembersData = this.originalMembersData.filter(member => member._id !== updatedMember._id);
            this.currentMembersData = this.originalMembersData;
            // show snack bar
            this._presentToast(this.MEMBER_DELETED_SUCCESS);
          },
          err => {
            this._presentToast(this.MEMBER_DELETED_FAIL);
          });
    }
  }

  public onSelectedOption(filter: string, value?: string): void {
    this.matSelect = value;
    switch (filter) {
      case 'newsletter':
        this._filterNewsletter(value);
        break;
      case 'alphabeticalOrder':
        this._filterAlphaOrder(value);
        break;
      default:
        this.currentMembersData = this.originalMembersData;
        break;
    }
    this._generateEmailList();
  }

  public onResetFilters(): void {
    this._getMembersInfo();
    this.matSelect = null;
  }

  public onCopyToClipBoard(): void {
    this._presentToast(this.EMAIL_LIST_COPIED);
  }

  ////////////
  // PRIVATE
  ////////////
  async _presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  private _getMembersInfo(): void {
    this.isLoading = true;
    this.cafeSubscriptionService.getCafeSubscriptionMembersData()
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

  private _filterNewsletter(selectValue: string): void {
    if (selectValue === undefined) {
      this.currentMembersData = this.originalMembersData;
      return;
    }
    this.currentMembersData = selectValue === this.filterOptions[0].values[0]
      ? this.originalMembersData.filter(member => member.newsletterSubscription)
      : this.originalMembersData.filter(member => !member.newsletterSubscription)
  }

  private _filterAlphaOrder(selectValue: string): void {
    if (selectValue === this.filterOptions[1].values[0]) {
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
    } else if (selectValue === this.filterOptions[1].values[1]) {
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
