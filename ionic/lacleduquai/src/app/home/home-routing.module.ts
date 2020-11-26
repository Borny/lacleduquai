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
        path: 'a-emporter',
        loadChildren: () => import('../pages/take-away/take-away.module').then(m => m.TakeAwayPageModule)
      },
      // {
      //   path: 'admin',
      //   loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminViewModule),
      //   canActivate: [AuthGuard]
      // },
      {
        path: 'admin-login',
        loadChildren: () => import('../pages/admin-login/admin-login.module').then(m => m.AdminLoginPageModule)
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
