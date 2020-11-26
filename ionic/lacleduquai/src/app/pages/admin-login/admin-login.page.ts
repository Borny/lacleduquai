import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.page.html',
  styleUrls: ['./admin-login.page.scss'],
})
export class AdminLoginPage {

  public isLoading = false;
  public loginFailed = false;

  public readonly HEADER_TITLE = 'Admin Login';
  public readonly CONNECT_BTN_TEXT = 'Se connecter';
  public readonly RELOAD_BTN_TEXT = 'Réessayer';

  constructor(
    private authService: AuthService,
  ) { }

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

}
