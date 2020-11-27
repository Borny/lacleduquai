import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLoginPageRoutingModule } from './admin-login-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { AdminLoginPage } from './admin-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLoginPageRoutingModule,
    SharedModule
  ],
  declarations: [AdminLoginPage]
})
export class AdminLoginPageModule { }
