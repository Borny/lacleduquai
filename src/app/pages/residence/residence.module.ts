import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidencePageRoutingModule } from './residence-routing.module';

import { ResidencePage } from './residence.page';
import { IonInputModule } from '../../molecules/ion-input/ion-input.module';
import { SharedModule } from '../../shared/shared.module';
import { AtomAsteriskModule } from '../../atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ResidencePageRoutingModule,
    SharedModule,
    IonInputModule,
    AtomAsteriskModule
  ],
  declarations: [ResidencePage]
})
export class ResidencePageModule { }
