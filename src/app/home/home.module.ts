import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { DevicesComponent } from './devices/devices.component';
import { CategoriesFormComponent } from './categories/categories-form/categories-form.component';
import { DevicesFormCreateComponent } from './devices/devices-form-create/devices-form-create.component';


@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    DevicesComponent,
    CategoriesFormComponent,
    DevicesFormCreateComponent
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
