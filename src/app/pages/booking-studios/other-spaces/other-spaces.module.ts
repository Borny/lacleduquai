import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherSpacesPageRoutingModule } from './other-spaces-routing.module';

import { OtherSpacesPage } from './other-spaces.page';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherSpacesPageRoutingModule,
    SharedModule
  ],
  declarations: [OtherSpacesPage]
})
export class OtherSpacesPageModule { }
