import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ProfileComponent, RegisterComponent, HomeComponent, LoginComponent} from './components';

//  { path: '',  loadChildren: './components#ComponentModule'}

const routes: Routes = [
   { path: '',  component: LoginComponent},


{path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent},
// { path: 'components',  loadChildren: './components#ComponentModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
