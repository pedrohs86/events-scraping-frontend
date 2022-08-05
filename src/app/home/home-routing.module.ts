import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
          path: '',
          component: CategoriesComponent,
          data: { title: 'Categories' }
      },
      {
          path: 'devices',
          component: DevicesComponent,
          data: { title: 'Devices' }
      },
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
