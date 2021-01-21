import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', redirectTo: 'places', pathMatch: 'full'},
      {
        path: 'places',
        loadChildren: () => import('./places/places.module').then( m => m.PlacesPageModule)
      },
      {
        path: 'place-create',
        loadChildren: () => import('./place-create/place-create.module').then( m => m.PlaceCreatePageModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
