import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TakeAwayAdminOrganismComponent } from './take-away-admin-organism.component'
import { MaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [TakeAwayAdminOrganismComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule
  ],
  exports: [TakeAwayAdminOrganismComponent]
})
export class TakeAwayAdminOrganismModule { }
