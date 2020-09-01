import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeView } from './cafe.component';
import { CafeRoutingModule } from './cafe-routing.module';

@NgModule({
  declarations: [CafeView],
  imports: [
    CommonModule,
    CafeRoutingModule
  ]
})

export class CafeViewModule { }