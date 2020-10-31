import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../../angular-material/angular-material.module';
import { CopyToClipBoardMolecule } from './copy-to-clipboard.component.';

@NgModule({
  declarations: [CopyToClipBoardMolecule],
  imports: [CommonModule, MaterialModule],
  exports: [CopyToClipBoardMolecule],
  providers: [],
})
export class CopyToClipBoardModule { }