import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LcdqPage } from './lcdq.page';

import { LcdqPageRoutingModule } from './lcdq-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    LcdqPageRoutingModule
  ],
  declarations: [LcdqPage]
})
export class LcdqPageModule { }
