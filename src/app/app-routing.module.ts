import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cafe-inscription',
    loadChildren: () => import('./views/cafe/cafe.module').then(m => m.CafeViewModule)
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