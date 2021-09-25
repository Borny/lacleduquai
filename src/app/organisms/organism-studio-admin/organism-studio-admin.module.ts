import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../angular-material/angular-material.module';

import { OrganismStudioAdminComponent } from './organism-studio-admin.component';

@NgModule({
  declarations: [OrganismStudioAdminComponent],
  imports: [
    CommonModule,
    RouterModule,
    IonicModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [OrganismStudioAdminComponent],
})
export class OrganismStudioAdminModule {}
