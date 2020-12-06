import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookingStudiosPage } from './booking-studios.page';

const routes: Routes = [
  {
    path: '',
    component: BookingStudiosPage
  },
  {
    path: 'studio',
    loadChildren: () => import('./studio/studio.module').then(m => m.StudioPageModule)
  },
  {
    path: 'petite-salle',
    loadChildren: () => import('./small-studio/small-studio.module').then(m => m.SmallStudioPageModule)
  },
  {
    path: 'autres-espaces',
    loadChildren: () => import('./other-spaces/other-spaces.module').then(m => m.OtherSpacesPageModule)
  },
  {
    path: 'reservation-salles',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookingStudiosPageRoutingModule { }
