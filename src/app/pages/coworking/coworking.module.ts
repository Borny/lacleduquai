import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoworkingPageRoutingModule } from './coworking-routing.module';

import { CoworkingPage } from './coworking.page';
import { MaterialModule } from '../../angular-material/angular-material.module';
import { SharedModule } from '../../shared/shared.module';
import { AtomAsteriskModule } from '../../atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CoworkingPageRoutingModule,
    SharedModule,
    MaterialModule,
    AtomAsteriskModule
  ],
  declarations: [CoworkingPage]
})
export class CoworkingPageModule { }
