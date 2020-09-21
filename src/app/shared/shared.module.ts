import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    MaterialModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]

})
export class SharedModule { }