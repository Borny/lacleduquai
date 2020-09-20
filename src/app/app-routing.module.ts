import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cafe-inscription',
    loadChildren: () => import('./views/cafe/cafe.module').then(m => m.CafeViewModule)
  },
  {
    path: 'pre-inscription',
    loadChildren: () => import('./views/pre-subscription/pre-subscription.module').then(m => m.PreSubscriptionViewModule)
  },
  {
    path: '',
    redirectTo: 'cafe-inscription',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'cafe-inscription',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }