import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactPageRoutingModule } from './contact-routing.module';

import { ContactPage } from './contact.page';
import { SharedModule } from '../../shared/shared.module';
import { AtomAsteriskModule } from '../../atoms/atom-asterisk/atom-asterisk.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ContactPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    AtomAsteriskModule
  ],
  declarations: [ContactPage]
})
export class ContactPageModule { }
