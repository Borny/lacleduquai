import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PreSubscriptionView } from './pre-subscription.component';
import { PreSubscriptionRoutingModule } from './pre-subscription-routing.module';
import { MaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [PreSubscriptionView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PreSubscriptionRoutingModule,
    MaterialModule
  ],
})

export class PreSubscriptionViewModule { }