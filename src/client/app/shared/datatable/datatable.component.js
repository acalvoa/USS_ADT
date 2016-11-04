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
var DatatableComponent = (function () {
    function DatatableComponent() {
        this.delete = new core_1.EventEmitter();
        this.edit = new core_1.EventEmitter();
    }
    DatatableComponent.prototype.ngOnInit = function () {
    };
    DatatableComponent.prototype.doEdit = function (obj) {
        this.edit.emit(obj);
    };
    DatatableComponent.prototype.doDelete = function (obj) {
        this.delete.emit(obj);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "config", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], DatatableComponent.prototype, "data", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "edit", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'datatable-cmp',
            templateUrl: 'datatable.component.html',
            styleUrls: ['datatable.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map