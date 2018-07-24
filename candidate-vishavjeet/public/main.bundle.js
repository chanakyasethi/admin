webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_test_finishtest_finishtest_component__ = __webpack_require__("../../../../../src/app/components/test/finishtest/finishtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_test_instruction_instruction_component__ = __webpack_require__("../../../../../src/app/components/test/instruction/instruction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_test_testportal_testportal_component__ = __webpack_require__("../../../../../src/app/components/test/testportal/testportal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_newpassword_newpassword_component__ = __webpack_require__("../../../../../src/app/components/newpassword/newpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_components_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_dashboard_practice_test_practice_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/practice-test/practice-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_dashboard_assigned_test_assigned_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_dashboard_copmleted_test_copmleted_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'activate/:token', component: __WEBPACK_IMPORTED_MODULE_12_app_components_activate_activate_component__["a" /* ActivateComponent */] },
    { path: 'resetpassword', component: __WEBPACK_IMPORTED_MODULE_10__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */] },
    { path: 'reset/:token', component: __WEBPACK_IMPORTED_MODULE_11__components_newpassword_newpassword_component__["a" /* NewpasswordComponent */] },
    {
        path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_6__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: '', redirectTo: 'practice-tests', pathMatch: 'full' },
            { path: 'practice-tests', component: __WEBPACK_IMPORTED_MODULE_14__components_dashboard_practice_test_practice_test_component__["a" /* PracticeTestComponent */] },
            { path: 'assigned-tests', component: __WEBPACK_IMPORTED_MODULE_15__components_dashboard_assigned_test_assigned_test_component__["a" /* AssignedTestComponent */] },
            { path: 'completed-tests', component: __WEBPACK_IMPORTED_MODULE_16__components_dashboard_copmleted_test_copmleted_test_component__["a" /* CopmletedTestComponent */] },
            { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__components_dashboard_profile_profile_component__["a" /* ProfileComponent */] }
        ]
    },
    {
        path: 'test',
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard_service__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_9_app_components_test_test_component__["a" /* TestComponent */],
        children: [
            { path: 'finishtest', component: __WEBPACK_IMPORTED_MODULE_2__components_test_finishtest_finishtest_component__["a" /* FinishTestComponent */] },
            { path: 'instruction', component: __WEBPACK_IMPORTED_MODULE_7__components_test_instruction_instruction_component__["a" /* InstructionComponent */] },
            { path: 'testportal', component: __WEBPACK_IMPORTED_MODULE_8__components_test_testportal_testportal_component__["a" /* TestportalComponent */] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_13_app_components_not_found_not_found_component__["a" /* NotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/app-router.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- <app-testportal></app-testportal> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        var _this = this;
        this.onlineOffline = navigator.onLine;
        window.addEventListener('online', function () { _this.onlineOffline = true; });
        window.addEventListener('offline', function () { _this.onlineOffline = false; });
        if (this.onlineOffline === false) {
            this.offlineTime = new Date().getMinutes();
        }
        else if (this.onlineOffline === true) {
            this.onlineTime = new Date().getMinutes();
        }
        ;
        // console.log(this.offlineTime);
        // console.log(this.onlineTime);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_email_validation__ = __webpack_require__("../../../../ng-email-validation/dist/bundles/emailservice.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_email_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_email_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_test_finishtest_finishtest_component__ = __webpack_require__("../../../../../src/app/components/test/finishtest/finishtest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_reset_password_reset_password_component__ = __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_navstart_navstart_component__ = __webpack_require__("../../../../../src/app/components/navstart/navstart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navuser_navuser_component__ = __webpack_require__("../../../../../src/app/components/navuser/navuser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_test_testportal_testportal_component__ = __webpack_require__("../../../../../src/app/components/test/testportal/testportal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_timer_timer_component__ = __webpack_require__("../../../../../src/app/components/timer/timer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_dropDown_directive__ = __webpack_require__("../../../../../src/app/directives/dropDown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_test_instruction_instruction_component__ = __webpack_require__("../../../../../src/app/components/test/instruction/instruction.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_app_router_module__ = __webpack_require__("../../../../../src/app/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_components_test_test_component__ = __webpack_require__("../../../../../src/app/components/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_newpassword_newpassword_component__ = __webpack_require__("../../../../../src/app/components/newpassword/newpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_app_services_results_service__ = __webpack_require__("../../../../../src/app/services/results.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_activate_activate_component__ = __webpack_require__("../../../../../src/app/components/activate/activate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_not_found_not_found_component__ = __webpack_require__("../../../../../src/app/components/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_dashboard_practice_test_practice_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/practice-test/practice-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_dashboard_assigned_test_assigned_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_dashboard_copmleted_test_copmleted_test_component__ = __webpack_require__("../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_dashboard_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/dashboard/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_dashboard_profile_basicinfo_basicinfo_component__ = __webpack_require__("../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_dashboard_profile_qualifications_qualifications_component__ = __webpack_require__("../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_dashboard_profile_skills_skills_component__ = __webpack_require__("../../../../../src/app/components/dashboard/profile/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_test_testportal_calculator_calculator_component__ = __webpack_require__("../../../../../src/app/components/test/testportal/calculator/calculator.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



































// import { RecaptchaModule } from 'ng-recaptcha';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_test_finishtest_finishtest_component__["a" /* FinishTestComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_reset_password_reset_password_component__["a" /* ResetPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_navstart_navstart_component__["a" /* NavstartComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navuser_navuser_component__["a" /* NavuserComponent */],
                __WEBPACK_IMPORTED_MODULE_20_app_components_test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_21_app_components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_test_testportal_testportal_component__["a" /* TestportalComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_timer_timer_component__["a" /* TimerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__directives_dropDown_directive__["a" /* dropDownDirective */],
                __WEBPACK_IMPORTED_MODULE_17__components_test_instruction_instruction_component__["a" /* InstructionComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_newpassword_newpassword_component__["a" /* NewpasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_activate_activate_component__["a" /* ActivateComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_dashboard_practice_test_practice_test_component__["a" /* PracticeTestComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_dashboard_assigned_test_assigned_test_component__["a" /* AssignedTestComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_dashboard_copmleted_test_copmleted_test_component__["a" /* CopmletedTestComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_dashboard_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_dashboard_profile_basicinfo_basicinfo_component__["a" /* BasicinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_dashboard_profile_qualifications_qualifications_component__["a" /* QualificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_dashboard_profile_skills_skills_component__["a" /* SkillsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_test_testportal_calculator_calculator_component__["a" /* CalculatorComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_19_app_app_router_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_ng_email_validation__["EmailValidator"],
                __WEBPACK_IMPORTED_MODULE_12__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_22_app_services_server_service__["a" /* ServerService */],
                __WEBPACK_IMPORTED_MODULE_13__services_response_service__["a" /* ResponseService */],
                __WEBPACK_IMPORTED_MODULE_24_app_services_results_service__["a" /* ResultsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<app-navstart></app-navstart>\n<!-- Main login -->\n<section class=\"main-login\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h3 class=\"heading center\" style=\"color:#403F48; font-weight:600; text-align:center;margin: 20px 0px;\">Account Activation</h3>\n      </div>\n      <div class=\"col-xs-12\">\n        <p class=\"heading center\" style=\"color:rgb(96, 84, 182); font-weight:600; text-align:center;margin: 20px 0px;\">{{ activateMessage }}</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/activate/activate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateComponent = (function () {
    function ActivateComponent(activatedRoute, authService, router) {
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.router = router;
    }
    ActivateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var token = this.activatedRoute.snapshot.params['token'];
        this.authService.activateAccount(token).subscribe(function (data) {
            _this.activateMessage = data.message + ' ...Redirecting';
            setTimeout(function () {
                _this.router.navigate(['/']);
            }, 3000);
        }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        });
    };
    ActivateComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__("../../../../../src/app/components/activate/activate.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/activate/activate.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_auth_service__["a" /* AuthService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], ActivateComponent);
    return ActivateComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/activate.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"width:90%;margin-left:5%;\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body list\">\n          <div class=\"m-b-md\">\n            <h4>\n              Assign Test\n            </h4>\n            <small>\n              The list of all assign tests are mentioned below\n            </small>\n          </div>\n          <div class=\"row\" style=\"padding-bottom:  10px;\" id=\"editable_length\">\n          </div>\n          <div class=\"table-responsive project-list\">\n            <table class=\"table table-striped\" style=\"border: 1px solid #ddd;padding: 5px\">\n              <tbody>\n                <tr *ngFor=\"let test of tests;let i=index\">\n                  <td colspan=\"1\" class=\"t-index\">{{i+1}}</td>\n                  <td colspan=\"4\" class=\"t-name\">{{test.testName}}</td>\n                  <td colspan=\"4\" class=\"t-duration\">Duration: {{test.duration}} Minutes</td>\n                  <td colspan=\"2\" class=\"t-action\">\n                    <button class=\"button med dark-blue\" (click)=\"onTestClick(test)\" *ngIf=\"!show[i]\">Take Test</button>\n                    <button class=\"button med dark-blue\" (click)=\"OnResume(test)\" *ngIf=\"show[i]\">Resume Test</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 20 of 100 entries</div>\n            </div>\n            <div class=\"col-sm-7\">\n              <div class=\"dataTables_paginate paging_simple_numbers pull-right\" id=\"example2_paginate\">\n                <ul class=\"pagination\">\n                  <li class=\"paginate_button previous\" id=\"example2_previous\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a>\n                  </li>\n                  <li class=\"paginate_button active\">\n                    <a aria-controls=\"example2\">1</a>\n                  </li>\n                  <li class=\"paginate_button next\" id=\"example2_next\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">Next</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Footer-->\n<div id=\"footer\" class=\"app-footer\">\n  <div class=\"section-content\">\n    <div class=\"col-sm-6\">\n      <ul class=\"list-inline no-margins\">\n        <li class=\"hidden-xs\">\n          <a>cfeindia</a>\n        </li>\n        <li>\n          <a>Blogs</a>\n        </li>\n        <li>\n          <a>Careers</a>\n        </li>\n        <li>\n          <a>Documentation</a>\n        </li>\n        <li>\n          <button class=\"btn  btn-xs btn-info btn-outline\" style=\"font-weight:  600;\"> Support</button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-6\">\n      <ul class=\"list-inline pull-right no-margins\">\n        <li>\n          <a>Terms of Service</a>\n        </li>\n        <li>\n          <a>Privacy</a>\n        </li>\n        <li>\n          <a>Cookies</a>\n        </li>\n        <li>© 2018 cfeindia.com</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssignedTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignedTestComponent = (function () {
    function AssignedTestComponent(serverService, router, responseService) {
        var _this = this;
        this.serverService = serverService;
        this.router = router;
        this.responseService = responseService;
        this.tests = [];
        this.show = [];
        this.testsSubscription = this.serverService.testsSub.subscribe(function (tests) {
            _this.tests = tests;
        });
        this.showSubscription = this.serverService.showSub.subscribe(function (show) {
            _this.show = show;
        });
    }
    AssignedTestComponent.prototype.ngOnInit = function () {
        this.serverService.reemitData();
    };
    AssignedTestComponent.prototype.onTestClick = function (test) {
        this.serverService.quesIds = test.questions;
        localStorage.setItem('duration', test.duration);
        localStorage.setItem('testID', test._id);
        localStorage.setItem('practiceTest', test.practice);
        // this.responseService.getTestId(test);
        this.router.navigate(['/test/instruction']);
    };
    // -----------------------------------------
    // Resume test notification
    // -----------------------------------------
    AssignedTestComponent.prototype.OnResume = function (test) {
        var _this = this;
        var isodate = new Date().toISOString();
        var user = JSON.parse(localStorage.getItem('user'));
        var resumedata = {
            candidateId: user.username,
            testId: test._id,
            resumeTime: isodate,
            state: 'resume'
        };
        // console.log(resumedata);
        this.responseService.resumeTest(resumedata).subscribe(function (data) {
            console.log('response from BE', data);
            if (data.success) {
                _this.router.navigate(['/test/testportal']);
            }
            else {
                alertify.alert(data.msg);
            }
        }, function (err) {
            console.log(err);
        });
        // this.router.navigate(['/test/testportal']);
    };
    AssignedTestComponent.prototype.ngOnDestroy = function () {
        this.showSubscription.unsubscribe();
        this.testsSubscription.unsubscribe();
    };
    AssignedTestComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-assigned-test',
            template: __webpack_require__("../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/assigned-test/assigned-test.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_response_service__["a" /* ResponseService */]) === 'function' && _c) || Object])
    ], AssignedTestComponent);
    return AssignedTestComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/assigned-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal-footerc,.modal-headerc{\n    background-color: #fff;\n    \n}\n.modal{\n    background: rgba(0,0,0,0.45);\n    z-index: 10000;\n}\n.modal-headerc{\n    padding: 10px;\n    border-bottom: 1px solid #e5e5e5;\n}\n.modal-footerc{\n    padding: 6px;\n    text-align: right;\n    border-top: 1px solid #e5e5e5;\n}\n.modal-title{\n    display: inline-block;\n    font-size: 20px;\n}\n.close-btn{\n    color: red;\n}\n\n.col-xs-6{\n        width: 40%;\n}\n.col-xs-5{\n    width:35%\n}\n.col-xs-1{\n    width: 6%;\n}\n/* .result-col.col-md-6{\n    padding:1px;\n} */\n@media (min-width: 768px)\n{    \n    .modal-dialog {\n    width: 65%;\n}\n\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n<div class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"width:90%;margin-left:5%;\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body list\">\n          <div class=\"m-b-md\">\n            <h4>\n              Complete Test\n            </h4>\n            <small>\n              The list of all complete tests are mentioned below\n            </small>\n          </div>\n          <div class=\"row\" style=\"padding-bottom:  10px;\" id=\"editable_length\">\n          </div>\n          <div class=\"table-responsive project-list\">\n            <table class=\"table table-striped\" style=\"border: 1px solid #ddd;padding: 5px\">\n              <tbody>\n                <tr *ngFor=\"let test of completedTests;let i=index\">\n                  <td colspan=\"1\" class=\"t-index\">{{i+1}}</td>\n                  <td colspan=\"4\" class=\"t-name\">{{test.testName}}</td>\n                  <td colspan=\"4\" class=\"t-duration\">Duration: {{test.duration}} Minutes</td>\n                  <td colspan=\"2\" class=\"t-action\">\n                    <button class=\"button med dark-blue\" (click)=\"onViewResult(i)\">View Report</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-xs-5\">\n              <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 20 of 100 entries</div>\n            </div>\n            <div class=\"col-xs-7\">\n              <div class=\"dataTables_paginate paging_simple_numbers pull-right\" id=\"example2_paginate\">\n                <ul class=\"pagination\">\n                  <li class=\"paginate_button previous\" id=\"example2_previous\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a>\n                  </li>\n                  <li class=\"paginate_button active\">\n                    <a aria-controls=\"example2\">1</a>\n                  </li>\n                  <li class=\"paginate_button next\" id=\"example2_next\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">Next</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"showDialog\" class=\"modal\" [ngClass]=\"{show:'showDialog'}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"gridModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-headerc\">\n        <h5 class=\"modal-title\">Result of {{testName}}</h5>\n        <button type=\"button\" (click)=\"onCloseDialog()\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span class=\"close-btn\">×</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"container-fluid bd-example-row\">\n          <div class=\"row\">\n            <div class=\"result-col col-md-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Created At</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.createdAt|date: 'short'}}</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Updated At</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.updatedAt|date: 'short'}}</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Attempt Questions</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.response.length}}</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Score</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.score}}</dd>\n                </div>\n              </div>\n            </div>\n            <div class=\"result-col col-md-6\">\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Test ID</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.testId}}</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Finish Mode</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.finishMode}}</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Time Spent</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.timeSpent/1000}} Sec.</dd>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-xs-6\">\n                  <dt>Test Duration</dt>\n                </div>\n                <div class=\"col-xs-1\">:</div>\n                <div class=\"col-xs-5\">\n                  <dd>{{resultToShow?.totalAllocatedTime/60000}} Min.</dd>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footerc\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"onCloseDialog()\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- Footer-->\n<div id=\"footer\" class=\"app-footer\">\n  <div class=\"section-content\">\n    <div class=\"col-xs-6\">\n      <ul class=\"list-inline no-margins\">\n        <li class=\"hidden-xs\">\n          <a>cfeindia</a>\n        </li>\n        <li>\n          <a>Blogs</a>\n        </li>\n        <li>\n          <a>Careers</a>\n        </li>\n        <li>\n          <a>Documentation</a>\n        </li>\n        <li>\n          <button class=\"btn  btn-xs btn-info btn-outline\" style=\"font-weight:  600;\"> Support</button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-xs-6\">\n      <ul class=\"list-inline pull-right no-margins\">\n        <li>\n          <a>Terms of Service</a>\n        </li>\n        <li>\n          <a>Privacy</a>\n        </li>\n        <li>\n          <a>Cookies</a>\n        </li>\n        <li>© 2018 cfeindia.com</li>\n      </ul>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopmletedTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CopmletedTestComponent = (function () {
    function CopmletedTestComponent(serverService) {
        this.serverService = serverService;
        this.completedTests = [];
        this.result = [];
        this.showDialog = false;
        this.resultToShow = {};
    }
    CopmletedTestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testsSubscription = this.serverService.completedTestsSub.subscribe(function (tests) {
            _this.completedTests = tests;
        });
        this.resultSubscription = this.serverService.completedTestsResultSub.subscribe(function (result) {
            _this.result = result;
        });
        this.serverService.reemitData();
    };
    CopmletedTestComponent.prototype.onViewResult = function (index) {
        this.showDialog = true;
        this.resultToShow = this.result[index];
        if (this.completedTests[index]._id == this.result[index].testId)
            this.testName = this.completedTests[index].testName;
    };
    CopmletedTestComponent.prototype.onCloseDialog = function () {
        this.showDialog = false;
    };
    CopmletedTestComponent.prototype.ngOnDestroy = function () {
        this.testsSubscription.unsubscribe();
    };
    CopmletedTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-copmleted-test',
            template: __webpack_require__("../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/copmleted-test/copmleted-test.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === 'function' && _a) || Object])
    ], CopmletedTestComponent);
    return CopmletedTestComponent;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/copmleted-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\nmargin-top: 10%;\n}\n\np, h2 {\n  text-align: center;\n}\n\n#box {\n  margin: 30px auto;\n  border: 2px solid #66BFBF;\n  padding: 20px;\n  padding-bottom: 10px;\n  width: 80%;\n}\n\n.btn {\n  height: 50px;\n  background-color: #66BFBF;\n  color: white;\n}\n\n.btn:hover {\n  background-color: powderblue;\n  color: rgb(255, 255, 255);\n}\n\n\n\n#testNav{\n  padding: 0!important;\n  box-shadow: none!important;\n  background:inherit;\n}\n.navV {\n  display: block;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav-tabsV {\n  border-bottom: 0px solid black!important;\n}\n.nav-tabsV .nav-linkV {\n  border: 1px solid transparent;\n  border-top-left-radius: .25rem;\n  border-top-right-radius: .25rem;\n}\n.nav-itemV.nav-linkV {\n  color: #495057;\n  margin-bottom: 0px!important;\n  z-index: 12;\n}\n.nav-linkV {\n  display: block;\n  padding: .5rem 1rem;\n}\n.nav-linkV:hover{\n\n\n}\n.nav-linkV.activeV {\n  color: #495057;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\na{\n  text-decoration: none;\n  font-size: 17px;\n  background-color: transparent;\n}\n.tab-contentV{\n  margin: -1px;\n  border: 1px solid #dee2e6;\n  width:inherit;\n  height: 400px;\n  border-radius: 1%;\n  background-color: #fff;\n  box-shadow: 0 30px 80px #e1e1e1;\n  padding: 3%;\n  overflow: auto;\n  \n}\n/* .tab-contentV::-webkit-scrollbar {\n  width:10px;\n}\n.tab-contentV::-webkit-scrollbar-thumb {\nbackground-color:#36626A;\noutline: 1px solid slategrey;\n  border-radius: 30%;\n  \n}\n.tab-contentV::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\n  border-radius: 15%;\n} */\n.nav-tabsV{\n border-bottom:0px solid black!important;\n}\n\n.nav-itemV.nav-linkV{\n  color: #495057;\n  margin-bottom: 0px!important;\n  z-index: 12;\n}\nbody{\n  background-color: #f9f9f9!important;\n}\n\n.containerV {\n  max-width: 95%!important;\n  margin:auto;\n  position: fixed;\n  top: 65px;\n  left:4%;\n  right: 4%;\n\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<app-navuser></app-navuser>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_results_service__ = __webpack_require__("../../../../../src/app/services/results.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DashboardComponent = (function () {
    function DashboardComponent(authService, activeRoute, router, serverService, responseService, resultsService) {
        this.authService = authService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.serverService = serverService;
        this.responseService = responseService;
        this.resultsService = resultsService;
        this.show = [];
        this.tests = [];
        this.practiceTests = [];
        this.userDetails = JSON.parse(localStorage.getItem('user'));
        this.editInfo = false;
        this.completed = [];
        this.completedTests = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        localStorage.removeItem('testid');
        /**
         * @desc calling server sevice to fetch assigned test
         * @return array of tests
         **/
        if (this.userDetails.status === 'Active') {
            this.userActive = true;
            this.serverService.fetchAssignedTests();
        }
        else {
            this.userActive = false;
            this.containTest = false;
        }
    };
    DashboardComponent.prototype.show_Accordingly = function () {
        if (this.userActive && this.containTest)
            return true;
        else
            return false;
    };
    DashboardComponent.prototype.actionClicked = function () {
        if (this.editInfo === false) {
            this.editInfo = true;
        }
        else {
            this.editInfo = false;
        }
    };
    DashboardComponent.prototype.OnResults = function (selectedTest) {
        var _this = this;
        console.log('selected', selectedTest._id);
        var candidate = this.userDetails.username;
        this.resultsService.completedTests(selectedTest._id, candidate).subscribe(function (result) {
            console.log('result of this candidate:', result);
            _this.resultsService.selectedTest = selectedTest;
            _this.resultsService.testRespose = result;
        }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        }, function () {
            _this.router.navigate(['/test-details']);
        });
    };
    DashboardComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_results_service__["a" /* ResultsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_app_services_results_service__["a" /* ResultsService */]) === 'function' && _f) || Object])
    ], DashboardComponent);
    return DashboardComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/practice-test/practice-test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.assign-test {\n    background-color: #fff;\n    padding: 1px 3px 2px;\n    border-radius: 3px;\n    /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.0588235); */\n  }\n  \n  .test-list table {\n    width: 100%;\n    border-collapse: separate;\n    border-spacing: 0px 0;\n  }\n  \n  \n  .test-list table tbody {\n    background-color: #eeeeef;\n  }\n  .test-list table tr:nth-child(odd) {\n   background: #ced4d8;\n  }\n  .test-list table tr:nth-child(even) {\n    background:#eaeaea;\n  }\n  .test-list table tr {\n    padding: 10px;\n    border-bottom: 1px solid #d4d3d3;\n    height: 50px;\n    background: #eee;\n    margin-bottom: 1%;\n  }\n  .test-list table tr:last-child {\n    border: none;\n  }\n  .test-list table td.t-index {\n    padding: 5px 15px;\n    font-weight: 600;\n    width: 6%;\n  }\n  .test-list table td.t-name {\n    font-size: 120%;\n    font-weight: 600;\n    color: #286090;\n  }\n  .test-list table td.t-duration {\n    color: #696969;\n    font-size: 90%;\n  }\n  .test-list table td.t-action {\n    float: right;\n    padding-right: 10px;\n    margin: 8px auto;\n  }\n  button.med {\n    padding: 7px 30px;\n  }\n  .dark-blue {\n    background: #36626A;\n    border: #36626A;\n    color: #fff;\n  }\n  .button{\n        border-radius: 3px;\n  }\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/practice-test/practice-test.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper -->\n\n<div class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\" style=\"width:90%;margin-left:5%;\">\n      <div class=\"hpanel\">\n\n        <div class=\"panel-body list\">\n          <div class=\"m-b-md\">\n            <h4>\n              Practice Test\n            </h4>\n            <small>\n              The list of all practice tests are mentioned below\n            </small>\n          </div>\n          <div class=\"row\" style=\"padding-bottom:  10px;\" id=\"editable_length\">\n          </div>\n          <div class=\"table-responsive project-list\">\n            <table class=\"table table-striped\" style=\"border: 1px solid #ddd;padding: 5px\">\n              <tbody>\n                <tr *ngFor=\"let test of practiceTests;let i=index\">\n                  <td colspan=\"1\" class=\"t-index\">{{i+1}}</td>\n                  <td colspan=\"4\" class=\"t-name\">{{test.testName}}</td>\n                  <td colspan=\"4\" class=\"t-duration\">Duration: {{test.duration}} Minutes</td>\n                  <td colspan=\"2\" class=\"t-action\">\n                    <button class=\"button med dark-blue\" (click)=\"onTestClick(test)\" *ngIf=\"!show[i]\">Take Test</button>\n                    <button class=\"button med dark-blue\" (click)=\"OnResume(test)\" *ngIf=\"show[i]\">Resume Test</button>\n                  </td>\n                </tr>\n\n              </tbody>\n            </table>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-5\">\n              <div class=\"dataTables_info\" id=\"example2_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 20 of 100 entries</div>\n            </div>\n            <div class=\"col-sm-7\">\n              <div class=\"dataTables_paginate paging_simple_numbers pull-right\" id=\"example2_paginate\">\n                <ul class=\"pagination\">\n                  <li class=\"paginate_button previous\" id=\"example2_previous\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"0\" tabindex=\"0\">Previous</a>\n                  </li>\n                  <li class=\"paginate_button active\">\n                    <a aria-controls=\"example2\">1</a>\n                  </li>\n                  <li class=\"paginate_button next\" id=\"example2_next\">\n                    <a aria-controls=\"example2\" data-dt-idx=\"6\" tabindex=\"0\">Next</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n\n\n<!-- Footer-->\n<div id=\"footer\" class=\"app-footer\">\n  <div class=\"section-content\">\n    <div class=\"col-sm-6\">\n      <ul class=\"list-inline no-margins\">\n        <li class=\"hidden-xs\">\n          <a>cfeindia</a>\n        </li>\n        <li>\n          <a>Blogs</a>\n        </li>\n        <li>\n          <a>Careers</a>\n        </li>\n        <li>\n          <a>Documentation</a>\n        </li>\n        <li>\n          <button class=\"btn  btn-xs btn-info btn-outline\" style=\"font-weight:  600;\"> Support</button>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"col-sm-6\">\n      <ul class=\"list-inline pull-right no-margins\">\n        <li>\n          <a>Terms of Service</a>\n        </li>\n        <li>\n          <a>Privacy</a>\n        </li>\n        <li>\n          <a>Cookies</a>\n        </li>\n        <li>© 2018 cfeindia.com</li>\n      </ul>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/practice-test/practice-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PracticeTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PracticeTestComponent = (function () {
    function PracticeTestComponent(serverService, router, responseService) {
        var _this = this;
        this.serverService = serverService;
        this.router = router;
        this.responseService = responseService;
        this.practiceTests = [];
        this.show = [];
        this.testsSubscription = this.serverService.practiceTestsSub.subscribe(function (tests) {
            _this.practiceTests = tests;
        });
        this.showSubscription = this.serverService.showSub.subscribe(function (show) {
            _this.show = show;
        });
    }
    PracticeTestComponent.prototype.ngOnInit = function () {
        this.serverService.reemitData();
    };
    PracticeTestComponent.prototype.onTestClick = function (test) {
        this.serverService.quesIds = test.questions;
        localStorage.setItem('duration', test.duration);
        localStorage.setItem('testID', test._id);
        localStorage.setItem('practiceTest', test.practice);
        this.router.navigate(['/test/instruction']);
    };
    // -----------------------------------------
    // Resume test notification
    // -----------------------------------------
    PracticeTestComponent.prototype.OnResume = function (test) {
        var _this = this;
        var isodate = new Date().toISOString();
        var user = JSON.parse(localStorage.getItem('user'));
        var resumedata = {
            candidateId: user.username,
            testId: test._id,
            resumeTime: isodate,
            state: 'resume'
        };
        this.responseService.resumeTest(resumedata).subscribe(function (data) {
            console.log('response from BE', data);
            if (data.success) {
                _this.router.navigate(['/test/testportal']);
            }
            else {
                alertify.alert(data.msg);
            }
        }, function (err) {
            console.log(err);
        });
        // this.router.navigate(['/test/testportal']);
    };
    PracticeTestComponent.prototype.ngOnDestroy = function () {
        this.showSubscription.unsubscribe();
        this.testsSubscription.unsubscribe();
    };
    PracticeTestComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-practice-test',
            template: __webpack_require__("../../../../../src/app/components/dashboard/practice-test/practice-test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/practice-test/practice-test.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_server_service__["a" /* ServerService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_response_service__["a" /* ResponseService */]) === 'function' && _c) || Object])
    ], PracticeTestComponent);
    return PracticeTestComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/practice-test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"row\">\n    <div style=\"padding-top:2%;\" class=\"col-md-3\">\n      <img style=\"width:200px;height:200px\" class=\"img-responsive img-thumbnail \" src=\"http://images.asianage.com/images/aa-Cover-5tujqdum4b4isn8u7vdcnd54t1-20180113235252.Medi.jpeg\">\n    </div>\n    <div class=\"col-md-9\">\n      <div *ngIf=\"user\">\n        <form class=\"form-horizontal\">\n          <div class=\"tab-content\">\n            <div id=\"step1\" class=\"p-m tab-pane active\">\n\n              <div>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-5\">\n                    <label>Name</label>\n                    <input name=\"name\" type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Ms Dhoni\" required>\n\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                  <div class=\"form-group col-md-5\">\n                    <label>E-Mail</label>\n                    <input class=\"form-control\" id=\"email\" name=\"email\" placeholder=\"ms@csk.com\" type=\"email\" [(ngModel)]=\"user.email\" required>\n\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n\n\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-5 \">\n                    <label for=\"gender\">Gender</label>\n                    <select class=\"form-control\" name=\"gender\" id=\"gender\" [(ngModel)]=\"user.gender\">\n                      <option value=\"Male\">Male</option>\n                      <option value=\"Female\">Female</option>\n                      <option value=\"Other\">Other</option>\n                    </select>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                  <div class=\"form-group col-md-5\">\n                    <label for=\"dob\">Date-Of-Birth</label>\n                    <input class=\"form-control\" id=\"dob\" name=\"dob\" placeholder=\"02-02-78\" type=\"date\" [(ngModel)]=\"user.dob\" required>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                </div>\n\n                <div class=\"row\">\n                  <div class=\"form-group col-md-5\">\n                    <label>Phone</label>\n                    <input name=\"phone\" type=\"number\" class=\"form-control\" id=\"phone\" placeholder=\"999999999\" [(ngModel)]=\"user.phone\" required>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                  <div class=\"form-group col-md-5\">\n                    <label>Address</label>\n                    <input class=\"form-control\" id=\"address\" name=\"address\" placeholder=\"Address\" type=\"text\" [(ngModel)]=\"user.address\" required>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-md-5\">\n                    <label>ImageUrl</label>\n                    <input name=\"image\" type=\"text\" class=\"form-control\" id=\"image\" placeholder=\"imageurl\" [(ngModel)]=\"user.image\" required>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                  <div class=\"form-group col-md-5\">\n                    <label>Pincode</label>\n                    <input class=\"form-control\" id=\"pincode\" name=\"pincode\" placeholder=\"110049\" type=\"number\" [(ngModel)]=\"user.pincode\" required>\n                  </div>\n                  <div class=\"col-md-1\"></div>\n\n                </div>\n\n              </div>\n\n              <div class=\"text-right m-t-xs\">\n                <button class=\"btn btn-primary next\" (click)=\"onSave()\" type=\"submit\">Save</button>\n              </div>\n\n            </div>\n\n\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasicinfoComponent = (function () {
    function BasicinfoComponent(authService) {
        this.authService = authService;
        this.id = JSON.parse(localStorage.getItem('user')).id;
    }
    BasicinfoComponent.prototype.ngOnInit = function () {
    };
    BasicinfoComponent.prototype.onSave = function () {
        var _this = this;
        this.authService.updateProfile({
            name: "Hello",
            email: "vishavjeet@cfeindia.com",
            gender: "qeqweqweqwe",
            dob: "qeqweqweqwe",
            phone: 12123123123,
            address: "asdasdasd",
            image: "asdasdasd",
            pincode: 121331
        }).subscribe(function (data) {
            _this.user = data;
            console.log("//////////////////", data);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], BasicinfoComponent.prototype, "user", void 0);
    BasicinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-basicinfo',
            template: __webpack_require__("../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/profile/basicinfo/basicinfo.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], BasicinfoComponent);
    return BasicinfoComponent;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/basicinfo.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"hpanel\">\n        <div class=\"panel-body p-md\">\n          <div class=\"row m-b-xl\">\n            <div class=\"hpanel\">\n              <ul class=\"nav nav-tabs\">\n                <li class=\"\" [class.active]=\"basicInfoActive\" id=\"questions\">\n                  <a data-toggle=\"tab\" aria-expanded=\"false\" (click)=\"onBasicInfo()\">\n                    <i class=\"fa fa-user\"></i> Profile\n                  </a>\n                </li>\n                <li class=\"\" [class.active]=\"qualificationActive\">\n                  <a (click)=\"onQualification()\" data-toggle=\"tab\" aria-expanded=\"false\">\n                    <i class=\"fa fa-book\"></i>Educational Qualifications\n                  </a>\n                </li>\n                <li class=\"\" [class.active]=\"skillActive\">\n                  <a data-toggle=\"tab\" (click)=\"onSkill()\" aria-expanded=\"true\">\n                    <i class=\"fa fa-flask\"></i>Skills\n                  </a>\n                </li>\n              </ul>\n              <div class=\"tab-pane\">\n                <div id=\"tab-1\" class=\"panel-body\" *ngIf=\"basicInfoActive\">\n                  <app-basicinfo [user]=\"userProfile\"></app-basicinfo>\n\n                </div>\n              </div>\n\n              <div class=\"tab-pane\">\n                <div class=\"panel-body\" style=\"box-shadow: none !important\" *ngIf=\"qualificationActive\">\n                  <app-qualifications [user]=\"userProfile\"></app-qualifications>\n                </div>\n              </div>\n              <div id=\"tab-4\" class=\"tab-pane\">\n                <div class=\"panel-body\" *ngIf=\"skillActive\">\n                  <app-skills [user]=\"userProfile\"></app-skills>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = (function () {
    function ProfileComponent(authService) {
        this.authService = authService;
        this.id = JSON.parse(localStorage.getItem('user')).id;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile(this.id).subscribe(function (data) {
            _this.userProfile = data;
            console.log(data);
        });
        this.onBasicInfo();
    };
    ProfileComponent.prototype.onBasicInfo = function () {
        this.basicInfoActive = true;
        this.qualificationActive = false;
        this.skillActive = false;
    };
    ProfileComponent.prototype.onQualification = function () {
        this.basicInfoActive = false;
        this.qualificationActive = true;
        this.skillActive = false;
    };
    ProfileComponent.prototype.onSkill = function () {
        this.basicInfoActive = false;
        this.qualificationActive = false;
        this.skillActive = true;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/profile/profile.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <!-- <div class=\"col-md-8\"> -->\n  <form class=\"form-horizontal\">\n\n\n\n    <div class=\"tab-content\">\n      <div id=\"step1\" class=\"p-m tab-pane active\">\n        <label>UnderGraduate:</label>\n        <div class=\"form-group row\">\n          <p class=\"col-md-2 control-label\">Percentage</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"76%\">\n          </div>\n          <p class=\"col-md-2 control-label\">Passing Year</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"2018\">\n          </div>\n          <p class=\"col-md-2 control-label\">University</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"MDU\">\n          </div>\n        </div>\n\n        <label>12th Standard:</label>\n        <div class=\"form-group row\">\n          <p class=\"col-md-2 control-label\">Percentage</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"76%\">\n          </div>\n          <p class=\"col-md-2 control-label\">Passing Year</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"2018\">\n          </div>\n          <p class=\"col-md-2 control-label\">Board</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"CBSE\">\n          </div>\n        </div>\n        <label>10th Standard:</label>\n        <div class=\"form-group row\">\n          <p class=\"col-md-2 control-label\">Percentage</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"76%\">\n          </div>\n          <p class=\"col-md-2 control-label\">Passing Year</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"2018\">\n          </div>\n          <p class=\"col-md-2 control-label\">Board</p>\n          <div class=\"col-md-2\">\n            <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"CBSE\">\n          </div>\n        </div>\n\n        <div class=\"text-right m-t-xs\">\n          <button class=\"btn btn-primary next\" type=\"submit\">Save</button>\n        </div>\n\n      </div>\n\n\n    </div>\n  </form>\n  <!-- </div> -->\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QualificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QualificationsComponent = (function () {
    function QualificationsComponent() {
    }
    QualificationsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], QualificationsComponent.prototype, "user", void 0);
    QualificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-qualifications',
            template: __webpack_require__("../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/profile/qualifications/qualifications.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], QualificationsComponent);
    return QualificationsComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/qualifications.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <form class=\"form-horizontal\">\n\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"form-group col-md-4\">\n        <label>Programming Language</label>\n        <input name=\"testName\" type=\"text\" class=\"form-control\" id=\"testName\" placeholder=\"c++,c.python\" required>\n      </div>\n      <div class=\"col-md-1\"></div>\n      <div class=\"form-group col-md-4\">\n        <label>Database</label>\n        <input class=\"form-control\" id=\"category\" name=\"category\" placeholder=\"MongoDb\" type=\"text\" required>\n      </div>\n      <div class=\"col-md-1\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"form-group col-md-4\">\n        <label>Operating System</label>\n        <input name=\"testName\" type=\"text\" class=\"form-control\" id=\"testName\" placeholder=\"Linux\" required>\n\n      </div>\n      <div class=\"col-md-1\"></div>\n\n      <div class=\"form-group col-md-4\">\n        <label>Software</label>\n        <input class=\"form-control\" id=\"category\" name=\"category\" placeholder=\"Software\" type=\"text\" required>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-2\"></div>\n      <div class=\"form-group col-md-4\">\n        <label>Mobile Development</label>\n        <input name=\"testName\" type=\"text\" class=\"form-control\" id=\"testName\" placeholder=\"IOS\" required>\n\n      </div>\n      <div class=\"col-md-1\"></div>\n\n      <div class=\"form-group col-md-4\">\n        <label>Web Developmnt</label>\n        <input class=\"form-control\" id=\"category\" name=\"category\" placeholder=\"NodeJs,HTML.....\" type=\"text\" required>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </div>\n    <div class=\"text-right m-t-xs\">\n      <button class=\"btn btn-primary next\" type=\"submit\">Save</button>\n    </div>\n  </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/profile/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SkillsComponent = (function () {
    function SkillsComponent() {
    }
    SkillsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SkillsComponent.prototype, "user", void 0);
    SkillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__("../../../../../src/app/components/dashboard/profile/skills/skills.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/profile/skills/skills.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], SkillsComponent);
    return SkillsComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-container\" style=\"padding-top:2%\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"text-center \">\n        <img src=\"../../assets/images/logo-lg.png\" alt=\"cfex_india\" class=\"logo-center\">\n      </div>\n      <div class=\"hpanel\">\n        <div class=\"panel-body\" style=\"background: #f6f6f6;\">\n          <h3 class=\"p_col\">Log in to your account</h3>\n          <form novalidate (ngSubmit)=\"onLoginSubmit(f.valid)\" #f=\"ngForm\" class=\"form-horizontal\" id=\"validate-form\">\n            <input name=\"_csrf\" type=\"hidden\" value=\"spsnCkeoxxWA6m9MBC3W1WTqG5eZFVRddlqiOWi4EsA=\">\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\">\n                  <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                </div>\n                <input name=\"email\" type=\"text\" class=\"form-control inp-mod\" placeholder=\"Email\" required [(ngModel)]=\"email\" #email1=\"ngModel\">\n                <div *ngIf=\"email1.errors && (f.submitted||email1.dirty)\">\n                  <h5 *ngIf=\"email1.errors.required\" class=\"inputError\">Email is required !</h5>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <div class=\"input-group-addon\">\n                  <i class=\"fa fa-lock\" aria-hidden=\"true\"></i>\n                </div>\n                <input name=\"password\" type=\"password\" class=\"form-control inp-mod\" id=\"exampleInputPassword1\" placeholder=\"Password\" required\n                  [(ngModel)]=\"password\" #password1=\"ngModel\">\n                <div *ngIf=\"password1.errors&& (f.submitted||password1.dirty)\">\n                  <h5 *ngIf=\"password1.errors.required\" class=\"inputError\">Password is required !</h5>\n                </div>\n              </div>\n            </div>\n            <div>\n              <button class=\"btn btn-primary btn-md btn-block btn-mod\" name=\"commit\" tabindex=\"3\" type=\"submit\" value=\"Log In\">Log In</button>\n            </div>\n          </form>\n          <div class=\"login-footer\">\n            <a class=\"panel-footer-mod\" [routerLink]=\"['/register']\">Don't have Account? &nbsp;\n              <span style=\"color: #1c2cea;font-weight:  bold;\">Sign Up</span>\n            </a>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(authService, router, serverService, responseService) {
        this.authService = authService;
        this.router = router;
        this.serverService = serverService;
        this.responseService = responseService;
        this.displaybutton = false;
    }
    /*********************************************
     ** @function used
     ** onLoginSubmit() - to login and authenticate
     ** generateLink() - to generate new reset pwd link
     ************************************************/
    LoginComponent.prototype.ngOnInit = function () {
        // if it has user detail clear it
        localStorage.clear();
    };
    LoginComponent.prototype.onLoginSubmit = function (validity) {
        var _this = this;
        // assigning username, password
        var user = {
            email: this.email,
            password: this.password
        };
        /**
         * @desc Authenticating login details with authService
         * @param email, password  $window.alert - message to be displayed
         * @return bool - success or failure
         */
        if (validity) {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.expired) {
                    _this.displaybutton = true;
                    alertify.alert(data.msg);
                }
                else {
                    _this.authService.storeUserData(data.token, data.user);
                    alertify.notify('You are logged in', 'success', 5);
                    localStorage.setItem('status', data.user.status);
                    _this.router.navigate(['/dashboard']);
                }
            }, function (err) {
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    LoginComponent.prototype.generateLink = function (validity) {
        var user = {
            email: this.email,
            password: this.password
        };
        console.log(user);
        if (validity) {
            this.authService.generatelink(user).subscribe(function (data) {
                // console.log(data)
                alertify.alert(data.msg);
                // this.displaybutton = false;
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    LoginComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navstart/navstart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navstart/navstart.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-custon\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\n        aria-expanded=\"false\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" href=\"#\">CFE India</a>\n    </div>\n\n    <!-- Collect the nav links, forms, and other content for toggling -->\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n\n      <ul class=\"nav navbar-nav navbar-right\">\n        <!-- <li [routerLinkActive] =\"['active']\" ><button class=\"button dark-blue\" [routerLink] =\"['/']\">Login </button></li> -->\n        <!-- <li [routerLinkActive] =\"['active']\"><button class=\"button dark-blue\" [routerLink] =\"['register']\">Register </button></li> -->\n        <li class=\"nav-link\" [routerLinkActive]=\"['active']\">\n          <a class=\"link-text link-icon bg-gray\" [routerLink]=\"['/register']\">\n            <span class=\"ic\">\n              <i class=\"ion-paper-airplane\"></i>\n            </span>\n            &nbsp; Register\n\n          </a>\n\n        </li>\n\n      </ul>\n    </div>\n    <!-- /.navbar-collapse -->\n  </div>\n  <!-- /.container-fluid -->\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/navstart/navstart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavstartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavstartComponent = (function () {
    function NavstartComponent() {
    }
    NavstartComponent.prototype.ngOnInit = function () {
    };
    NavstartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navstart',
            template: __webpack_require__("../../../../../src/app/components/navstart/navstart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navstart/navstart.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NavstartComponent);
    return NavstartComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/navstart.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navuser/navuser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-info-menu{\n    position: absolute;\n    display: block;\n    visibility: hidden;\n    opacity: 0;\n    background: #fff;\n    width: 200px;\n    border-radius: 0 0 4px 4px;\n    z-index: 10000;\n    right: 0.3%;\n    top: 7.7%;\n    border: 1px solid #ddd;\n    box-shadow: 0px 1px 26px 0px #ddd;\n    transition: visibility 0.8s ,opacity 0.5s;\n}\n\n.info-menu-item{\n    display: block;\n    width: 100%;\n    margin: 0;\n    padding: 3% 14%;\n    font-size: 15px;\n    transition: background 0.14s ;\n    font-weight:500;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;    \n}\n.show{\n    visibility: visible;\n    opacity: 1;\n}\n.info-menu-item:hover{\n    background: #ddd;\n}\n.info-menu-item:active{\n    background:rgb(26, 67, 130);\n    border: rgb(26, 67, 130);\n    color:#fff;\n    }\n\n.info-menu-item:last-child{\n    padding-bottom: 5%;\n}\n\n.menu-icon{\n    font-size: 20px;\n    margin: 0px 22px 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navuser/navuser.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\">\n  <div id=\"logo\" class=\"cfe_logo\" style=\"color:1c2cea;\">\n\n    <img src=\"../assets/images/logo.png\" alt=\"cfex_india\" class=\"cfe-logo\">\n\n  </div>\n  <nav role=\"navigation\">\n    <ul class=\"nav navbar-nav \" style=\"position:  absolute;left: 50%;transform: translateX(-50%);\">\n      <li class=\" nav-item\" routerLink='practice-tests' [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link \">Practice Test</a>\n      </li>\n      <li class=\"nav-item\" routerLink='assigned-tests' [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\">Assgin Test</a>\n      </li>\n      <li class=\"nav-item\" routerLink='completed-tests' [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\">Complete Test</a>\n      </li>\n      <!-- <li class=\"nav-item\" routerLink='profile' [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\">Profile</a>\n      </li> -->\n\n    </ul>\n\n    <div class=\"navbar-right\">\n      <ul class=\"nav navbar-nav no-borders\">\n\n        <li class=\"dropdown\">\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"pe-7s-keypad\"></i>\n          </a>\n        </li>\n        <li>\n          <a id=\"sidebar\" (click)=\"onToggleMenu()\" class=\"right-sidebar-toggle\">\n            <i class=\"pe-7s-user\"></i>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</div>\n<div class=\"user-info-menu\" [ngClass]=\"{'show':userMenuOpen}\">\n  <a class=\"info-menu-item\" routerLink='profile' (click)=\"onToggleMenu()\">\n    <i class=\"pe-7s-id menu-icon\"></i>Profile</a>\n  <a class=\"info-menu-item\" (click)=\"onToggleMenu()\">\n    <i class=\"pe-7s-bell menu-icon\"></i>Notifications</a>\n  <a class=\"info-menu-item\" (click)=\"onLogoutClick()\">\n    <i class=\"pe-7s-power menu-icon\"></i>Log Out</a>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/navuser/navuser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavuserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavuserComponent = (function () {
    function NavuserComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userMenuOpen = false;
    }
    NavuserComponent.prototype.ngOnInit = function () { };
    NavuserComponent.prototype.onLogoutClick = function () {
        this.onToggleMenu();
        this.authService.logout();
        localStorage.removeItem('user');
        alertify.notify('You are logged out', 'success', 5);
        this.router.navigate(['/']);
        return false;
    };
    NavuserComponent.prototype.onToggleMenu = function () {
        this.userMenuOpen = !this.userMenuOpen;
    };
    NavuserComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navuser',
            template: __webpack_require__("../../../../../src/app/components/navuser/navuser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navuser/navuser.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], NavuserComponent);
    return NavuserComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/navuser.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/newpassword/newpassword.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/newpassword/newpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navstart>\n</app-navstart>\n<section class=\"main-login\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-xs-12\">\n        <h2 class=\"heading center\" style=\"color:#403F48; font-weight:600; text-align:center;margin: 20px 0px;\">Online Examination System</h2>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"img-container\">\n\n        <img src=\"../../assets/images/login-img.svg\" class=\"img-responsive\" alt=\"\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"col-xs-12\">\n        <div class=\"panel panel-login custom-panel\">\n          <div class=\"panel-body\">\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <form *ngIf=\"hide === true\" style=\"display: block;\">\n                  <h2 style=\"text-align: center;\">{{ data }}</h2>\n                </form>\n                <form novalidate *ngIf=\"hide === false\" style=\"display: block;\" (ngSubmit)=\"onResetPassword(f.valid&&(password1.value==confirmpassword1.value))\"\n                  #f=\"ngForm\">\n                  <h2>New Password</h2>\n\n                  <div class=\"form-group\">\n\n                    <input type=\"password\" [ngClass]=\"{'invalidfield':f.submitted}\" name=\"password\" id=\"password\" tabindex=\"2\" class=\"form-control\"\n                      placeholder=\" New Password\" required pattern=\"(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+\" minlength=\"8\"\n                      maxlength=\"16\" [(ngModel)]=\"password\" #password1=\"ngModel\">\n\n                    <div *ngIf=\"password1.errors&& (f.submitted||password1.dirty)\">\n                      <h5 *ngIf=\"password1.errors.required\" class=\"inputError\">Password is required !</h5>\n                      <h5 *ngIf=\"password1.errors.pattern\" class=\"inputError\">Password should contain at least one special character,one numeric value and one uppercase character\n                        !\n                      </h5>\n                      <h5 *ngIf=\"password1.errors.minlength&&!password1.errors.pattern\" class=\"inputError\">Password must at least 8 characters long !</h5>\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"form-group\">\n\n                    <input type=\"password\" [ngClass]=\"{'ng-invalid':password!==confirmpassword}\" name=\"confirmpassword\" id=\"password1\" tabindex=\"2\"\n                      class=\"form-control\" placeholder=\" Confirm Password\" [(ngModel)]=\"confirmpassword\" #confirmpassword1=\"ngModel\">\n\n                    <div *ngIf=\"f.submitted||confirmpassword1.dirty\">\n                      <h5 *ngIf=\"password1.value!==confirmpassword1.value\" class=\"inputError\">Password doesn't match!</h5>\n                    </div>\n\n                  </div>\n\n\n                  <div class=\"form-group \">\n                    <button type=\"submit \" name=\"password-submit \" id=\"password-submit \" tabindex=\"4 \" class=\"button light-blue\n                      \" value=\"Reset \">Reset Password</button>\n                  </div>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/newpassword/newpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewpasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router_src_router__ = __webpack_require__("../../../router/src/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewpasswordComponent = (function () {
    function NewpasswordComponent(authService, activatedRoute, router) {
        var _this = this;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.hide = true;
        console.log(activatedRoute.snapshot.params['token']);
        var token = activatedRoute.snapshot.params['token'];
        this.authService.resetUser(token).subscribe(function (data) {
            // console.log(data);
            if (data.user !== null) {
                _this.hide = false;
                _this.username = data.user.username;
                console.log(data.user.username);
            }
            else {
                _this.hide = true;
                _this.data = 'The token has been expired!!';
            }
        }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        });
    }
    NewpasswordComponent.prototype.ngOnInit = function () { };
    NewpasswordComponent.prototype.onResetPassword = function (validity) {
        var _this = this;
        var newdata = {
            password: this.password,
            username: this.username
        };
        if (validity) {
            this.authService.savepassword(newdata).subscribe(function (data) {
                console.log(data);
                alertify.alert(data.message);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    NewpasswordComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-newpassword',
            template: __webpack_require__("../../../../../src/app/components/newpassword/newpassword.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/newpassword/newpassword.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router_src_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router_src_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], NewpasswordComponent);
    return NewpasswordComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/newpassword.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "svg {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -250px;\n  margin-left: -400px;\n}\n\n.message-box {\n  height: 200px;\n  width: 380px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -100px;\n  margin-left: 50px;\n  color: rgb(51, 51, 51);\n  font-family: Roboto;\n  font-weight: 300;\n}\n\n.message-box h1 {\n  font-size: 60px;\n  line-height: 46px;\n  margin-bottom: 10px;\n}\n\n.buttons-con .action-link-wrap {\n  margin-top: 40px;\n}\n\n.buttons-con .action-link-wrap a {\n  background: #68c950;\n  padding: 8px 25px;\n  border-radius: 4px;\n  color: rgb(34, 34, 34);\n  font-weight: bold;\n  font-size: 14px;\n  transition: all 0.3s linear;\n  cursor: pointer;\n  text-decoration: none;\n  margin-right: 10px\n}\n\n.buttons-con .action-link-wrap a:hover {\n  background: #5A5C6C;\n  color: #fff;\n}\n\n#Polygon-1,\n#Polygon-2,\n#Polygon-3,\n#Polygon-4,\n#Polygon-4,\n#Polygon-5 {\n  -webkit-animation: float 1s infinite ease-in-out alternate;\n          animation: float 1s infinite ease-in-out alternate;\n}\n\n#Polygon-2 {\n  -webkit-animation-delay: .2s;\n          animation-delay: .2s;\n}\n\n#Polygon-3 {\n  -webkit-animation-delay: .4s;\n          animation-delay: .4s;\n}\n\n#Polygon-4 {\n  -webkit-animation-delay: .6s;\n          animation-delay: .6s;\n}\n\n#Polygon-5 {\n  -webkit-animation-delay: .8s;\n          animation-delay: .8s;\n}\n\n@-webkit-keyframes float {\n  100% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px);\n  }\n}\n\n@keyframes float {\n  100% {\n    -webkit-transform: translateY(20px);\n            transform: translateY(20px);\n  }\n}\n\n@media (max-width: 450px) {\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -250px;\n    margin-left: -190px;\n  }\n  .message-box {\n    top: 50%;\n    left: 50%;\n    margin-top: -100px;\n    margin-left: -190px;\n    text-align: center;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<svg width=\"380px\" height=\"500px\" viewBox=\"0 0 837 1045\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n  xmlns:sketch=\"http://www.bohemiancoding.com/sketch/ns\">\n  <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" sketch:type=\"MSPage\">\n    <path d=\"M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z\" id=\"Polygon-1\" stroke=\"#007FB2\"\n      stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n    <path d=\"M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z\" id=\"Polygon-2\" stroke=\"#EF4A5B\"\n      stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n    <path d=\"M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z\" id=\"Polygon-3\" stroke=\"#795D9C\"\n      stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n    <path d=\"M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z\" id=\"Polygon-4\" stroke=\"#F2773F\"\n      stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n    <path d=\"M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z\" id=\"Polygon-5\" stroke=\"#36B455\"\n      stroke-width=\"6\" sketch:type=\"MSShapeGroup\"></path>\n  </g>\n</svg>\n<div class=\"message-box\">\n  <h1>404</h1>\n  <p>Page not found</p>\n  <div class=\"buttons-con\">\n    <div class=\"action-link-wrap\">\n      <a onclick=\"history.back(-1)\" class=\"link-button link-back-button\">Go Back</a>\n      <a [routerLink]=\"['/dashboard']\" class=\"link-button\">Go to Home Page</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/not-found/not-found.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,300,100,700,500);", ""]);

// module
exports.push([module.i, "body {\n  padding-top: 40px;\n  background:#F7F7F7;\n  color:#666666;\n  font-family: 'Roboto', sans-serif;\n  font-weight:100;\n}\n\nbody{\n  width: 100%;\n  -webkit-animation: HeroBG 20s ease infinite;\n          animation: HeroBG 20s ease infinite;\n}\n.img-center{\n    margin: 0 auto;\n}\n\n@-webkit-keyframes HeroBG {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n@keyframes HeroBG {\n  0% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n  100% {\n    background-position: 0 0;\n  }\n}\n\n\n.panel {\n  border-radius: 5px;\n}\nlabel {\n  font-weight: 300;\n}\n.panel-login {\n   border: none;\n  box-shadow: 0px 0px 49px 14px rgba(188,190,194,0.39);\n  }\n\n.panel-login h2{\n  font-size: 20px;\n  font-weight: 300;\n  margin: 30px;\n}\n.panel-login>.panel-heading {\n  color: #848c9d;\n  background-color: #e8e9ec;\n  border-color: #fff;\n  text-align:center;\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom: 0px;\n  padding: 0px 15px;\n}\n.panel-login .form-group {\n  padding: 0 30px;\n}\n.panel-login>.panel-heading .login {\n  padding: 20px 30px;\n  border-bottom-left-radius: 5px;\n}\n.panel-login>.panel-heading .register {\n  padding: 20px 30px;\n  background: #2d3b55;\n  border-bottom-right-radius: 5px;\n}\n.panel-login>.panel-heading a{\n  text-decoration: none;\n  color: #666;\n  font-weight: 300;\n  font-size: 16px;\n  transition: all 0.1s linear;\n}\n.panel-login>.panel-heading a#register-form-link {\n  color: #fff;\n  width: 100%;\n  text-align: right;\n}\n.panel-login>.panel-heading a#login-form-link {\n  width: 100%;\n  text-align: left;\n}\n\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n  height: 45px;\n  border: 0;\n  font-size: 16px;\n  transition: all 0.1s linear;\n  box-shadow: none;\n  border-radius: 0px;\n  padding: 6px 20px;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n  outline:none;\n  box-shadow: none;\n  border-color: #ccc;\n}\n\n.forgot-password:hover,\n.forgot-password:focus {\n  text-decoration: underline;\n  color: #666;\n}\n/* Common button styles */\n.button {\n    float: left;\n    min-width: 150px;\n    max-width: 250px;\n    display: block;\n    margin: 1em;\n    box-shadow: 0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05);\n    transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n\n.light-blue{\n    background: #66BFBF;\n    border: #66BFBF;\n    color: #fff;\n}\n.dark-blue{\n    background: #66BFBF;\n    border: #66BFBF;\n    color: #fff;\n}\n.button:focus {\n  outline: none;\n}\n.button > span {\n  vertical-align: middle;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"header-bar\">\n    <div class=\"col-sm-8\">\n      <div class=\"logo pull-left\">\n        <img src=\"../assets/images/logo-lg.png\" alt=\"cfex_india\" class=\"logo-center\" height=\"70px\">\n      </div>\n    </div>\n    <div class=\"col-sm-4\">\n      <span class=\"signin-button pull-right\">\n        <span>Already have an account?&nbsp;</span>\n        <a id=\"link-signin\" class=\"btn btn-sm btn-success btn-outline\" [routerLink]=\"['/login']\">Sign in</a>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <h3 class=\"text-center sign-up\">\n      Create your Account\n    </h3>\n    <div class=\"row\">\n      <div class=\"col-sm-7\">\n        <div class=\"benefits page-body\">\n          <h3>Free account</h3>\n          <p>\n            Create apps, connect databases and add-on services, and collaborate on your apps, for free.\n          </p>\n\n          <h3>Your app platform</h3>\n          <p>\n            A platform for apps, with app management &amp; instant scaling, for development and production.\n          </p>\n\n          <h3>Deploy now</h3>\n          <p>\n            Go from code to running app in minutes. Deploy, scale, and deliver your app to the world.\n          </p>\n        </div>\n      </div>\n\n\n      <div class=\"col-sm-4\">\n        <div class=\"hpanel sign-up\">\n          <div class=\"panel-body sign-up\">\n\n\n            <form novalidate (ngSubmit)=\"onRegisterSubmit(f.valid)\" #f=\"ngForm\" style=\"display: block;\">\n              <h2>Registration Details</h2>\n\n\n              <div class=\"form-group\">\n                <label for=\"insName\">Institute</label>\n                <input type=\"text\" [ngClass]=\"{'invalidfield':f.submitted}\" name=\"insName\" id=\"insName\" tabindex=\"2\" class=\"form-control\"\n                  placeholder=\"Institute Name\" required pattern=\"[^-\\s][a-zA-Z_\\s]*[^-\\s]\" maxlength=\"40\" [(ngModel)]=\"insName\"\n                  #insName1=\"ngModel\">\n\n                <div *ngIf=\"insName1.errors&& (f.submitted||insName1.dirty)\">\n                  <h5 *ngIf=\"insName1.errors.required\" class=\"inputError\">Organisation name is required !</h5>\n                  <h5 *ngIf=\"insName1.errors.pattern && f.submitted\" class=\"inputError\">Only Alphabets are allowed. Whitespaces and special characters are not allowed!</h5>\n                </div>\n\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"email\">Email</label>\n                <input type=\"text\" [ngClass]=\"{'invalidfield':f.submitted}\" email=\"true\" name=\"email\" id=\"email\" tabindex=\"3\" class=\"form-control\"\n                  placeholder=\"Email\" required pattern=\"\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+\" [(ngModel)]=\"email\" #email1=\"ngModel\">\n\n                <div *ngIf=\"email1.errors&& (f.submitted||email1.dirty)\">\n                  <h5 *ngIf=\"email1.errors.required\" class=\"inputError\">Email is required!</h5>\n                  <h5 *ngIf=\"email1.errors.pattern\" class=\"inputError\">Email is not valid!</h5>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"password\">Password</label>\n                <input type=\"password\" class=\"form-control signup\" name=\"password\" id=\"password\" placeholder=\"Enter Password\" required pattern=\"(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]+\"\n                  minlength=\"8\" maxlength=\"16\" [(ngModel)]=\"password\" #password1=\"ngModel\">\n\n                <div *ngIf=\"password1.errors&& (f.submitted||password1.dirty)\">\n                  <h5 *ngIf=\"password1.errors.required\" class=\"inputError\">Password is required !</h5>\n                  <h5 *ngIf=\"password1.errors.pattern\" class=\"inputError\">Password should contain at least one special character,one numeric value and one uppercase character !</h5>\n                  <h5 *ngIf=\"password1.errors.minlength&&!password1.errors.pattern\" class=\"inputError\">Password must at least 8 characters long !</h5>\n                  <h5 *ngIf=\"password1.errors.maxlength\" class=\"inputError\">Password can't greater then 16 characters !</h5>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"confirm_password\">Confirm password</label>\n                <input type=\"password\" id=\"confirm_password\" placeholder=\"Confirm Password\" class=\"form-control signup\" name=\"confirm_password\">\n              </div>\n              <!-- <div>\n                            <re-captcha class=\"g-recaptcha\" data-siteKey=\"6LeCV0QUAAAAAEErgc5Iyu_s9LqFkbvTXptpS_rl\" (resolved)=\"resolved($event)\"></re-captcha>\n                           </div> -->\n              <div>\n                <div class=\"form-action\">\n                  <button class=\"btn btn-primary btn-md btn-block btn-mod\" name=\"commit\" tabindex=\"3\" type=\"submit\" value=\"Log In\">Create Account</button>\n\n                </div>\n              </div>\n            </form>\n\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        localStorage.clear();
    };
    RegisterComponent.prototype.resolved = function (captchaResponse) {
        // console.log(`resolved captcha with response  ${captchaResponse}:`);
        this.reCaptcha = captchaResponse;
    };
    RegisterComponent.prototype.onRegisterSubmit = function (validity) {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // const captcha = this.reCaptcha;
        var _this = this;
        // fetch('http://localhost:4000/users/subscribe', {
        //   method: 'POST',
        //   headers: headers,
        //   body: JSON.stringify({ captcha: captcha })
        // })
        //   .then(res => res.json())
        //   .then(response => {
        //     console.log(response);
        //     // alert(response.msg);
        var user = {
            insName: this.insName,
            email: this.email,
            password: this.password
        };
        if (validity) {
            // Register user
            this.authService.registerUser(user).subscribe(function (data) {
                console.log(data);
                alertify.notify(data.msg);
                _this.router.navigate(['/']);
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    RegisterComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navstart></app-navstart>\n<section class=\"main-login\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <h2 class=\"heading center\" style=\"color:#403F48; font-weight:600; text-align:center;margin: 20px 0px;\">Online Examination System</h2>\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"img-container\">\n                <img src=\"../../assets/images/login-img.svg\" class=\"img-responsive\" alt=\"\">\n            </div>\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"col-xs-12\">\n                <div class=\"panel panel-login custom-panel\">\n                    <div class=\"panel-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n\n                                <form novalidate style=\"display: block;\" (ngSubmit)=\"onSubmit(f.valid)\" #f=\"ngForm\">\n                                    <h2>Reset Password</h2>\n\n                                    <div class=\"form-group\">\n                                        <input type=\"text\" [ngClass]=\"{'invalidfield':f.submitted}\" name=\"email\" id=\"email\" tabindex=\"2\" class=\"form-control\" placeholder=\"Email\"\n                                            required pattern=\"\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+\" [(ngModel)]=\"email\"\n                                            #email1=\"ngModel\">\n                                        <div *ngIf=\"email1.errors&& (f.submitted||email1.dirty||email1.touched)\">\n                                            <h5 *ngIf=\"email1.errors.required\" class=\"inputError\">Email is required!</h5>\n                                            <h5 *ngIf=\"email1.errors.pattern\" class=\"inputError\">Email is not valid!</h5>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"form-group \">\n                                        <button type=\"submit \" name=\"login-submit \" id=\"login-submit \" tabindex=\"4 \" class=\"button light-blue\" value=\"Log In \">Reset Password</button>\n                                    </div>\n\n                                </form>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/components/reset-password/reset-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResetPasswordComponent = (function () {
    function ResetPasswordComponent(authservice) {
        this.authservice = authservice;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () { };
    ResetPasswordComponent.prototype.onSubmit = function (validity) {
        if (validity) {
            this.authservice.resetPassword(this.email).subscribe(function (data) {
                console.log(data);
                alert(data.msg);
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    ResetPasswordComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reset-password/reset-password.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/reset-password.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/finishtest/finishtest.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h2 {\n  margin-left: 40px;\n  margin-top: 50px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/finishtest/finishtest.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Thank You! Your Response has been recorded successfully </h2>"

/***/ }),

/***/ "../../../../../src/app/components/test/finishtest/finishtest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinishTestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FinishTestComponent = (function () {
    function FinishTestComponent() {
    }
    FinishTestComponent.prototype.ngOnInit = function () { };
    FinishTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-finishtest',
            template: __webpack_require__("../../../../../src/app/components/test/finishtest/finishtest.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/finishtest/finishtest.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], FinishTestComponent);
    return FinishTestComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/finishtest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/instruction/instruction.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/instruction/instruction.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navuser></app-navuser>\n<div class=\"container\">\n  <div class=\"inst\">\n    <div class=\"inst-heading\">\n      <i> Please read given instructions carefully before starting the test. </i>\n      <br>\n      <i> In this test there are\n        <strong> 30 questions </strong> and the duration of the test is\n        <strong> 45 minutes </strong>. </i>\n    </div>\n\n  </div>\n\n  <br>\n  <ol class=\"instructions\">\n    <li> On commencing the online test, the timer shows the remaining duration of the test. </li>\n    <br>\n    <li> Read questions carefully. For every question there are 4 options but only 1 will be correct. </li>\n    <br>\n    <li> Color coded box on the left side of screen shows the status of the question.\n    </li>\n    <div class=\"ins-colors\">\n      <ul class=\"ui-c\">\n        <li class=\"green\">\n          <i class=\"ion-stop\"></i>\n          <span class=\"inst-name\">Answered</span>\n        </li>\n        <li class=\"active\">\n          <i class=\"ion-stop\"></i>\n          <span class=\"inst-name\">Active</span>\n        </li>\n        <li class=\"orange\">\n          <i class=\"ion-stop\"></i>\n          <span class=\"inst-name\">Mark for Review</span>\n        </li>\n        <li class=\"gray\">\n          <i class=\"ion-stop\"></i>\n          <span class=\"inst-name\">Unanswered</span>\n        </li>\n      </ul>\n    </div>\n    <li> Click question number to view the respective question only.</li>\n    <br>\n    <li> Check the appropriate answer and navigate to next quetion by clicking on\n      <strong> next </strong> button.</li>\n    <br>\n    <li> Once you have completed the online test you can proceed to click\n      <strong> submit</strong> button to finish the test.</li>\n  </ol>\n  <div>\n    <div class=\"read\" style=\"margin-left:26px;\">\n      <label style=\"cursor:pointer;\">\n        <input type=\"checkbox\" [(ngModel)]=\"checkBoxValue\"> I have read above instructions. </label>\n      <br>\n      <br>\n      <button class=\"button light-blue\" [class.disabled]=\"!checkBoxValue\" [disabled]=\"!checkBoxValue\" (click)=\"onStartTest()\">\n        Start test </button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/instruction/instruction.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstructionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstructionComponent = (function () {
    function InstructionComponent(authService, responseService, route, router, serverService) {
        this.authService = authService;
        this.responseService = responseService;
        this.route = route;
        this.router = router;
        this.serverService = serverService;
        this.title = 'app';
        this.newValue = false;
        this.checkBoxValue = false;
    }
    InstructionComponent.prototype.ngOnInit = function () { };
    //-----------------------------------------
    // Start Time Logic
    //-----------------------------------------
    InstructionComponent.prototype.onStartTest = function () {
        var _this = this;
        var isodate = new Date().toISOString();
        this.responseService.getstart(isodate).subscribe(function (data) {
            console.log('fffffff', data);
            if (data.success) {
                _this.router.navigate(['/test/testportal']);
            }
        }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        });
        // this.router.navigate(['/test/testportal']);
    };
    InstructionComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-instruction',
            template: __webpack_require__("../../../../../src/app/components/test/instruction/instruction.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/instruction/instruction.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_app_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_app_services_response_service__["a" /* ResponseService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */]) === 'function' && _e) || Object])
    ], InstructionComponent);
    return InstructionComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/instruction.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-instruction></app-instruction> -->\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/components/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () { };
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/components/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/test.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/test.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/calculator/calculator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n/*==============================================================================*/\n/*                           CALCULATOR STYLES                                  */\n/*==============================================================================*/\n.open{\n  display: inline-block!important;\n}\n\n/*===================CALCULATOR MAIN CONTAINER===========================*/\n.cal-container {\n  position: fixed;\n  background-color:#3d4543;\n  /* box-shadow: 1px 1px 30px  #3d4543; */\n  max-width: 300px;\n  padding: 1%;\n  border-radius: 3%;\n  display: block;\n  z-index: 9999;\n  right: 13%;\n  top:14%;\n\n\n}\n/*============================ALL ROWS==================================*/\n.cal-row {\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  margin-right: -15px;\n  margin-left: -15px;\n}\n\n/*==========================CALCULATOR RESULT SCREEN========================*/\n\n.calResult {\n  background: #bccd95;\n  height: 100px;\n  width: 250px;\n  border-radius: 4px;\n  margin-bottom: 3%;\n  text-align: right;\n  padding: 3%;\n}\n\n.calSum {font-size: 22px;}\n.calInput {font-size: 18px;}\n.calOperator {font-size: 20px;}\nhr { border: 1px solid #bccd95;}\n\n.calOperator,.calInput,.calSum {\n  color: black;\n  font-family: Orbitron;\n  margin: 0;\n}\n\n\n/*=========================CALCULATOR BUTTONS AND COLLUMNS===========================*/\n\n\n.cal-col-12 {\n  padding-right: 15px;\n  padding-left: 15px;\n  \n}\n.cal-col-12.calCol {padding: 0;}\n\n.cal-col-9 {\n  -ms-flex: 0 0 75%;\n  -webkit-box-flex: 0;\n          flex: 0 0 75%;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.cal-col-4 {\n  -ms-flex: 0 0 33.333333%;\n  -webkit-box-flex: 0;\n          flex: 0 0 33.333333%;\n  max-width: 33.333333%;\n \n}\n.cal-col-3 {\n  -ms-flex: 0 0 25%;\n  -webkit-box-flex: 0;\n          flex: 0 0 25%;\n}\n.cal-col-3,.cal-col-4 {\n  padding: 1px;\n  text-align: center;\n}\n/*==========================CALCULATOR BUTTONS================================*/\n.cal-app-btn {\n  width: 100%;\n  height: 100%;\n  border-radius: 4px;\n  outline: none;\n  \n  /* border: #66bfbf; */\n  font-weight: bold;\n}\n.cal-app-btn:active {\n  padding: 2px 0 0 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/calculator/calculator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cal-container\" [ngClass]=\"{'open':calOpen}\">\n  <div class=\"cal-col-12\">\n    <div class=\"cal-row\">\n      <div class=\"cal-col-12\">\n        <div class=\"cal-row\">\n          <div class=\"cal-col-12 calCol\">\n            <div class=\"calResult\">\n              <p class=\"calSum\">{{calSum}}</p>\n              <p class=\"calOperator\">{{calOperator}}</p>\n              <hr *ngIf=\"!calOperator||calOperator==' '\">\n              <p class=\"calInput\">{{calInput}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"cal-row\">\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('1')\">1</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('2')\">2</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('3')\">3</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('+')\">+</button>\n          </div>\n        </div>\n        <div class=\"cal-row\">\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('4')\">4</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('5')\">5</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('6')\">6</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('-')\">-</button>\n          </div>\n        </div>\n        <div class=\"cal-row\">\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('7')\">7</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('8')\">8</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('9')\">9</button>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"butInput('/')\">/</button>\n          </div>\n        </div>\n        <div class=\"cal-row\">\n          <div class=\"cal-col-9\">\n            <div class=\"cal-row\">\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('*')\">x</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('0')\">0</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('.')\">.</button>\n              </div>\n            </div>\n            <div class=\"cal-row\">\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('sqrt')\">&#8730;</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('%')\">%</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('^')\">^</button>\n              </div>\n            </div>\n            <div class=\"cal-row\">\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"onClickAC()\">AC</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"onDelClick()\">DEL</button>\n              </div>\n              <div class=\"cal-col-4\">\n                <button class=\"cal-app-btn\" (click)=\"butInput('mod')\">mod</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"cal-col-3\">\n            <button class=\"cal-app-btn\" (click)=\"onCalculation()\">=</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/calculator/calculator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculatorComponent = (function () {
    function CalculatorComponent() {
        this.calSum = '0';
        this.calOperator = "";
        this.calInput = '0';
        this.onShow = false;
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent.prototype.butInput = function (value) {
        if (value == '-' && this.calInput.indexOf('-') < 0) {
            if (this.calInput == '0') {
                this.calInput = '-';
            }
            else {
                this.calInput = "-" + this.calInput;
            }
            if (this.calOperator == '-')
                this.calOperator = ' ';
            return;
        }
        if (this.calInput.length < 12 && parseInt(value) >= 0 && parseInt(value) <= 9) {
            if (this.calInput == '0') {
                this.calInput = value;
                return;
            }
            this.calInput += value;
        }
        else if (value == "%") {
            this.calOperator = value;
            this.onCalculation();
        }
        else if (value == '.') {
            if (this.calInput.indexOf('.') == -1)
                this.calInput += value;
        }
        else if (!(parseInt(value) >= 0 && parseInt(value) <= 9)) {
            if (this.calSum == '0') {
                this.calSum = this.calInput;
                this.calInput = '0';
            }
            this.calOperator = value;
        }
    };
    //============================================================
    CalculatorComponent.prototype.onClickTab = function () {
        this.onShow = !this.onShow;
    };
    //]==============================================================
    CalculatorComponent.prototype.onClickAC = function () {
        this.calSum = '0';
        this.calInput = '0';
        this.calOperator = "";
    };
    CalculatorComponent.prototype.onDelClick = function () {
        if (this.calInput.length == 1) {
            this.calInput = '0';
            return;
        }
        this.calInput = this.calInput.substring(0, this.calInput.length - 1);
    };
    CalculatorComponent.prototype.onCalculation = function () {
        if (this.calOperator == '^') {
            this.calSum = (eval("Math.pow(" + this.calSum + "," + this.calInput + ")")).toString();
            this.calOperator = "";
        }
        else if (this.calOperator == '%') {
            this.calSum = (eval(this.calInput + "/100")).toString();
            this.calOperator = "";
            this.calInput = '0';
        }
        else if (this.calOperator == 'mod') {
            this.calSum = (eval(this.calSum + "%" + this.calInput)).toString();
        }
        else if (this.calOperator == "sqrt") {
            var num = this.calSum == '0' ? '1' : this.calSum;
            this.calSum = (eval(num + "*" + "Math.sqrt(" + this.calInput + ")")).toString();
        }
        else if (this.calOperator != "") {
            this.calSum = (eval(this.calSum + this.calOperator + this.calInput)).toString();
        }
        this.calInput = '0';
        if (this.calSum.length > 14) {
            this.calSum = Number(this.calSum).toPrecision(10);
        }
    };
    CalculatorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__("../../../../../src/app/components/test/testportal/calculator/calculator.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/testportal/calculator/calculator.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/calculator.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/testportal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Common button styles */\n\n.button {\n  width: 150px;\n  display: block;\n  padding: 8px;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.19), 0 0px 0px rgba(0, 0, 0, 0.23);\n  transition: 0.35s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\np.timer {\n  padding-left: 10px;\n  margin: 2px 0px;\n}\n\n.ques-navigation {\n  margin: 10px;\n}\n\n.light-blue {\n  background: #66bfbf;\n  border: #66bfbf;\n  color: #fff;\n}\n\n.soft-blue {\n  background: transparent;\n  border: 1px solid #66bfbf;\n  color: #66bfbf;\n}\n\n.dark-blue {\n  background: #66bfbf;\n  border: #66bfbf;\n  color: #fff;\n}\n\n.button:focus {\n  outline: none;\n}\n\n.button > span {\n  vertical-align: middle;\n}\n\n.test-name h3 {\n  margin-top: 30px;\n  padding: 10px 0px;\n  color: #2e89ba;\n  text-align: center;\n}\n\nul.numbers-row li {\n  display: inline-block;\n  margin: 10px;\n  list-style: none;\n}\n\n.question-container {\n  padding: 10px 20px;\n}\n\np.qs {\n  margin: 0px !important;\n}\n\ntd.ques {\n  padding: 10px 10px;\n  border: 1px solid #ffffff;\n  background-color: #ffffff;\n}\n\ntd.answers {\n  padding: 10px 10px;\n  border: 1px solid #ffffff;\n  background: #fff;\n  border-top: 1px solid #e6e6e6;\n}\n\np.qs {\n  font-size: 105%;\n  color: #626060;\n  float: left;\n}\n\ntd {\n  padding: 5px 5px;\n}\n\n.timer {\n  padding: 4px;\n}\n\ninput[type='checkbox'] {\n  height: 20px;\n  width: 20px;\n  border: none;\n  background: none !important;\n}\n\nul.numbers-row {\n  margin-bottom: 0px;\n  float: left;\n}\n\nul.numbers-row li {\n  background-color: #f5f5f5;\n  border: 1px solid #f5f5f5;\n  border-radius: 3px;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  color: gray;\n  cursor: pointer;\n}\n\nli.done {\n  background-color: #8bc34a !important;\n  color: white !important;\n}\n\nli.done a {\n  color: #fff !important;\n}\n\nul.numbers-row li a {\n  color: gray;\n}\n\nul.numbers-row li a:hover {\n  text-decoration: none;\n}\n\nul.numbers-row li a:hover {\n  text-decoration: none;\n}\n\n.instructions {\n  text-align: center;\n  padding-top: 30px;\n}\n\n.number-container {\n  margin-top: 10px;\n}\n\n.cta-container {\n  padding-bottom: 10px;\n}\n\nul.inst li {\n  list-style: none;\n  padding: 5px;\n}\n\nli.bd span {\n  padding-right: 10px;\n  font-size: 24px;\n}\n\np.idd {\n  line-height: 40px;\n  font-size: 105%;\n  color: #616161;\n  margin-left: -20px;\n}\n\n@media only screen and (max-width: 600px) {\n  .col-md-5.right-side {\n    margin-top: 100px;\n  }\n  .instructions > .col-xs-4 {\n    display: none;\n  }\n}\n\nli.bb {\n  border: 2px solid #539b9b !important;\n  background-color: #66bfbf !important;\n  color: white !important;\n  box-shadow: 2px 3px 5px #0000002e;\n  cursor: pointer;\n}\n\nli.bb a {\n  color: white !important;\n  text-decoration: none !important;\n}\n\n.time_submit {\n  height: 60px;\n  padding-top: 10px;\n  border-radius: 3px;\n}\n.time_submit.pull-right .col-xs-4{\n  padding-right: 0;\n}\n.time_submit.pull-right .col-xs-2{\n  padding-left: 0;\n  /* padding-top: 7px; */\n  margin-top: 4px;\n}\n.col-xs-2 .btn.btn-default{\n  font-size: 22px;\n  color: #ffb606;\n  font-weight: 900;\n}\n/*------------------------------------*/\n\n/*------------------------------------*/\n\n/*------------------------------------*/\n\n.number-container {\n  margin-top: 40px;\n  overflow-y: visible;\n  overflow: scroll;\n  overflow-x: hidden;\n  z-index: 2;\n  height: calc(65vh - 60px);\n}\n\ntable {\n  display: none;\n}\n\n.show {\n  display: table !important;\n}\n\nlabel {\n  cursor: pointer;\n}\n\nli.new {\n  background-color: orange !important;\n  color: white !important;\n}\n\nli.back {\n  background-color: #f5f5f5 !important;\n  color: gray !important;\n}\n\ntable {\n  border-collapse: separate !important;\n}\n\ntbody.question-box {\n  box-shadow: 1px 1px 4px #00000052;\n}\n\n.clear-icon {\n  position: absolute;\n  cursor: pointer;\n  height: 20px;\n  right: 2%;\n}\n\n.clear-icon i {\n  color: #d9534e;\n}\n\n.clear-icon i:hover {\n  font-weight: 600;\n  font-size: 110%;\n  transition: 0.3s linear;\n}\n\n@media only screen and (max-width: 450px) {\n  .button {\n    width: 80px;\n    display: block;\n    padding: 8px;\n    border-radius: 4px;\n  }\n}\n/* ==========Calculator Display Box===================*/\ndiv.open{\n  display:block;\n}\n.calculator-app-toggle\n{\n  display:none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/testportal.component.html":
/***/ (function(module, exports) {

module.exports = "<section ngsf-fullscreen class=\"test-portal\">\n  <div class=\"container\">\n    <div class=\"time_submit pull-right\">\n      <div class=\"col-xs-4\">\n        <div class=\"timer\">\n          <p class=\"btn btn-default\" style=\"cursor: progress;display: inline-flex;\">\n            <!-- <span class=\"glyphicon glyphicon-time\" style=\"margin: 3px 0px;\">\n              {{hr}}:{{min}}:{{sec}}\n              <span style=\"display: none\">Connected: {{isConnected | async}} {{countDown}}</span>\n            </span> -->\n            <app-timer></app-timer>\n          </p>\n\n\n        </div>\n      </div>\n      <div class=\"col-xs-2\">\n        <p class=\"btn btn-default\" (click)=\"onCalculatorOpen()\" style=\"cursor:pointer;display: inline-flex;\">\n          <i class=\"pe-7s-calculator\"></i>\n        </p>\n      </div>\n      <div class=\"col-xs-6\">\n        <div class=\"finish\">\n          <button class=\"button soft-blue\" (click)=\"onFinishClick()\">Finish Test</button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-md-8 col-sm-8\">\n        <div class=\"col-xs-12\">\n          <div class=\"test-name\">\n            <h3>Aptitude Test</h3>\n          </div>\n        </div>\n        <div class=\"question-container\">\n          <table class=\"q-container\" width=\"100%\" *ngFor=\"let test of testList; let i = index\" [attr.data-index]=\"i\" [class.show]=\"i === intiIndex\">\n            <td class=\"ques-number\" valign=\"top\" align=\"left\">Question no.\n              <span id=\"100\">{{ i+1 }} </span>\n              <button type=\"button\" class=\"btn btn-warning btn-sm\" style=\"float:right\" (click)=\"reviewClicked(i)\">Review</button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\" style=\"float:right; margin-right: 10px\" (click)=\"clearForm(fValA)\" (click)=\"clearForm(fValB)\"\n                (click)=\"clearForm(fValC)\" (click)=\"clearForm(fValD)\" (click)=\"reviewClear(i)\">Clear</button>\n            </td>\n            <tbody class=\"question-box\">\n              <tr>\n                <td class=\"ques\" valign=\"top\" align=\"left\" style=\"padding-right: 38px !important; position: relative\">\n                  <p class=\"qs\"> {{ test.text }}</p>\n                </td>\n              </tr>\n              <tr class=\"ans-box\">\n                <td class=\"answers\">\n                  <div class=\"form-group\">\n                    <div class=\"radio\">\n                      <input type=\"radio\" id=\"radio-1{{i}}\" name=\"{{i}}\" value=\"1\" (click)=\"radioChecked($event,i)\" (change)=\"radio(i)\" #fValA>\n                      <label for=\"radio-1{{i}}\" class=\"radio-label\">{{ test.options[0] }}</label>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"radio\">\n                      <input type=\"radio\" id=\"radio-2{{i}}\" name=\"{{i}}\" value=\"2\" (click)=\"radioChecked($event,i)\" (change)=\"radio(i)\" #fValB>\n                      <label for=\"radio-2{{i}}\" class=\"radio-label\">{{ test.options[1] }}</label>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"radio\">\n                      <input type=\"radio\" id=\"radio-3{{i}}\" name=\"{{i}}\" value=\"3\" (click)=\"radioChecked($event,i)\" (change)=\"radio(i)\" #fValC>\n                      <label for=\"radio-3{{i}}\" class=\"radio-label\">{{ test.options[2] }}</label>\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"radio\">\n                      <input type=\"radio\" id=\"radio-4{{i}}\" name=\"{{i}}\" value=\"4\" (click)=\"radioChecked($event,i)\" (change)=\"radio(i)\" #fValD>\n                      <label for=\"radio-4{{i}}\" class=\"radio-label\">{{ test.options[3] }}</label>\n                    </div>\n                  </div>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n          <div class=\"ques-navigation\">\n            <div class=\"col-xs-6\">\n              <button class=\"button light-blue\" [disabled]=\"!intiIndex == 1\" (click)=\"plusQues(-1)\">previous</button>\n            </div>\n            <div class=\"col-xs-6 \">\n              <button class=\"button light-blue pull-right\" (click)=\"plusQues(1)\" [disabled]=\"intiIndex == maxIndex\">next</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4 col-sm-4\">\n        <div class=\"number-container\">\n          <div class=\"buttons-number\">\n            <ul class=\"numbers-row\">\n              <li class=\"bb\" *ngFor=\"let test of testList; let i = index\" id=\"{{ i+1 }}\" [attr.data-index]=\"i\" [class.bb]=\"i === intiIndex\"\n                (click)=onlistSelect(i); [class.done]=\"radioStatus[i]\" [class.new]=\"reviewStatus[i]\" [class.back]=\"clearStatus[i]\">{{ i+1 }}</li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"instructions\">\n          <div class=\"row\">\n            <div class=\"col-xs-4\"> &nbsp;</div>\n            <div class=\"col-xs-8\" style=\"text-align:left\">\n              <div class=\"col-xs-4\">\n                <span class=\"glyphicon glyphicon-stop \" style=\"color: #F5F5F5;font-size: 40px; float:right\"></span>\n              </div>\n              <div class=\"col-xs-8\">\n                <p class=\"idd\" style=\"\">Unanswered</p>\n              </div>\n              <div class=\"col-xs-4\">\n                <span class=\"glyphicon glyphicon-stop \" style=\"color: #8BC34A;font-size: 40px; float:right\"></span>\n              </div>\n              <div class=\"col-xs-8\">\n                <p class=\"idd\" style=\"\">Answered</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<div class=\"calculator-app-toggle\" [ngClass]=\"{'open':calOpen}\">\n  <app-calculator></app-calculator>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/test/testportal/testportal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestportalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers__ = __webpack_require__("../../../../timers-browserify/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_timers__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TestportalComponent = (function () {
    function TestportalComponent(responseService, serverService, route, router) {
        this.responseService = responseService;
        this.serverService = serverService;
        this.route = route;
        this.router = router;
        this.disconnectTime = {};
        this.connectedTime = {};
        this.timeGaps = [];
        this.count = 0;
        this.checkIndex = [];
        this.getIndex = false;
        this.response = [];
        //================================CALCULATOR VARIABLES============
        this.calOpen = false;
        //==================================================================
        this.tabchange = 0;
        // --------------------------------------I
        // Indexing Questions and Logic
        // --------------------------------------I
        this.intiIndex = 0; // Intially the showing index set to 0
        this.radioStatus = [];
        this.reviewStatus = [];
        this.clearStatus = [];
        //-----------------------------------------------
        //           keypress event detected
        // -----------------------------------------------
        document.addEventListener('keydown', function (e) {
            console.log('keypress');
            e.preventDefault();
        }, true);
        // -----------------------------------------
        //         right click event
        //-----------------------------------------
        document.addEventListener('contextmenu', function (e) {
            console.log('menu click');
            e.preventDefault();
        });
        //----------------------------------------------
        //  To handle copy, cut and paste event on the page
        // ----------------------------------------------
        document.addEventListener('copy', function handleCopy(e) {
            console.log('Coping');
            e.preventDefault();
        }, true);
        document.addEventListener('cut', function handleCopy(e) {
            console.log('cut');
            e.preventDefault();
        }, true);
        document.addEventListener('paste', function handleCopy(e) {
            console.log('paste');
            e.preventDefault();
        }, true);
        // ----------------------------------------------
        //       Handle selection of text on page
        // ----------------------------------------------
        document.addEventListener('select', function (e) {
            e.preventDefault();
        }, true);
        // ----------------------------------------------
        //       Handling window reload or tab Close
        // ----------------------------------------------
        window.addEventListener('beforeunload', function (event) {
            var message = "Important: Please click on 'Save' button to leave this page.";
            if (typeof event == 'undefined') {
                event = window.event;
            }
            if (event) {
                event.returnValue = message;
            }
            return message;
        }, false);
    }
    //-----------------------------------------
    //       Handling Tab Change
    //-----------------------------------------
    TestportalComponent.prototype.visibilitychange = function ($event) {
        var hidden, visibilityChange;
        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilityChange';
        }
        if (document[hidden]) {
            console.log('tab is changed just now', this.tabchange);
            this.tabchange = this.tabchange + 1;
            // on req complete
            //   if (this.tabchange === 1) {
            //     console.log('Do not try to mislead during test!!');
            //   } else if (this.tabchange === 3) {
            //     console.log('Warning Your test will be submitted!!');
            //   } else if (this.tabchange === 5) {
            //     console.log('Your test is submitted!!');
            //     this.responseService.onFinish()
            //       .subscribe(
            //       data => {
            //         // console.log(data);
            //         if (data.success) {
            //           this.router.navigate(['/test/finishtest']);
            //           setTimeout((router: Router) => {
            //             this.router.navigate(['/dashboard']);
            //           }, 3000);
            //         }
            //       },
            //       err => {
            //         console.log(err);
            //       }
            //       );
            //   }
            this.responseService.mischeivehandler(this.tabchange).subscribe(function (res) {
                console.log(res);
                if (res.success) {
                    alertify('you cannot change tab during test');
                }
            }, function (error) {
                console.log(error);
            });
        }
    };
    TestportalComponent.prototype.blur = function ($event) {
        var hidden, visibilityChange;
        if (typeof document.hidden !== 'undefined') {
            hidden = 'hidden';
            visibilityChange = 'visibilityChange';
        }
        if (document[hidden]) {
            // this.tabchange = this.tabchange + 1;
            console.log('blur', this.tabchange);
        }
    };
    // Next and prev
    TestportalComponent.prototype.plusQues = function (val) {
        this.intiIndex += val; // Adding or Subtracting based on navigation
    };
    // On selecting from pagination
    TestportalComponent.prototype.onlistSelect = function (val) {
        this.intiIndex = val; // Assigning to show perticular Test
    };
    // res = [];
    TestportalComponent.prototype.radioChecked = function (event, id) {
        // this.responce is empty Array
        var option;
        option = event.target.value;
        var key = id + 1;
        var found = false;
        for (var i = 0; i < this.response.length; i++) {
            if (this.response[i].key === key) {
                this.response[i].value = option;
                found = true;
                break;
            }
        }
        if (!found) {
            this.response.push({ key: key, value: option });
        }
        var clientSequence = new Date().toISOString();
        this.responseService.response(this.response, clientSequence);
    };
    TestportalComponent.prototype.radio = function (val) {
        this.reviewStatus[val] = false;
        this.radioStatus[val] = true;
    };
    TestportalComponent.prototype.clearForm = function (form) {
        form.checked = false;
    };
    TestportalComponent.prototype.reviewClicked = function (index) {
        this.radioStatus[index] = false;
        this.reviewStatus[index] = true;
        this.clearStatus[index] = false;
    };
    TestportalComponent.prototype.reviewClear = function (ind) {
        this.clearStatus[ind] = true;
        this.reviewStatus[ind] = false;
        this.radioStatus[ind] = false;
    };
    TestportalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myVar = Object(__WEBPACK_IMPORTED_MODULE_2_timers__["setInterval"])(function () {
            var clientSequence = new Date().toISOString();
            _this.responseService.response(_this.response, clientSequence);
        }, __WEBPACK_IMPORTED_MODULE_5_environments_environment__["a" /* environment */].periodicCallInterval);
        // this.testList = this.testServive.testListAll; // Assigning test to the list coming from service
        this.testcount = this.testList; // Counting the coming questions
        // this.maxIndex = this.testList.length - 1; // Assigning the maxquestion limit also working in disabling next button
        // console.log(this.intiIndex + ' ' + this.maxIndex);
        var testid = localStorage.getItem('testID');
        var quesIds = localStorage.getItem('quesId');
        if (localStorage.getItem('quesList')) {
            this.testList = JSON.parse(localStorage.getItem('quesList'));
            this.maxIndex = this.testList.length - 1;
        }
        else {
            this.serverService.fetchQuestions(this.serverService.quesIds).subscribe(function (data) {
                localStorage.setItem('quesList', JSON.stringify(data));
                _this.testList = JSON.parse(localStorage.getItem('quesList'));
                _this.maxIndex = _this.testList.length - 1;
                // console.log(this.testList);
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            }, function () {
                console.log('finish');
            });
        }
    };
    //  --------------------------------------------
    // Finish Test Logic
    // ----------------------------------------------
    TestportalComponent.prototype.onFinishClick = function () {
        var _this = this;
        var alert = confirm('Are you sure you want to finish the test?');
        if (alert) {
            var mode = 'userSubmit';
            this.responseService.getFinish(mode).subscribe(function (data) {
                // console.log(data);
                _this.router.navigate(['/test/finishtest']);
                setTimeout(function (router) {
                    _this.router.navigate(['/dashboard']);
                }, 3000);
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            });
        }
    };
    //============================================================
    //                    CALCULATOR APP
    //============================================================
    TestportalComponent.prototype.onCalculatorOpen = function () {
        this.calOpen = !this.calOpen;
    };
    TestportalComponent.prototype.ngOnDestroy = function () {
        Object(__WEBPACK_IMPORTED_MODULE_2_timers__["clearInterval"])(this.myVar);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:visibilitychange', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TestportalComponent.prototype, "visibilitychange", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:blur', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], TestportalComponent.prototype, "blur", null);
    TestportalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-testportal',
            template: __webpack_require__("../../../../../src/app/components/test/testportal/testportal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/test/testportal/testportal.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__["a" /* ResponseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_app_services_server_service__["a" /* ServerService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], TestportalComponent);
    return TestportalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/testportal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p.timer {\n  padding-left: 10px;\n  margin: 2px 0px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"glyphicon glyphicon-time\" style=\"margin: 3px 0px;\">\n    {{hr}}:{{min}}:{{sec}}\n    <span style=\"display: none\">Connected: {{isConnected | async}} {{countDown}}</span>\n</span>\n"

/***/ }),

/***/ "../../../../../src/app/components/timer/timer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__ = __webpack_require__("../../../../rxjs/observable/timer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__ = __webpack_require__("../../../../../src/app/services/response.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TimerComponent = (function () {
    function TimerComponent(responseService, router) {
        var _this = this;
        this.responseService = responseService;
        this.router = router;
        this.inputVariable = 40;
        this.source = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 1000);
        this.source1 = Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_timer__["timer"])(0, 1000);
        this.valuesChanged = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Subject"]();
        //------------------ after failure-------
        this.recordTime = 0;
        this.difference = 1;
        this.isConnected = __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].merge(__WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].of(navigator.onLine), __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromEvent(window, 'online').map(function () {
            _this.subscription1.unsubscribe();
            _this.onPause();
            return true;
        }), __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["Observable"].fromEvent(window, 'offline').map(function () {
            _this.onPause();
            return false;
        }));
    }
    TimerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.testTime = localStorage.getItem('duration');
        // this.testTime = 4;
        // this.calculate();
        this.waitTimeLeft = this.waitTime;
        this.min = this.min % 60;
        this.inputVariable = this.testTime;
        this.initialize();
        // pause test when server do not response
        this.responseService.serverErrorCheck.subscribe(function (res) {
            if (res) {
                console.log("===========Subscriber===========", res);
                _this.pauseTime = true;
                // this.subscription.unsubscribe();
                // this.subscription1.unsubscribe();
                _this.start();
            }
            else {
                _this.pauseTime = false;
                // this.subscription1.unsubscribe();
                // this.subscription.unsubscribe();
                _this.start();
            }
        });
        // periodic pauseTime request to back-end
        this.responseService.replaceDuration.subscribe(function (time) {
            console.log("gh");
            if (time > 0) {
                var timeInSec = Math.floor(time / 1000);
                console.log('backend time: ', timeInSec);
                var diff = _this.countDown - timeInSec;
                console.log('time difference ', diff);
                _this.subscription.unsubscribe();
                if (diff > 120 || diff < -120) {
                    _this.testTime = Math.floor(timeInSec / 60);
                    console.log('timer replaced');
                    // this.initialize();
                    _this.calculate();
                }
            }
            else {
                _this.subscription.unsubscribe();
            }
        });
    };
    TimerComponent.prototype.initialize = function () {
        this.waitTime = 600;
        this.countDown = this.testTime * 60;
        this.pauseTime = false;
        this.min = (this.countDown / 60);
        this.hr = Math.floor(this.min / 60);
        this.min = this.min % 60;
        this.sec = 0;
        if (this.subscription)
            this.subscription.unsubscribe();
        this.start();
    };
    TimerComponent.prototype.calculate = function () {
        this.countDown = this.testTime * 60;
        this.min = (this.countDown / 60);
        this.hr = Math.floor(this.min / 60);
        this.sec = 0;
        // if (this.subscription)
        this.subscription.unsubscribe();
        // this.start();
    };
    TimerComponent.prototype.start = function () {
        var _this = this;
        if (this.pauseTime) {
            this.subscription1 = this.source1.subscribe(function (count) {
                _this.waitTimeLeft--;
                console.log('wait Time', _this.waitTimeLeft);
                if (_this.waitTimeLeft === _this.waitTime - 120) {
                    alert('Network Error Occured You cannot proceed Test');
                    _this.subscription.unsubscribe();
                }
                else if (_this.waitTimeLeft < _this.waitTime - 120) {
                    console.log('record Time', _this.recordTime);
                    if (_this.recordTime === 30 * _this.difference) {
                        _this.difference++;
                        _this.timePauseRequest();
                        _this.recordTime++;
                    }
                    else {
                        _this.recordTime++;
                    }
                }
                else if (_this.waitTimeLeft === 0) {
                    _this.recordTime = 0;
                    alert('Resume your test');
                    _this.subscription1.unsubscribe();
                }
            });
        }
        else if (!this.pauseTime) {
            this.recordTime = 0;
            this.difference = 1;
            this.waitTimeLeft = this.waitTime;
            this.subscription = this.source.subscribe(function (countDown) {
                if (_this.sec == 0) {
                    if (_this.min === 0 && _this.hr > 0) {
                        _this.min = 60;
                        _this.hr--;
                        if (_this.hr <= 0) {
                            _this.hr = 0;
                        }
                    }
                    if (_this.sec == 0 && _this.min > 0) {
                        _this.sec = 59;
                        _this.min--;
                        if (_this.min <= 0) {
                            _this.min = 0;
                        }
                    }
                }
                else {
                    _this.sec--;
                }
                _this.countDown--;
                console.log('countDown', _this.countDown);
                if (_this.countDown < 0 || _this.countDown === 0) {
                    alertify.alert('test completed');
                    var mode = 'timeOut';
                    _this.subscription.unsubscribe();
                    _this.subscription1.unsubscribe();
                    _this.responseService.getFinish(mode).subscribe(function (data) {
                        // if (data.success) {
                        console.log('test completed', data);
                        _this.router.navigate(['/test/finishtest']);
                        // }
                    }, function (err) {
                        console.log(err);
                        var error = JSON.parse(err._body);
                        alertify.alert(error.msg);
                    });
                }
            });
        }
    };
    TimerComponent.prototype.timePauseRequest = function () {
        var _this = this;
        var pauseTime = new Date().toISOString();
        this.responseService.testPause(pauseTime, this.recordTime)
            .subscribe(function (res) {
            if (pauseTime === res.data.sequenceNumber) {
                _this.testTime = res.data.remainingDuration;
                console.log("testTime", _this.testTime);
                _this.initialize();
            }
        }, function (err) {
            console.log('Error', err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        });
    };
    TimerComponent.prototype.onPause = function () {
        this.pauseTime = !this.pauseTime;
        // this.subscription.unsubscribe();
        this.start();
    };
    TimerComponent = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__("../../../../../src/app/components/timer/timer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/timer/timer.component.css")]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__["a" /* ResponseService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_response_service__["a" /* ResponseService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], TimerComponent);
    return TimerComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/timer.component.js.map

/***/ }),

/***/ "../../../../../src/app/directives/dropDown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dropDownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var dropDownDirective = (function () {
    function dropDownDirective() {
        this.isOpen = false;
    }
    dropDownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'), 
        __metadata('design:type', Object)
    ], dropDownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], dropDownDirective.prototype, "toggleOpen", null);
    dropDownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[app-dropdown]'
        }), 
        __metadata('design:paramtypes', [])
    ], dropDownDirective);
    return dropDownDirective;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/dropDown.directive.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__ = __webpack_require__("../../../../../src/app/services/server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, serverService) {
        this.http = http;
        this.serverService = serverService;
        this.allowChild = false;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
        this.token = localStorage.getItem('id_token');
    }
    // Handling error 
    AuthService.prototype._errorHandler = function (error) {
        console.error(error);
        if (error.status == 0) {
            console.error(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
        }
        else if (error.status > 400 && error.status < 500) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
        }
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error || 'Server Error!!');
    };
    //============================================
    //        GETTING CANDIDATE PROFILE
    //============================================
    AuthService.prototype.getProfile = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Authorization', this.token);
        return this.http.get(this.apiUrl + '/users//get-profile/' + id, { headers: headers })
            .map(function (res) {
            return res.json();
        });
    };
    //============================================
    //        UPDATING CANDIDATE PROFILE
    //============================================
    AuthService.prototype.updateProfile = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return this.http.put(this.apiUrl + '/users/update-profile', data, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.apiUrl + '/users/register', user, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .post(this.apiUrl + '/users/authenticate', user, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        // console.log("heyyyy tokennnn issss coming", token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log('userdata', this.user);
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('id_token');
        if (token) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.activateAccount = function (token) {
        // console.log(token);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.apiUrl + '/users/activate/' + token, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.generatelink = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.apiUrl + '/users/newlink/', user, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.resetPassword = function (resetdata) {
        // console.log(resetdata);
        return this.http
            .put(this.apiUrl + '/users/resetpassword', { email: resetdata })
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.resetUser = function (token) {
        // console.log('token: ' + token);
        return this.http
            .get(this.apiUrl + '/users/resetpassword/' + token)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.savepassword = function (regdata) {
        console.log(regdata);
        return this.http
            .put(this.apiUrl + '/users/savepassword', regdata)
            .map(function (res) { return res.json(); })
            .catch(this._errorHandler);
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        this.allowChild = false;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4_app_services_server_service__["a" /* ServerService */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/response.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ResponseService = (function () {
    function ResponseService(http) {
        this.http = http;
        this.practice = false;
        // count: number   = 0;
        this.serverErrorCheck = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.replaceDuration = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.serverResponseCount = 1;
        // count: number = 0;
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].apiUrl;
        this.token = localStorage.getItem('id_token');
    }
    // Handling error 
    ResponseService.prototype._errorHandler = function (error) {
        console.error(error);
        if (error.status == 0) {
            console.error(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
        }
        else if (error.status > 400 && error.status < 500) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
        }
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error || 'Server Error!!');
    };
    ResponseService.prototype.ngOnInit = function () { };
    //--------------------------------------------------
    // Start Time Logic
    // --------------------------------------------------
    ResponseService.prototype.getstart = function (Starttime) {
        var testID = localStorage.getItem('testID');
        var user = JSON.parse(localStorage.getItem('user'));
        this.startTime = Starttime;
        var start = {
            candidateId: user.email,
            testId: testID,
            startTime: this.startTime,
            state: 'start',
            practice: localStorage.getItem('practiceTest') == 'true' ? true : false
        };
        console.log("//////Start////////", start);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        // console.log(time1);
        return this.http
            .post(this.apiUrl + '/response/response', start, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            // console.log('start time is ' + data);
            return data;
        });
    };
    ResponseService.prototype.resumeTest = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .post(this.apiUrl + '/response/response', data, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ResponseService.prototype.response = function (response, sequence) {
        var _this = this;
        var clientSequence = new Date().toISOString();
        this.finalResp = response;
        var testID = localStorage.getItem('testID');
        var user = JSON.parse(localStorage.getItem('user'));
        // console.log('clientSequence', clientSequence);
        var periodicObject = {
            response: response,
            candidateId: user.email,
            testId: testID,
            periodicTime: clientSequence,
            state: 'periodic',
            practice: localStorage.getItem('practiceTest') == 'true' ? true : false
        };
        // console.log(res);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .post(this.apiUrl + '/response/response', periodicObject, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            return data;
        })
            .subscribe(function (res) {
            console.log('response', res);
            _this.serverErrorCheck.next(false);
            if (clientSequence === res.data.sequenceNumber) {
                var time = res.data.remainingDuration;
                // var time = 25;
                _this.replaceDuration.next(time);
                _this.serverResponseCount = 1;
            }
        }, function (err) {
            _this.serverResponseCount++;
            console.log('count', _this.serverResponseCount);
            if (_this.serverResponseCount === 5) {
                _this.serverErrorCheck.next(true);
                console.log('network fail' + _this.serverResponseCount);
            }
        });
    };
    ResponseService.prototype.testPause = function (sequence, pauseduration) {
        var testID = localStorage.getItem('testID');
        var user = JSON.parse(localStorage.getItem('user'));
        var pauseTestObject = {
            candidateId: user.email,
            testId: testID,
            pauseTime: sequence,
            pauseDuration: pauseduration,
            state: 'timePause',
            practice: localStorage.getItem('practiceTest') == 'true' ? true : false
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .post(this.apiUrl + '/response/response', pauseTestObject, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    //---------------------------------------------------
    // Finish Time
    //----------------------------------------------------
    ResponseService.prototype.getFinish = function (mode) {
        // localStorage.setItem('finishTime', finshTime);
        var testID = localStorage.getItem('testID');
        var user = JSON.parse(localStorage.getItem('user'));
        var time = new Date().toISOString();
        var testFinishObj = {
            candidateId: user.email,
            testId: testID,
            response: this.finalResp,
            finishTime: time,
            state: 'finish',
            finishMode: mode,
            practice: localStorage.getItem('practiceTest') == 'true' ? true : false
        };
        console.log(testFinishObj);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .post(this.apiUrl + '/response/response', testFinishObj, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ResponseService.prototype.mischeivehandler = function (attempts) {
        var date = new Date();
        var am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
        var hour = new Date().toLocaleTimeString();
        var time = hour + '' + am_pm;
        var user = JSON.parse(localStorage.getItem('user'));
        var testid = localStorage.getItem('testID');
        var event = {
            candidateId: user.email,
            testId: testid,
            eventTime: time,
            attempt: attempts,
            response: this.finalResp,
            state: 'proctoring'
        };
        // console.log('tab is changed just now', event);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .post(this.apiUrl + '/response/response', event, {
            headers: headers
        })
            .map(function (res) {
            var data = res.json();
            return data;
        });
    };
    ResponseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ResponseService);
    return ResponseService;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/response.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/results.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ResultsService = (function () {
    function ResultsService(http) {
        this.http = http;
        this.selectedTest = [];
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].apiUrl;
        this.token = localStorage.getItem('id_token');
    }
    // Handling error 
    ResultsService.prototype._errorHandler = function (error) {
        console.error(error);
        if (error.status == 0) {
            console.error(error);
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
        }
        else if (error.status > 400 && error.status < 500) {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
        }
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error || 'Server Error!!');
    };
    ResultsService.prototype.completedTests = function (testid, candidate) {
        // console.log(testid);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .get(this.apiUrl + '/response/result/' + testid + '?candidate=' + candidate, { headers: headers })
            .map(function (res) {
            var id = res.json();
            return id;
        })
            .catch(this._errorHandler);
    };
    ResultsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ResultsService);
    return ResultsService;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/results.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
        this.practiceTests = [];
        this.tests = [];
        this.completed = [];
        this.completedTests = [];
        this.completedTestsResult = [];
        this.show = [];
        this.practiceTestsSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.testsSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.completedSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.completedTestsSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.completedTestsResultSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.showSub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.userDetails = JSON.parse(localStorage.getItem('user'));
        this.testids = [];
        this.practiceTestids = [];
        this.QuestionIds = [];
        this.apiUrl = __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiUrl; //candidate backend api
        this.token = localStorage.getItem('id_token');
    }
    //=================================================
    //  ERROR HANDLING FUNCTION
    //=================================================
    ServerService.prototype._errorHandler = function (error) {
        console.error(error);
        if (error.status == 0) {
            console.error(error);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw({ _body: JSON.stringify({ msg: 'Server Not responding!!' }) });
        }
        else if (error.status > 400 && error.status < 500) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error || { _body: JSON.stringify({ msg: 'Something went wrong!!' }) });
        }
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].throw(error || 'Server Error!!');
    };
    //============================================
    //      MAIN FUCTION FOR ASSIGN TEST FETCHING
    //============================================
    ServerService.prototype.fetchAssignedTests = function () {
        var _this = this;
        var userid;
        this.backendFetchedTests().subscribe(function (data) {
            _this.practiceTests = [];
            _this.tests = [];
            _this.practiceTestids = [];
            _this.testids = [];
            data.forEach(function (test) {
                if (test.practice) {
                    _this.practiceTests.push(test);
                    _this.practiceTestids.push(test._id);
                }
                else {
                    _this.tests.push(test);
                    _this.testids.push(test._id);
                }
            });
            userid = _this.userDetails.email;
        }, function (err) {
            console.log(err);
            var error = JSON.parse(err._body);
            alertify.alert(error.msg);
        }, function () {
            _this.getStateofTest(_this.testids, userid)
                .subscribe(function (data) {
                _this.completedTestsResult = data;
                _this.completedTests = [];
                for (var j = 0; j < data.length; j++) {
                    for (var i = 0; i < _this.tests.length; i++) {
                        _this.completed[i] = false;
                        if (_this.tests[i]._id === data[j].testId) {
                            if (data[j].status == 'ongoing') {
                                _this.show[i] = true;
                            }
                            else if (data[j].status == 'finished') {
                                _this.show[i] = false;
                                _this.completed[i] = true;
                                _this.completedTests.push(_this.tests[i]);
                                _this.tests.splice(i, 1);
                            }
                            else {
                                _this.show[i] = false;
                            }
                        }
                    }
                }
            }, function (err) {
                console.log(err);
                var error = JSON.parse(err._body);
                alertify.alert(error.msg);
            }, function () {
                _this.getPracticeTestState(_this.practiceTestids, userid)
                    .subscribe(function (data) {
                    for (var j = 0; j < data.length; j++) {
                        for (var i = 0; i < _this.practiceTests.length; i++) {
                            if (_this.practiceTests[i]._id === data[j].testId) {
                                if (data[j].status == 'finished') {
                                    _this.practiceTests.splice(i, 1);
                                }
                            }
                        }
                    }
                    _this.reemitData();
                }, function (err) {
                    console.log(err);
                    var error = JSON.parse(err._body);
                    alertify.alert(error.msg);
                });
            });
        });
    };
    //====================================
    //  FETCHING TESTS FROM BACKEND API
    //====================================
    ServerService.prototype.backendFetchedTests = function () {
        var user = localStorage.getItem('user');
        var id = user;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        headers.append('id', user);
        return this.http.get(this.apiUrl + '/tests/getassignedtests', { headers: headers })
            .map(function (res) {
            return res.json();
        })
            .catch(this._errorHandler);
    };
    //=============================================================
    //    GETTING STATES OF TESTS
    //=============================================================
    ServerService.prototype.getStateofTest = function (testids, userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .put(this.apiUrl + '/response/state/' + userid, { tids: testids, practice: false }, { headers: headers })
            .map(function (response) {
            return response.json().test;
        })
            .catch(this._errorHandler);
    };
    //=================================================================
    //        GETTING STATE OF PRACTICE TESTS
    //=================================================================
    ServerService.prototype.getPracticeTestState = function (testids, userid) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .put(this.apiUrl + '/response/state/' + userid, { tids: testids, practice: true }, { headers: headers })
            .map(function (response) {
            return response.json().test;
        })
            .catch(this._errorHandler);
    };
    //=================================================================
    //        FETCHING QUESTION LIST
    //=================================================================
    ServerService.prototype.fetchQuestions = function (questionsId) {
        var ids = [];
        this.quesIds.push(localStorage.getItem('questionsId'));
        ids.push(this.quesIds);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + this.token);
        return this.http
            .put(this.apiUrl + '/tests/getQuestions', questionsId, {
            headers: headers
        })
            .map(function (res) {
            return res.json();
        })
            .catch(this._errorHandler);
    };
    //==================================================
    //      EMMITING DATA TO CHILDERN COMPONANTS
    //==================================================
    ServerService.prototype.reemitData = function () {
        this.practiceTestsSub.next(this.practiceTests);
        this.testsSub.next(this.tests);
        this.showSub.next(this.showSub);
        this.completedSub.next(this.completed);
        this.completedTestsSub.next(this.completedTests);
        this.completedTestsResultSub.next(this.completedTestsResult);
    };
    ServerService = __decorate([
        // custom alert
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], ServerService);
    return ServerService;
    var _a;
}());
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/server.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiUrl: '',
    periodicCallInterval: 10 * 1000
};
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/vishavjeet/Desktop/CFEX-NEW/candidate/angular-src/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map