import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LcdqPage } from './lcdq.page';

const routes: Routes = [
  {
    path: '',
    component: LcdqPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cafe',
        loadChildren: () => import('../pages/cafe/cafe.module').then(m => m.CafePageModule)
      },
      {
        path: 'reservation-salles',
        loadChildren: () => import('../pages/booking-rooms/booking-rooms.module').then(m => m.BookingRoomsPageModule)
      },
      {
        path: 'a-emporter',
        loadChildren: () => import('../pages/take-away/take-away.module').then(m => m.TakeAwayPageModule)
      },
      {
        path: 'galerie',
        loadChildren: () => import('../pages/gallery/gallery.module').then(m => m.GalleryPageModule)
      },
      {
        path: '',
        redirectTo: '/lcdq/accueil',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LcdqPageRoutingModule { }
