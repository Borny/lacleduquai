import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeSubscriptionPageRoutingModule } from './cafe-subscription-routing.module';

import { CafeSubscriptionPage } from './cafe-subscription.page';
import { AtomAsteriskModule } from '../../atoms/atom-asterisk/atom-asterisk.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CafeSubscriptionPageRoutingModule,
    AtomAsteriskModule
  ],
  declarations: [CafeSubscriptionPage]
})
export class CafeSubscriptionPageModule { }
