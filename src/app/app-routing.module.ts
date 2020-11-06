import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guards';

const routes: Routes = [
  {
    path: 'cafe-adhesion',
    loadChildren: () => import('./views/cafe/cafe.module').then(m => m.CafeViewModule)
  },
  {
    path: 'pre-inscription',
    loadChildren: () => import('./views/pre-subscription/pre-subscription.module').then(m => m.PreSubscriptionViewModule)
  },
  {
    path: 'a-emporter',
    loadChildren: () => import('./views/take-away/take-away.module').then(m => m.TakeAwayViewModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminViewModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./views/admin-login/admin-login.module').then(m => m.AdminLoginViewModule)
  },
  {
    path: '',
    redirectTo: 'cafe-adhesion',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cafe-adhesion',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }