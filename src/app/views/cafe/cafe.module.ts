import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CafeView } from './cafe.component';
import { CafeRoutingModule } from './cafe-routing.module';
import { MaterialModule } from '../../angular-material/angular-material.module';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

@NgModule({
  declarations: [CafeView],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CafeRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } }
  ]
})

export class CafeViewModule { }