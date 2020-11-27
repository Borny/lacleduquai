import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { CafeSubscription } from '../../models/cafe-subscription.model';
import { CafeSubscriptionService } from '../../services/cafe-subscription.service';
import { CafeMemberManagerDialog } from './cafe-member-manager/cafe-member-manager.component';

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
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getMembersInfo();
  }

  public onOpenMemberManager(memb: CafeSubscription, index: number): void {
    const id = memb._id;
    const dialogRef = this.dialog.open(CafeMemberManagerDialog, {
      minWidth: '500px',
      data: id
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        if (!result) {
          return;
        }
        let updatedMember = result.member;
        if (result.action === this.CONFIRM) {
          this.currentMembersData[index] = result.member;
          this.cafeSubscriptionService.updateCafeMember(updatedMember)
            .subscribe(
              result => {
                // show snack bar
                this._snackBar.open(this.MEMBER_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.MEMBER_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        } else if (result.action === this.CONFIRM_DELETE) {
          this.cafeSubscriptionService.deleteCafeMember(result.member)
            .subscribe(
              result => {
                this.originalMembersData = this.originalMembersData.filter(member => member._id !== updatedMember._id);
                this.currentMembersData = this.originalMembersData;
                // show snack bar
                this._snackBar.open(this.MEMBER_DELETED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.MEMBER_DELETED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
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
    this._snackBar.open(this.EMAIL_LIST_COPIED, null, {
      duration: 3000,
    });
  }

  ////////////
  // PRIVATE
  ////////////
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
