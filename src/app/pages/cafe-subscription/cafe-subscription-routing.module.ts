import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CafeSubscriptionPage } from './cafe-subscription.page';

const routes: Routes = [
  {
    path: '',
    component: CafeSubscriptionPage
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
export class CafeSubscriptionPageRoutingModule { }
