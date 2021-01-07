import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Member } from '../../models/member.model';
import { PaymentMethods } from '../../models/payment-methods.enum';
import { SubscriptionService } from '../../services/subscription.service';
import { MemberManagerDialog } from './member-manager/member-manager.component';
import { PaymentReceivedDialog } from './payment-received-dialog/payment-received-dialog.component';
import { RefundDialog } from './refund-dialog/refund-dialog.component';

@Component({
  selector: 'courses-admin-organism',
  templateUrl: './courses-admin-organism.component.html',
  styleUrls: ['./courses-admin-organism.component.scss'],
})
export class CoursesAdminOrganismComponent implements OnInit {

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
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getMembersData();
  }

  public onOpenRefundDialog(member: Member, index: number): void {
    const dialogRef = this.dialog.open(RefundDialog, {
      minWidth: '300px',
      data: member
    });
    dialogRef.beforeClosed()
      .subscribe(result => {
        if (result.action === this.CONFIRM) {
          this.subscriptionService.updateMember(member)
            .subscribe(
              result => {
                // show snack bar
                this._snackBar.open(this.REFUND_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.MEMBER_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  public onOpenPaymentReceived(member: Member): void {
    const dialogRef = this.dialog.open(PaymentReceivedDialog, {
      minWidth: '300px',
      data: member
    });
    dialogRef.beforeClosed()
      .subscribe(result => {
        member.paymentReceived = result.isPaymentReceived;
        member.checks = result.member.checks;
        if (result.action === this.CONFIRM) {
          this.subscriptionService.updateMember(member)
            .subscribe(
              result => {
                // show snack bar
                this._snackBar.open(this.PAYMENT_UPDATED_SUCCESS, null, {
                  duration: 3000,
                });
              },
              err => {
                this._snackBar.open(this.MEMBER_UPDATED_FAIL, null, {
                  duration: 3000,
                });
              });
        }
      });
  }

  public onOpenMemberManager(memb: Member, index: number): void {
    const id = memb._id;
    const dialogRef = this.dialog.open(MemberManagerDialog, {
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
          this.subscriptionService.updateMember(updatedMember)
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
          this.subscriptionService.deleteMember(result.member)
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
    this._snackBar.open(this.EMAIL_LIST_COPIED, null, {
      duration: 3000,
    });
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