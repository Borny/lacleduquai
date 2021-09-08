import { animation } from '@angular/animations';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  {
    path: 'lcdq',
    loadChildren: () => import('./lcdq/lcdq.module').then(m => m.LcdqPageModule),
    data: { animation: 'lcdqPage' }
  },
  {
    path: 'cafe-adhesion',
    loadChildren: () => import('./pages/cafe-subscription/cafe-subscription.module').then(m => m.CafeSubscriptionPageModule)
  },
  // {
  //   path: 'pre-inscription',
  //   loadChildren: () => import('./pages/pre-subscription/pre-subscription.module').then(m => m.PreSubscriptionPageModule)
  // },
  {
    path: 'admin-login',
    loadChildren: () => import('./pages/admin-login/admin-login.module').then(m => m.AdminLoginPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'lcdq/accueil',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'lcdq/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
