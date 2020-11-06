import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { TakeAwayAdminOrganism } from './take-away-admin.component';

@NgModule({
  declarations: [TakeAwayAdminOrganism],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TakeAwayAdminOrganism],
  providers: [],
})
export class TakeAwayAdminModule { }