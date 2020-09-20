import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PreSubscriptionView } from './pre-subscription.component';
import { PreSubscriptionRoutingModule } from './pre-subscription-routing.module';
import { MaterialModule } from '../../angular-material/angular-material.module';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [PreSubscriptionView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PreSubscriptionRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'auto' } }
  ]
})

export class PreSubscriptionViewModule { }