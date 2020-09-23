import { Component, Injector, OnDestroy, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { SubscriptionService } from '../../services/subscription.service';
import { Member } from '../../models/member.model';
import { environment } from '../../../environments/environment';
import { PaymentMethods } from '../../models/paymentMethods.enum';

import { MemberManagerDialog } from './member-manager/member-manager.component';
import { PaymentReceivedDialog } from './payment-received-dialog/payment-received-dialog.component';

// import { AuthService } from '../../services/auth.service';

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

  public paymentMethods: PaymentMethods[] = [
    PaymentMethods.FIRST,
    PaymentMethods.SECOND,
    PaymentMethods.THIRD
  ];

  constructor(
    private subscriptionService: SubscriptionService,
    private injector: Injector,
    public dialog: MatDialog
    // private router: Router
  ) { }

  ngOnInit() {
    this.getMembersInfo();
  }

  private isReceived(param: string): boolean {
    if (param === 'received') {
      return true
    } else if (param === 'notReceived' || param === undefined) {
      return false
    }
  }

  public onOpenPaymentReceived(member: Member): void {
    const dialogRef = this.dialog.open(PaymentReceivedDialog, {
      minWidth: '300px',
      data: member.paymentReceived
    });
    dialogRef.beforeClosed()
      .subscribe(result => {
        member.paymentReceived = result;
      });
  }

  public onOpenMemberManager(memberData): void {
    const dialogRef = this.dialog.open(MemberManagerDialog, {
      minWidth: '300px',
      data: memberData
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');
        console.log('close dialog result :', result);
      });
  }

  public getMembersInfo(): void {
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

  public onEdit(memberData): void {
    console.log(memberData)
  }

}
