import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomAsteriskComponent } from './atom-asterisk.component';

@NgModule({
  declarations: [AtomAsteriskComponent],
  imports: [
    CommonModule
  ],
  exports: [AtomAsteriskComponent]
})
export class AtomAsteriskModule { }
