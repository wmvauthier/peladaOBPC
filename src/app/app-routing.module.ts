import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'igreja',
    loadChildren: () => import('./igreja/igreja.module').then( m => m.IgrejaPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'events-details',
    loadChildren: () => import('./events-details/events-details.module').then( m => m.EventsDetailsPageModule)
  },
  {
    path: 'events-confirm',
    loadChildren: () => import('./events-confirm/events-confirm.module').then( m => m.EventsConfirmPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
