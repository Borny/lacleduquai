import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IonHeaderComponent } from './ion-header/ion-header.component';
import { LoaderComponent } from './loader/loader.component';
import { BelaetcomeLogoComponent } from './belaetcome-logo/belaetcome-logo.component';
import { LacleduquaiLogoComponent } from './lacleduquai-logo/lacleduquai-logo.component';
import { MaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    IonHeaderComponent,
    LoaderComponent,
    BelaetcomeLogoComponent,
    LacleduquaiLogoComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    IonicModule,
  ],
  exports: [
    IonHeaderComponent,
    LoaderComponent,
    BelaetcomeLogoComponent,
    LacleduquaiLogoComponent
  ]

})
export class SharedModule { }
