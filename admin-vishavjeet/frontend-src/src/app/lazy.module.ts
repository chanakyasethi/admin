import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr, HttpModule } from '@angular/http';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageTestComponent } from './components/manage-test/manage-test.component';
import { TestdetailsComponent } from './components/create-test/testdetails/testdetails.component';
import { AddquestionsComponent } from './components/create-test/addquestions/addquestions.component';
import { ManageUserComponent } from './components/manage-user/manage-user.component';
import { UploadComponent } from './components/create-test/upload/upload.component';
import { PublishTestComponent } from './components/create-test/publish-test/publish-test.component';
import { DetailsComponent } from './components/test/details/details.component';
import { QuestionsComponent } from './components/test/questions/questions.component';
import { TestComponent } from './components/test/test.component';
import { CandidatesComponent } from './components/test/candidates/candidates.component';
import { DateFormatePipe } from './pipe/date-formate.pipe';
import { CreateTestComponent } from './components/create-test/create-test.component';
import { WizardComponent } from './components/create-test/wizard/wizard.component';
import { TestServerService } from './services/testServer.service';
import { UserService } from './services/user.service';
import { StateService } from './services/state.service';
import { ResultsService } from './services/results.service';
import { QuesIdsService } from './services/ques-ids.service';
import { AuthGuardService } from './services/auth-guard.service';
import { HeaderComponent } from './components/nav/header/header.component';
import { InfoComponent } from './components/nav/info/info.component';
import { SidebarComponent } from './components/nav/sidebar/sidebar.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ResultsComponent } from './components/test/results/results.component';
import { NavComponent } from './components/nav/nav.component';
// import { ResultsComponent } from './components/test/results/results.component';
// import { HttpResponseWrapperService } from './services/httpresponsewrapper.service';
import { ManageGroupComponent } from './components/manage-group/manage-group.component';
import { GroupService } from './services/group.service';
import { GroupComponent } from './components/manage-group/group/group.component';
import { CreateGroupComponent } from './components/manage-group/create-group/create-group.component';




const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
  {
    path: 'manage-test',
    canActivate: [AuthGuardService],
    component: ManageTestComponent
  },
  {
    path: 'manage-candidates',
    canActivate: [AuthGuardService],
    component: ManageUserComponent
  },
  {
    path: 'manage-group',
    canActivate: [AuthGuardService],
    component: ManageGroupComponent
  }, {
    path: 'group/:id',
    // path: 'group/:id',
    canActivate: [AuthGuardService],
    component: GroupComponent
  },
  {
    path: 'group/create/:create',
    canActivate: [AuthGuardService],
    component: GroupComponent
  },
  {
    path: 'group/:id/:mode',
    canActivate: [AuthGuardService],
    component: GroupComponent
  },
  {
    path: 'createtest',
    component: CreateTestComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: 'testdetails', component: TestdetailsComponent },
      { path: 'addquestions', component: AddquestionsComponent },
      { path: 'upload', component: UploadComponent },
      { path: 'publish', component: PublishTestComponent }
    ]
  },
  { path: 'test', component: TestComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpModule,
    RouterModule.forChild(routes),
    NgProgressModule

  ],
  declarations: [
    DashboardComponent,
    ManageTestComponent,
    ManageGroupComponent,
    TestdetailsComponent,
    AddquestionsComponent,
    CreateGroupComponent,
    ManageUserComponent,
    UploadComponent,
    PublishTestComponent,
    DetailsComponent,
    QuestionsComponent,
    GroupComponent,
    TestComponent,
    CandidatesComponent,
    DateFormatePipe,
    CreateTestComponent,
    HeaderComponent,
    InfoComponent,
    SidebarComponent,
    OverviewComponent,
    WizardComponent,
    ResultsComponent,
    NavComponent
  ],
  providers: [
    TestServerService,
    UserService,
    StateService,
    ResultsService,
    QuesIdsService,
    // HttpResponseWrapperService,
    GroupService,
    { provide: BrowserXhr, useClass: NgProgressBrowserXhr }

  ],
  exports: [RouterModule]
})
export class LazyModule { }
