import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent, RegisterComponent, HomeComponent, LoginComponent} from './components';

const routes: Routes = [  { path: '', component: HomeComponent},
{ path: 'home', component: HomeComponent },
{ path: 'register', component: RegisterComponent },
{path: 'register', component: LoginComponent },
{path: 'register', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
