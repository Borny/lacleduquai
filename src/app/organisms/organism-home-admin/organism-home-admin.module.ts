import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../angular-material/angular-material.module';

import { OrganismHomeAdminComponent } from './organism-home-admin.component';

@NgModule({
  declarations: [OrganismHomeAdminComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [OrganismHomeAdminComponent]
})
export class OrganismHomeAdminModule { }
