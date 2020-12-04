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
        loadChildren: () => import('../pages/booking-studios/booking-studios.module').then(m => m.BookingStudiosPageModule)
      },
      {
        path: 'a-emporter',
        loadChildren: () => import('../pages/take-away/take-away.module').then(m => m.TakeAwayPageModule)
      },
      {
        path: 'reservation-salles',
        loadChildren: () => import('../pages/booking-studios/booking-studios.module').then(m => m.BookingStudiosPageModule)
      },
      {
        path: 'galerie',
        loadChildren: () => import('../pages/gallery/gallery.module').then(m => m.GalleryPageModule)
      },
      {
        path: 'residence',
        loadChildren: () => import('../pages/residence/residence.module').then(m => m.ResidencePageModule)
      },
      {
        path: 'belaetcome',
        loadChildren: () => import('../pages/belaetcome/belaetcome.module').then(m => m.BelaetcomePageModule)
      },
      {
        path: 'cours-stages',
        loadChildren: () => import('../pages/courses-workshops/courses-workshops.module').then(m => m.CoursesWorkshopsPageModule)
      },
      {
        path: 'coworking',
        loadChildren: () => import('../pages/coworking/coworking.module').then(m => m.CoworkingPageModule)
      },
      {
        path: 'notre-equipe',
        loadChildren: () => import('../pages/team/team.module').then(m => m.TeamPageModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('../pages/contact/contact.module').then(m => m.ContactPageModule)
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
