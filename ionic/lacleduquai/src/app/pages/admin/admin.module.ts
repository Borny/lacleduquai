import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';
// import { CoursesModule } from '../../organisms/courses/courses.module';
// import { CafeSubscriptionsModule } from '../../organisms/cafe-subscriptions/cafe-subscriptions.module'
import { TakeAwayAdminOrganismModule } from '../../organisms/take-away-admin-organism/take-away-admin-organism.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminPageRoutingModule,
    MaterialModule,
    SharedModule,
    TakeAwayAdminOrganismModule
  ],
  declarations: [AdminPage]
})
export class AdminPageModule { }
