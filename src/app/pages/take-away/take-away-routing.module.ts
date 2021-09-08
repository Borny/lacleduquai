import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeAwayPage } from './take-away.page';

const routes: Routes = [
  {
    path: '',
    component: TakeAwayPage
  },
  {
    path: 'a-emporter',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TakeAwayPageRoutingModule { }
