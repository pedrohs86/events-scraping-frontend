import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListResolver } from './event-list/event-list.resolver';

const routes: Routes = [
  {
    path: 'results',
    resolve: { events: EventListResolver},
    loadChildren: () =>
    import('./event-list/event-list.module').then((m) => m.EventListModule),
  },
  {
      path: 'home',
      loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
