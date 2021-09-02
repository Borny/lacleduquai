import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../../angular-material/angular-material.module';

import { FilterModule } from '../../molecules/filter/filter.module';
import { CopyToClipBoardModule } from '../../molecules/copy-to-clipboard/copy-to-clipboard.module';
import { CafeSubscriptionAdminOrganismComponent } from './cafe-subscription-admin-organism.component';
import { CafeMemberManagerModule } from './modal-cafe-member-manager/modal-cafe-member-manager.component';

@NgModule({
  declarations: [CafeSubscriptionAdminOrganismComponent],
  imports: [
    CommonModule,
    IonicModule,
    MaterialModule,
    FilterModule,
    CopyToClipBoardModule,
    CafeMemberManagerModule
  ],
  exports: [CafeSubscriptionAdminOrganismComponent]
})
export class CafeSubscriptionAdminOrganismModule { }
