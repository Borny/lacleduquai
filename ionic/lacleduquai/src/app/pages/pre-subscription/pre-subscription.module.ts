import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreSubscriptionPageRoutingModule } from './pre-subscription-routing.module';

import { PreSubscriptionPage } from './pre-subscription.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PreSubscriptionPageRoutingModule
  ],
  declarations: [PreSubscriptionPage]
})
export class PreSubscriptionPageModule { }
