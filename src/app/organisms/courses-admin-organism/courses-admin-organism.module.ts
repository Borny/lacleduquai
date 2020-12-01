import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../angular-material/angular-material.module';

import { FilterModule } from '../../molecules/filter/filter.module';
import { CopyToClipBoardModule } from '../../molecules/copy-to-clipboard/copy-to-clipboard.module';
import { CoursesAdminOrganismComponent } from './courses-admin-organism.component';


@NgModule({
  declarations: [CoursesAdminOrganismComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    FilterModule,
    CopyToClipBoardModule
  ],
  exports: [CoursesAdminOrganismComponent]
})
export class CoursesAdminOrganismModule { }
