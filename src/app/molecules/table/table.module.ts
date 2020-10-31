import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule} from '../../angular-material/angular-material.module';
import { TableMolecule } from './table.component';

@NgModule({
  declarations: [TableMolecule],
  imports: [CommonModule, MaterialModule],
  exports: [TableMolecule],
  providers: [],
})
export class TableModule { }