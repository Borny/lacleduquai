import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IonHeaderComponent } from './ion-header/ion-header.component';
import { MaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    IonHeaderComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    IonicModule
  ],
  exports: [
    IonHeaderComponent,
  ]

})
export class SharedModule { }