import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';

import { HomeAdminOrganismModule } from '../../organisms/home-admin-organism/home-admin-organism.module';
import { CoursesAdminOrganismModule } from '../../organisms/courses-admin-organism/courses-admin-organism.module';
import { CafeSubscriptionAdminOrganismModule } from '../../organisms/cafe-subscription-admin-organism/cafe-subscription-admin-organism.module';
import { TakeAwayAdminOrganismModule } from '../../organisms/take-away-admin-organism/take-away-admin-organism.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
    MaterialModule,
    SharedModule,
    HomeAdminOrganismModule,
    TakeAwayAdminOrganismModule,
    CafeSubscriptionAdminOrganismModule,
    CoursesAdminOrganismModule
  ],
  declarations: [AdminPage]
})
export class AdminPageModule { }
