import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesWorkshopsPage } from './courses-workshops.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesWorkshopsPage
  },
  {
    path: 'cours-stages',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesWorkshopsPageRoutingModule { }
