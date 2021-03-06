import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ChaiTakeAwayOrganism } from './chai-take-away.component';
import { MaterialModule } from '../../../angular-material/angular-material.module';

@NgModule({
  declarations: [ChaiTakeAwayOrganism],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [ChaiTakeAwayOrganism]
})

export class ChaiTakeAwayModule { }