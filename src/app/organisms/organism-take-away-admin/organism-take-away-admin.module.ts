import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { OrganismTakeAwayAdminComponent } from './organism-take-away-admin.component'
import { MaterialModule } from '../../angular-material/angular-material.module';

@NgModule({
  declarations: [OrganismTakeAwayAdminComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule
  ],
  exports: [OrganismTakeAwayAdminComponent]
})
export class OrganismTakeAwayAdminModule { }
