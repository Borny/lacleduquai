import { Component, OnDestroy, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Subscription } from 'rxjs';

import { AuthService } from './services/auth.service';
import { SecondaryNavLink } from './models/secondary-nav.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public isUserAuthenticated = false;

  public secondaryNavLinks: SecondaryNavLink[] = [
    {
      icon: 'flower-outline',
      label: 'Accueil en résidence',
      link: '/lcdq/residence'
    },
    {
      icon: 'bulb-outline',
      label: 'Coworking',
      link: '/lcdq/coworking'
    },
    {
      icon: 'accessibility-outline',
      label: 'Cours et Stages',
      link: '/lcdq/cours-stages'
    },
    {
      icon: 'people-outline',
      label: 'L\'Equipe',
      link: '/lcdq/notre-equipe'
    },
    {
      icon: 'mail-outline',
      label: 'Contact',
      link: '/lcdq/contact'
    }
  ];

  public readonly LOGOUT_BTN_TEXT = 'Log out';
  public readonly LOGO_COLOR = 'white';

  private authListenerSubs: Subscription;

  constructor(
    private authService: AuthService,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  public onLogout(): void {
    this.authService.logout();
  }
}
