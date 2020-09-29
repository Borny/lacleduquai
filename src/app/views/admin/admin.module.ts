import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminView } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { FilterModule } from '../../molecules/filter/filter.module';

@NgModule({
  declarations: [
    AdminView
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    SharedModule,
    FilterModule
  ]
})
export class AdminViewModule { }
