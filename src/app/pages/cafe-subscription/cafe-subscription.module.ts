import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CafeSubscriptionPageRoutingModule } from './cafe-subscription-routing.module';

import { CafeSubscriptionPage } from './cafe-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CafeSubscriptionPageRoutingModule
  ],
  declarations: [CafeSubscriptionPage]
})
export class CafeSubscriptionPageModule { }
