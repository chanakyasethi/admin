import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinishTestComponent } from './components/test/finishtest/finishtest.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth-guard.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InstructionComponent } from './components/test/instruction/instruction.component';
import { TestportalComponent } from './components/test/testportal/testportal.component';
import { TestComponent } from 'app/components/test/test.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';
import { ActivateComponent } from 'app/components/activate/activate.component';
import { NotFoundComponent } from 'app/components/not-found/not-found.component';
import { PracticeTestComponent } from './components/dashboard/practice-test/practice-test.component';
import { AssignedTestComponent } from './components/dashboard/assigned-test/assigned-test.component';
import { CopmletedTestComponent } from './components/dashboard/copmleted-test/copmleted-test.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'activate/:token', component: ActivateComponent },
  { path: 'resetpassword', component: ResetPasswordComponent },
  { path: 'reset/:token', component: NewpasswordComponent },
  {
    path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'practice-tests', pathMatch: 'full' },
      { path: 'practice-tests', component: PracticeTestComponent },
      { path: 'assigned-tests', component: AssignedTestComponent },
      { path: 'completed-tests', component: CopmletedTestComponent },
      { path: 'profile', component: ProfileComponent }

    ]

  },

  {
    path: 'test',
    canActivateChild: [AuthGuard],
    canActivate: [AuthGuard],
    component: TestComponent,
    children: [
      { path: 'finishtest', component: FinishTestComponent },
      { path: 'instruction', component: InstructionComponent },
      { path: 'testportal', component: TestportalComponent },
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
