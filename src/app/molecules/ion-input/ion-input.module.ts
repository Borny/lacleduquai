import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { IonInputMolecule } from './ion-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [IonInputMolecule],
  imports: [CommonModule, ReactiveFormsModule, IonicModule],
  exports: [IonInputMolecule],
  providers: [],
})
export class IonInputModule { }
