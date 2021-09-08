import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoworkingPage } from './coworking.page';

const routes: Routes = [
  {
    path: '',
    component: CoworkingPage
  },
  {
    path: 'coworking',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoworkingPageRoutingModule { }
