import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { CafeSubscriptionsOrganism } from './cafe-subscriptions.component';
import { FilterModule } from '../../molecules/filter/filter.module';
import { CopyToClipBoardModule } from '../../molecules/copy-to-clipboard/copy-to-clipboard.module';
// import { TableModule } from '../../molecules/table/table.module';

@NgModule({
  declarations: [CafeSubscriptionsOrganism],
  imports: [
    CommonModule,
    MaterialModule,
    FilterModule,
    CopyToClipBoardModule,
    // TableModule
  ],
  exports: [CafeSubscriptionsOrganism],
  providers: [],
})
export class CafeSubscriptionsModule { }