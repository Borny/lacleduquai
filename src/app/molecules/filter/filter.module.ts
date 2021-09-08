import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { FilterMolecule } from './filter.component';

@NgModule({
  declarations: [FilterMolecule],
  imports: [CommonModule, IonicModule, MaterialModule],
  exports: [FilterMolecule],
  providers: [],
})
export class FilterModule { }
