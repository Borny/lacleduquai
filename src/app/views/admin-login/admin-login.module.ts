import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { AdminLoginView } from './admin-login.component';
import { AdminLoginRoutingModule } from './admin-login-routing.module';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    AdminLoginView,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminLoginRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class AdminLoginViewModule { }
