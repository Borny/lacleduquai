import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidencePage } from './residence.page';

const routes: Routes = [
  {
    path: '',
    component: ResidencePage
  },
  {
    path: 'residence',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidencePageRoutingModule { }
