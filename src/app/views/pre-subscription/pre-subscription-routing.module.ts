import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreSubscriptionView } from './pre-subscription.component';

const routes: Routes = [
  {
    path: '',
    component: PreSubscriptionView
  },
  {
    path: 'pre-inscription',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreSubscriptionRoutingModule { }