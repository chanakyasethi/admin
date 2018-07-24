import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { EmailValidator } from 'ng-email-validation';
import { AppComponent } from './app.component';
import { FinishTestComponent } from './components/test/finishtest/finishtest.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NavstartComponent } from './components/navstart/navstart.component';
import { NavuserComponent } from './components/navuser/navuser.component';
import { AuthService } from './services/auth.service';
import { ResponseService } from './services/response.service';
import { TestportalComponent } from './components/test/testportal/testportal.component';
import { TimerComponent } from './components/timer/timer.component';
import { dropDownDirective } from './directives/dropDown.directive';
import { InstructionComponent } from './components/test/instruction/instruction.component';
import { AuthGuard } from './services/auth-guard.service';
import { AppRoutingModule } from 'app/app-router.module';
import { TestComponent } from 'app/components/test/test.component';
import { DashboardComponent } from 'app/components/dashboard/dashboard.component';
import { ServerService } from 'app/services/server.service';
import { WindowRef } from './services/windowRef.service';
import { NewpasswordComponent } from './components/newpassword/newpassword.component';

import { ResultsService } from 'app/services/results.service';
import { ActivateComponent } from './components/activate/activate.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PracticeTestComponent } from './components/dashboard/practice-test/practice-test.component';
import { AssignedTestComponent } from './components/dashboard/assigned-test/assigned-test.component';
import { CopmletedTestComponent } from './components/dashboard/copmleted-test/copmleted-test.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { BasicinfoComponent } from './components/dashboard/profile/basicinfo/basicinfo.component';
import { QualificationsComponent } from './components/dashboard/profile/qualifications/qualifications.component';
import { SkillsComponent } from './components/dashboard/profile/skills/skills.component';
import { CalculatorComponent } from './components/test/testportal/calculator/calculator.component';
// import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [
    AppComponent,
    FinishTestComponent,
    LoginComponent,
    ResetPasswordComponent,
    RegisterComponent,
    NavstartComponent,
    NavuserComponent,
    TestComponent,
    DashboardComponent,
    TestportalComponent,
    TimerComponent,
    dropDownDirective,
    InstructionComponent,
    NewpasswordComponent,
    ActivateComponent,
    NotFoundComponent,
    PracticeTestComponent,
    AssignedTestComponent,
    CopmletedTestComponent,
    ProfileComponent,
    BasicinfoComponent,
    QualificationsComponent,
    SkillsComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
    // RecaptchaModule.forRoot()
  ],
  providers: [
    EmailValidator,
    AuthService,
    AuthGuard,
    ServerService,
    ResponseService,
    ResultsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
