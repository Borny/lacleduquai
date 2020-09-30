import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { SubscriptionsOrganism } from './subscriptions.component';
import { FilterModule } from '../../molecules/filter/filter.module';

@NgModule({
  declarations: [SubscriptionsOrganism],
  imports: [
    CommonModule,
    MaterialModule,
    FilterModule
  ],
  exports: [SubscriptionsOrganism],
  providers: [],
})
export class SubscriptionsModule { }