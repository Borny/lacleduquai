import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioPageRoutingModule } from './studio-routing.module';

import { StudioPage } from './studio.page';
import { SharedModule } from '../../../shared/shared.module';
import { OrganismCalendarModule } from 'src/app/organisms/organism-calendar/organism-calendar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioPageRoutingModule,
    SharedModule,
    OrganismCalendarModule,
  ],
  declarations: [StudioPage],
})
export class StudioPageModule {}
