import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeAwayView } from './take-away.component';

const routes: Routes = [
  {
    path: '',
    component: TakeAwayView
  },
  {
    path: 'a-emporter',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeAwayRoutingModule { }