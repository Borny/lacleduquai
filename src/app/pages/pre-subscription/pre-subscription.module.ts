import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreSubscriptionPageRoutingModule } from './pre-subscription-routing.module';

import { PreSubscriptionPage } from './pre-subscription.page';
import { AtomAsteriskModule } from 'src/app/atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    PreSubscriptionPageRoutingModule,
    AtomAsteriskModule
  ],
  declarations: [PreSubscriptionPage]
})
export class PreSubscriptionPageModule { }
