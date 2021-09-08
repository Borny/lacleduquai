import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafePageRoutingModule } from './cafe-routing.module';

import { CafePage } from './cafe.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CafePageRoutingModule,
    SharedModule
  ],
  declarations: [CafePage]
})
export class CafePageModule { }
