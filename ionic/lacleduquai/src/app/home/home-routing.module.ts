import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'cafe-adhesion',
        loadChildren: () => import('../pages/cafe/cafe.module').then(m => m.CafePageModule)
      },
      {
        path: 'pre-inscription',
        loadChildren: () => import('../pages/pre-subscription/pre-subscription.module').then(m => m.PreSubscriptionPageModule)
      },
      {
        path: '',
        redirectTo: '/lcdq/cafe-adhesion',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
