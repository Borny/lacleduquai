import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Course } from '../../models/courses.model';

import { Member } from '../../models/member.model';
import { PaymentMethods } from '../../models/paymentMethods.enum';
import { SubscriptionService } from '../../services/subscription.service';
import { MemberManagerDialog } from '../../views/admin/member-manager/member-manager.component';
import { PaymentReceivedDialog } from '../../views/admin/payment-received-dialog/payment-received-dialog.component';

@Component({
  selector: 'subscriptions-organism',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.scss']
})

export class SubscriptionsOrganism {
  public originalMembersData: Member[] = [];
  public currentMembersData: Member[] = [];
  public previousMembersData: Member[] = [];
  public isLoading = false;
  public memberError = false;

  public matSelect: any;

  public readonly CONFIRM = `confirm`;
  public readonly CANCEL = `cancel`;
  public readonly PAYMENT_UPDATED_SUCCESS = `Paiement mis à jour`;
  public readonly DEPOSIT_MADE_UPDATED_SUCCESS = `Infos adhérent mises à jour`;
  public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;
  public readonly LOADING_TEXT = 'Chargement des données...';

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD
  ];

  public paymentFilterOptions: string[] = [
    'Paiement dû',
    'Paiement effectué',
  ];

  public randomOptions: string[] = [
    'option 1 ',
    'option 2',
  ];

  public courseFilterOptionss: Course[] = [
    {
      id: '1',
      detail: 'Lundi 18h30-20h30 : Théâtre avec Jérôme Chambon',
      name: 'lundi 18h30'
    },
    {
      id: '2',
      detail: 'Lundi 20h30-22h30 : Théâtre avec Jérôme Chambon',
      name: 'lundi 20h30'
    },
    {
      id: '3',
      detail: 'Mardi 18h30-20h30 : Chœur de femme avec Charlotte Lasnier',
      name: 'mardi 18h30'
    },
    {
      id: '4',
      detail: 'Mardi 20h30-23h : Cie Amateur avec Côme Tanguy (danse-théâtre)',
      name: 'mardi 20h30'
    },
    {
      id: '5',
      detail: 'Mercredi 18h30-20h30 : Danse-théâtre avec Côme Tanguy',
      name: 'mercredi 18h30'
    },
    {
      id: '6',
      detail: 'Mercredi 20h30-22h30 : Danse contemporaine et improvisation avec Côme Tanguy',
      name: 'mercredi 20h30'
    },
    {
      id: '7',
      detail: 'Jeudi 18h30-20h30 : Théâtre avec Laurine Clochard et Juliette Morin',
      name: 'jeudi 18h30'
    },
    {
      id: '8',
      detail: 'Jeudi 20h30-22h30 : Théâtre avec Julie Hercberg',
      name: 'jeudi 20h30'
    },
  ];

  public courseFilterOptions: string[] = [
    'lundi 18h30', 'lundi 20h30', 'mardi 18h30', 'mardi 20h30', 'mercredi 18h30', 'mercredi 20h30', 'jeudi 18h30', 'jeudi 20h30'
  ];

  public alphaOrderFilterOptions: string[] = [
    'A - Z',
    'Z - A'
  ];

  constructor(
    private subscriptionService: SubscriptionService,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this._getMembersInfo();
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
        if (result.action === this.CONFIRM) {
          this.currentMembersData[index] = result.member;
          this.subscriptionService.updateMember(result.member)
            .subscribe(
              result => {
                // show snack bar
                this._snackBar.open(this.DEPOSIT_MADE_UPDATED_SUCCESS, null, {
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

  public onSelectedOption(value: string, filter?: string): void {
    this.matSelect = value;
    switch (filter) {
      case 'paymentMethod':
        this.filterPayment(value);
        break;
      case 'courses':
        this.filterCourses(value);
        break;
      case 'alphaOrder':
        this.filterAlphaOrder(value);
        break;
      default:
        this.currentMembersData = this.originalMembersData;
        break;
    }
  }

  public onResetFilters(): void {
    this.currentMembersData = this.originalMembersData;
    this.matSelect = null;
  }

  // PRIVATE
  private _getMembersInfo(): void {
    this.isLoading = true;
    console.log('fetching data...')
    this.subscriptionService.getMembersData()
      .subscribe(
        response => {
          this.isLoading = false;
          this.originalMembersData = response.data;
          this.currentMembersData = [...this.originalMembersData];
        },
        err => {
          this.isLoading = false;
          this.memberError = true;
        }
      );
  }

  private filterPayment(selectValue: string): void {
    if (selectValue === this.paymentFilterOptions[0]) {
      this.currentMembersData = this.originalMembersData.filter(member => member.paymentReceived === false)
    } else if (selectValue === this.paymentFilterOptions[1]) {
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
    if (selectValue === this.alphaOrderFilterOptions[0]) {
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
    } else if (selectValue === this.alphaOrderFilterOptions[1]) {
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

}