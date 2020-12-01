import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guards';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'pre-inscription',
        loadChildren: () => import('../pages/pre-subscription/pre-subscription.module').then(m => m.PreSubscriptionPageModule)
      },
      {
        path: 'a-emporter',
        loadChildren: () => import('../pages/take-away/take-away.module').then(m => m.TakeAwayPageModule)
      },
      {
        path: 'admin-login',
        loadChildren: () => import('../pages/admin-login/admin-login.module').then(m => m.AdminLoginPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('../pages/admin/admin.module').then(m => m.AdminPageModule),
        canActivate: [AuthGuard]
      },
      {
        path: '',
        redirectTo: '/lcdq/',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class HomePageRoutingModule { }
