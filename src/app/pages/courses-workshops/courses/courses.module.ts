import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesPageRoutingModule } from './courses-routing.module';

import { CoursesPage } from './courses.page';

import { SharedModule } from '../../../shared/shared.module';
import { OrganismCourseSubscriptionFormComponent } from 'src/app/organisms/organism-course-subscription-form/organism-course-subscription-form.component';
import { OrganismCourseSubscriptionFormModule } from 'src/app/organisms/organism-course-subscription-form/organism-course-subscription-form.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule,
    SharedModule,
    OrganismCourseSubscriptionFormModule,
  ],
  declarations: [CoursesPage],
})
export class CoursesPageModule {}
