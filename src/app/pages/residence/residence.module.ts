import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidencePageRoutingModule } from './residence-routing.module';

import { ResidencePage } from './residence.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidencePageRoutingModule,
    SharedModule
  ],
  declarations: [ResidencePage]
})
export class ResidencePageModule { }
