import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminView } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { CoursesModule } from '../../organisms/courses/courses.module';
import { CafeSubscriptionsModule } from '../../organisms/cafe-subscriptions/cafe-subscriptions.module'
import { TakeAwayAdminModule } from '../../organisms/take-away/take-away-admin.module'

@NgModule({
  declarations: [
    AdminView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    CoursesModule,
    CafeSubscriptionsModule,
    TakeAwayAdminModule
  ]
})
export class AdminViewModule { }
