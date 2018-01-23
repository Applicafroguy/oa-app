import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatSelectModule,
  MatAutocompleteModule} from '@angular/material';
import { BusinessComponent } from './business/business.component';
import { LaddaModule } from 'angular2-ladda';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    LaddaModule,
    Ng2SmartTableModule
  ],
  declarations: [DashboardComponent, ProfileComponent, BusinessComponent, HomeComponent, ClientsComponent]
})
export class DashboardModule {
 }
