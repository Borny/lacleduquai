import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SubscriptionService } from '../../services/subscription.service';
import { Member } from '../../models/member.model';
import { environment } from '../../../environments/environment';
import { PaymentMethods } from '../../models/paymentMethods.enum';

import { MemberManagerDialog } from './member-manager/member-manager.component';
import { PaymentReceivedDialog } from './payment-received-dialog/payment-received-dialog.component';

@Component({
  selector: 'admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.scss']
})

export class AdminView implements OnInit {

  public membersData: Member[] = [];
  public isLoading = false;
  public memberError = false;

  public readonly HEADER_TITLE = 'Admin';
  public readonly LOADING_TEXT = 'Chargement des données...';
  public readonly ADULT_EXCEL_URL = `${environment.apiUrl}/subscription/adult/excel`;
  public readonly CONFIRM = `confirm`;
  public readonly CANCEL = `cancel`;
  public readonly PAYMENT_UPDATED_SUCCESS = `Paiement mis à jour`;
  public readonly DEPOSIT_MADE_UPDATED_SUCCESS = `Encaissement des chèques mis à jour`;
  public readonly MEMBER_UPDATED_FAIL = `Problème de mise à jour`;


  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD
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
          console.log('confirm')
          this.membersData[index] = result.member;
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

  private _getMembersInfo(): void {
    this.isLoading = true;
    console.log('fetching data...')
    this.subscriptionService.getMembersData()
      .subscribe(
        response => {
          console.log('Members data :', response);
          this.isLoading = false;
          this.membersData = response.data;
        },
        err => {
          console.log('get adult data error :', err);
          this.isLoading = false;
          this.memberError = true;
        }
      );
  }

}
