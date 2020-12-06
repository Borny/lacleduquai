import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SmallStudioPageRoutingModule } from './small-studio-routing.module';

import { SmallStudioPage } from './small-studio.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SmallStudioPageRoutingModule,
    SharedModule
  ],
  declarations: [SmallStudioPage]
})
export class SmallStudioPageModule { }
