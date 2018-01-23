import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { RegisterComponent, LoginComponent} from './components';

//  { path: '',  }

const routes: Routes = [
   { path: '',  loadChildren: './components/dashboard#DashboardModule', canActivate: [AuthGuard]},


{path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent},
{ path: 'dashboard',  loadChildren: './components/dashboard#DashboardModule', canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
