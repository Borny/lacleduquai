import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeAwayView } from './take-away.component';
import { ChaiTakeAwayView } from './chai-take-away/chai-take-away.component';

const routes: Routes = [
  {
    path: '',
    component: TakeAwayView,
    children: [
      {
        path: 'chai', // child route path
        component: ChaiTakeAwayView, // child route component that the router renders
      }
    ],
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