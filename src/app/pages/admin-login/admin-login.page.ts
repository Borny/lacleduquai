import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage implements OnInit, OnDestroy {

  public isLoading = false;
  public loginFailed = false;
  public isUserAuthenticated = false;

  public readonly HEADER_TITLE = 'Admin Login';
  public readonly CONNECT_BTN_TEXT = 'Se connecter';
  public readonly RELOAD_BTN_TEXT = 'Réessayer';

  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
  ) { }

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

  public onLogin(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.adminLogin(form.value);
  }

  public onReload(): void {
    location.reload();
  }

  public onLogout(): void {
    this.authService.logout();
  }

}
