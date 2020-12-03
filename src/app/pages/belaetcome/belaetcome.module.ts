import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BelaetcomePageRoutingModule } from './belaetcome-routing.module';

import { BelaetcomePage } from './belaetcome.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BelaetcomePageRoutingModule,
    SharedModule
  ],
  declarations: [BelaetcomePage]
})
export class BelaetcomePageModule { }
