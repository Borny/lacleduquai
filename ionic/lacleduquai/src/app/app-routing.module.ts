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
    path: 'take-away',
    loadChildren: () => import('./pages/take-away/take-away.module').then( m => m.TakeAwayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
