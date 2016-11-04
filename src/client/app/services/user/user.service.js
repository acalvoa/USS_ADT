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
var index_1 = require('../../shared/index');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var UserService = (function () {
    function UserService(http, router) {
        this.router = router;
        this.http = http;
        this.status = false;
    }
    UserService.prototype.restore = function () {
        var _this = this;
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users/me', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            if (response.RESPONSE === 200) {
                _this.user = response.USER;
                _this.status = true;
                return true;
            }
            _this.router.navigate(['/login']);
            return false;
        });
    };
    UserService.prototype.createHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        var body = "email=" + username + "&password=" + password;
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + '/login/admin', body, {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            console.log(response);
            if (response.RESPONSE === 200) {
                _this.user = response.USER;
                _this.status = true;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users/logout', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            if (response.RESPONSE === 200) {
                _this.status = false;
                _this.user = null;
                return true;
            }
            return false;
        });
    };
    UserService.prototype.isLogged = function () {
        return this.restore();
    };
    UserService.prototype.getUser = function () {
        if (this.status) {
            return this.user;
        }
        else {
            return null;
        }
    };
    UserService.prototype.isAdmin = function () {
        if (this.user.ROLE.SUPERUSER) {
            return this.user;
        }
        else {
            return null;
        }
    };
    UserService.prototype.getUsers = function () {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + '/users', {
            headers: header,
            withCredentials: true
        })
            .map(function (res) {
            var response = res.json();
            return response;
        });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map