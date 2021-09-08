import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BelaetcomePage } from './belaetcome.page';

const routes: Routes = [
  {
    path: '',
    component: BelaetcomePage
  },
  {
    path: 'belaetcome',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BelaetcomePageRoutingModule { }
