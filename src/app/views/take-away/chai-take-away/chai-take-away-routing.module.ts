import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChaiTakeAwayView } from './chai-take-away.component';

const routes: Routes = [
  {
    path: '',
    component: ChaiTakeAwayView
  },
  {
    path: 'tchai',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChaiTakeAwayRoutingModule { }