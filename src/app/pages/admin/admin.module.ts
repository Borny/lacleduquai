import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminPageRoutingModule } from './admin-routing.module';

import { AdminPage } from './admin.page';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';

import { OrganismHomeAdminModule } from '../../organisms/organism-home-admin/organism-home-admin.module';
import { CafeAdminOrganismModule } from '../../organisms/cafe-admin-organism/cafe-admin-organism.module';
import { OrganismCoursesAdminModule } from '../../organisms/organism-courses-admin/organism-courses-admin.module';
import { CafeSubscriptionAdminOrganismModule } from '../../organisms/cafe-subscription-admin-organism/cafe-subscription-admin-organism.module';
import { OrganismTakeAwayAdminModule } from '../../organisms/organism-take-away-admin/organism-take-away-admin.module';
import { OrganismResidenceAdminModule } from '../../organisms/organism-residence-admin/organism-residence-admin.module';
import { OrganismStudioAdminModule } from '../../organisms/organism-studio-admin/organism-studio-admin.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminPageRoutingModule,
    MaterialModule,
    SharedModule,
    OrganismHomeAdminModule,
    CafeAdminOrganismModule,
    OrganismTakeAwayAdminModule,
    CafeSubscriptionAdminOrganismModule,
    OrganismCoursesAdminModule,
    OrganismResidenceAdminModule,
    OrganismStudioAdminModule,
  ],
  declarations: [AdminPage],
})
export class AdminPageModule {}
