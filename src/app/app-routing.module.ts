import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lcdq',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'cafe-adhesion',
    loadChildren: () => import('./pages/cafe/cafe.module').then(m => m.CafePageModule)
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
