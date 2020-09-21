import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent implements OnInit, OnDestroy {

  public isUserAuthenticated = false;

  public readonly LOGOUT_BTN_TEXT = 'Log out';
  public readonly LOGO_COLOR = 'white';

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
    this.authService.autoAuthUser();
  }

  ngOnDestroy(): void {
    this.authListenerSubs.unsubscribe();
  }
}
