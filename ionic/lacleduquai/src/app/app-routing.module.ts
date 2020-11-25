import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lcdq',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'lcdq/cafe-adhesion',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'lcdq/cafe-adhesion',
    pathMatch: 'full'
  },
  {
    path: 'pre-subscription',
    loadChildren: () => import('./pages/pre-subscription/pre-subscription.module').then( m => m.PreSubscriptionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
