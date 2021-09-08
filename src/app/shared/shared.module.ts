import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MaterialModule } from '../angular-material/angular-material.module';
import { IonHeaderComponent } from './ion-header/ion-header.component';
import { LoaderComponent } from './loader/loader.component';
import { BelaetcomeLogoComponent } from './svg/belaetcome-logo/belaetcome-logo.component';
import { LacleduquaiLogoComponent } from './svg/lacleduquai-logo/lacleduquai-logo.component';
import { TwoTriangleComponent } from './svg/two-triangle/two-triangle.component';
import { SquaredShapesComponent } from './svg/squared-shapes/squared-shapes.component';
import { TriangleBlueComponent } from './svg/triangle-blue/triangle-blue.component';
import { TriangleYellowComponent } from './svg/triangle-yellow/triangle-yellow.component';
import { MultiTriangleComponent } from './svg/multi-triangle/multi-triangle.component';

@NgModule({
  declarations: [
    IonHeaderComponent,
    LoaderComponent,
    BelaetcomeLogoComponent,
    LacleduquaiLogoComponent,
    TwoTriangleComponent,
    SquaredShapesComponent,
    TriangleBlueComponent,
    TriangleYellowComponent,
    MultiTriangleComponent,
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
    LacleduquaiLogoComponent,
    TwoTriangleComponent,
    SquaredShapesComponent,
    TriangleBlueComponent,
    TriangleYellowComponent,
    MultiTriangleComponent,
  ]
})
export class SharedModule { }
