import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreSubscriptionPage } from './pre-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: PreSubscriptionPage
  },
  {
    path: 'pre-inscription',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreSubscriptionPageRoutingModule { }
