import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TakeAwayPageRoutingModule } from './take-away-routing.module';

import { TakeAwayPage } from './take-away.page';
import { ChaiTakeAwayModule } from '../../organisms/chai-take-away/chai-take-away.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TakeAwayPageRoutingModule,
    ChaiTakeAwayModule
  ],
  declarations: [TakeAwayPage]
})
export class TakeAwayPageModule { }
