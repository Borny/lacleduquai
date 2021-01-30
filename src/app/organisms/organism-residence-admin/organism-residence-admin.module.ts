import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../angular-material/angular-material.module';

// import { OrganismResidenceAdminComponent } from './organism-residence-admin.component';

@NgModule({
  // declarations: [OrganismResidenceAdminComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  // exports: [OrganismResidenceAdminComponent]
})
export class OrganismResidenceAdminModule { }
