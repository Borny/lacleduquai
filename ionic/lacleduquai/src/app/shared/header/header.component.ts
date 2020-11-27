import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input() headerTitle: string;

  public isUserAuthenticated = false;
  public readonly LOGOUT_BTN_TEXT = 'Log out';

  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService) {
  }

  ngOnInit(): void {
    this.isUserAuthenticated = this.authService.getIsAuth();
    this.authListenerSubs = this.authService.getAuthStatus()
      .subscribe(
        isAuthenticated => {
          this.isUserAuthenticated = isAuthenticated;
        });
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }

  public onLogout(): void {
    this.authService.logout();
  }

}