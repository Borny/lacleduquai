import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ion-header-component',
  templateUrl: './ion-header.component.html',
  styleUrls: ['./ion-header.component.scss'],
})
export class IonHeaderComponent implements OnInit, OnDestroy {

  @Input() headerTitle: string;
  @Input() showBackButton: boolean;
  @Input() defaultTarget: string;

  constructor(
    // private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    // this.isUserAuthenticated = this.authService.getIsAuth();
    // this.authListenerSubs = this.authService.getAuthStatus()
    //   .subscribe(
    //     isAuthenticated => {
    //       this.isUserAuthenticated = isAuthenticated;
    //     });
  }

  ngOnDestroy(): void {
    // this.authListenerSubs.unsubscribe();
  }

}
