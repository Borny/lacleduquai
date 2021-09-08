import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmallStudioPage } from './small-studio.page';

const routes: Routes = [
  {
    path: '',
    component: SmallStudioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SmallStudioPageRoutingModule {}
