import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { FilterMolecule } from './filter.component';

@NgModule({
  declarations: [FilterMolecule],
  imports: [CommonModule, MaterialModule],
  exports: [FilterMolecule],
  providers: [],
})
export class FilterModule { }