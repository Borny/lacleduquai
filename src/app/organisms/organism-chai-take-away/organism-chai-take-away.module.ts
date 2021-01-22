import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ChaiTakeAwayOrganism } from './organism-chai-take-away.component';
import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';
import { AtomAsteriskModule } from '../../atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  declarations: [ChaiTakeAwayOrganism],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    SharedModule,
    AtomAsteriskModule
  ],
  exports: [ChaiTakeAwayOrganism]
})
export class ChaiTakeAwayModule { }
