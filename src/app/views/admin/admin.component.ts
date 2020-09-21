import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SubscriptionService } from '../../services/subscription.service';
import { Member } from '../../models/member.model';
import { environment } from '../../../environments/environment';
import { PaymentMethods } from '../../models/paymentMethods.enum';
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
    // private router: Router
  ) { }

  ngOnInit() {
    this.getMembersInfo();
  }

  public getMembersInfo(): void {
    this.isLoading = true;
    console.log('fetching data...')
    this.subscriptionService.getMembersData()
      // .pipe(
      //   map(memberData => {
      //     return memberData.map()
      //   })
      // )
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
