"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_module_1 = require('./login/login.module');
var signup_module_1 = require('./signup/signup.module');
var dashboard_module_1 = require('./dashboard/dashboard.module');
var forms_1 = require('@angular/forms');
var ModulesModule = (function () {
    function ModulesModule() {
    }
    ModulesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, login_module_1.LoginModule, signup_module_1.SignupModule, dashboard_module_1.DashboardModule],
            declarations: [],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ModulesModule);
    return ModulesModule;
}());
exports.ModulesModule = ModulesModule;
//# sourceMappingURL=modules.module.js.map