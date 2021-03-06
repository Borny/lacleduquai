import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TakeAwayView } from './take-away.component';
import { TakeAwayRoutingModule } from './take-away-routing.module';
import { MaterialModule } from '../../angular-material/angular-material.module';
import { ChaiTakeAwayModule } from './chai-take-away/chai-take-away.module';

@NgModule({
  declarations: [TakeAwayView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TakeAwayRoutingModule,
    ChaiTakeAwayModule,
    MaterialModule
  ]
})

export class TakeAwayViewModule { }