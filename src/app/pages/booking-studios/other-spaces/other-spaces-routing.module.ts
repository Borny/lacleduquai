import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherSpacesPage } from './other-spaces.page';

const routes: Routes = [
  {
    path: '',
    component: OtherSpacesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherSpacesPageRoutingModule {}
