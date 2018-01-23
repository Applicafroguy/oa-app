import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard.component';
import { BusinessComponent } from './business/business.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'profile/:id', component: ProfileComponent },
      {path: 'clients', component: ClientsComponent },
      {path: 'register/business', component: BusinessComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  public static routes = routes;
 }
