import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesWorkshopsPageRoutingModule } from './courses-workshops-routing.module';

import { CoursesWorkshopsPage } from './courses-workshops.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesWorkshopsPageRoutingModule,
    SharedModule
  ],
  declarations: [CoursesWorkshopsPage]
})
export class CoursesWorkshopsPageModule { }
