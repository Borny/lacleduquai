import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { OrganismCourseSubscriptionFormComponent } from './organism-course-subscription-form.component';
import { AtomAsteriskModule } from 'src/app/atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  declarations: [OrganismCourseSubscriptionFormComponent],
  imports: [
    AtomAsteriskModule,
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [OrganismCourseSubscriptionFormComponent],
})
export class OrganismCourseSubscriptionFormModule {}
