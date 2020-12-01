import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafePage } from './cafe.page';

const routes: Routes = [
  {
    path: '',
    component: CafePage
  },
  {
    path: 'cafe-inscription',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CafePageRoutingModule { }
