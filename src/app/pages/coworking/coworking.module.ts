import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkingPageRoutingModule } from './coworking-routing.module';

import { CoworkingPage } from './coworking.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoworkingPageRoutingModule,
    SharedModule
  ],
  declarations: [CoworkingPage]
})
export class CoworkingPageModule { }
