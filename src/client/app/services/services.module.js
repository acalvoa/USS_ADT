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
var index_1 = require('./index');
var index_2 = require('./index');
var guard_service_1 = require('./user/guard.service');
var http_1 = require('@angular/http');
var ServicesModule = (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        core_1.NgModule({
            imports: [http_1.HttpModule],
            declarations: [],
            providers: [guard_service_1.GuardService, index_1.UserService, index_2.RestService],
            exports: []
        }), 
        __metadata('design:paramtypes', [])
    ], ServicesModule);
    return ServicesModule;
}());
exports.ServicesModule = ServicesModule;
//# sourceMappingURL=services.module.js.map