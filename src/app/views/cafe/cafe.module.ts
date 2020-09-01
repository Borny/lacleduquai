import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CafeView } from './cafe.component';
import { CafeRoutingModule } from './cafe-routing.module';
import { MaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [CafeView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CafeRoutingModule,
    MaterialModule
  ]
})

export class CafeViewModule { }