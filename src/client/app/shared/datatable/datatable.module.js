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
var forms_1 = require('@angular/forms');
var datatable_component_1 = require('./datatable.component');
var ng_bootstrap_1 = require('@ng-bootstrap/ng-bootstrap');
var index_1 = require('../../pipes/index');
var DatatableModule = (function () {
    function DatatableModule() {
    }
    DatatableModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, ng_bootstrap_1.NgbModule.forRoot()],
            declarations: [datatable_component_1.DatatableComponent, index_1.KeysPipe],
            exports: [common_1.CommonModule, forms_1.FormsModule, datatable_component_1.DatatableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableModule);
    return DatatableModule;
}());
exports.DatatableModule = DatatableModule;
//# sourceMappingURL=datatable.module.js.map