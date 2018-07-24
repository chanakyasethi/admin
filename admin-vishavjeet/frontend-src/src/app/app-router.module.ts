import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { ActivateComponent } from './components/activate/activate.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'activate/:token', component: ActivateComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'reset/:token', component: NewpasswordComponent },
  // { path: 'nav', component: NavComponent },
  { path: 'load', loadChildren: './lazy.module#LazyModule' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
