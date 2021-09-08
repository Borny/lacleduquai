import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CafeAdminOrganismComponent } from './cafe-admin-organism.component'
import { MaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [CafeAdminOrganismComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule
  ],
  exports: [CafeAdminOrganismComponent]
})
export class CafeAdminOrganismModule { }
