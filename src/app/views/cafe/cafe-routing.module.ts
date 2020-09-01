import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeView } from './cafe.component';

const routes: Routes = [
  {
    path: '',
    component: CafeView
  },
  {
    path: 'cafe-inscription',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CafeRoutingModule { }