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
import {MatSortModule} from '@angular/material/sort';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { EventsTableComponent } from './events-table/events-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  declarations: [
    HomeComponent,
    SearchFormComponent,
    EventsTableComponent
  ],
  imports: [
    MatSelectModule,
    MatPaginatorModule,
    MatSortModule,
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
