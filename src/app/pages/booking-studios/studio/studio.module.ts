import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudioPageRoutingModule } from './studio-routing.module';

import { StudioPage } from './studio.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudioPageRoutingModule,
    SharedModule
  ],
  declarations: [StudioPage]
})
export class StudioPageModule { }
