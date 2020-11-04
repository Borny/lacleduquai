import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChaiTakeAwayView } from './chai-take-away.component';
import { ChaiTakeAwayRoutingModule } from './chai-take-away-routing.module';
import { MaterialModule } from '../../../angular-material/angular-material.module';

@NgModule({
  declarations: [ChaiTakeAwayView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ChaiTakeAwayRoutingModule,
    MaterialModule
  ],
})

export class ChaiTakeAwayViewModule { }