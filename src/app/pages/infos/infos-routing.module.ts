import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfosPage } from './infos.page';

const routes: Routes = [
  {
    path: '',
    component: InfosPage
  },
  {
    path: 'infos',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfosPageRoutingModule { }
