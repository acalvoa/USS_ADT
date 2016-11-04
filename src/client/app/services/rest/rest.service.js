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
var RestService = (function () {
    function RestService(http, router) {
        this.router = router;
        this.http = http;
    }
    RestService.prototype.createHeaders = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
    };
    RestService.prototype.post = function (data, uri) {
        var body = "";
        for (var key in data) {
            if (data[key] != null && data[key] != "") {
                if (typeof data[key] == "object")
                    data[key] = JSON.stringify(data[key]);
                body += key + ("=" + data[key] + "&");
            }
        }
        body = body.substring(0, (body.length - 1));
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + uri, body, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.postMap = function (data, uri) {
        var body = "";
        for (var key in data) {
            if (data[key] != null && data[key] != "") {
                if (typeof data[key] == "object")
                    data[key] = JSON.stringify(data[key]);
                body += key + ("=" + data[key] + "&");
            }
        }
        body = body.substring(0, (body.length - 1));
        var header = this.createHeaders();
        return this.http.post(index_1.Config.API + uri, body, {
            headers: header,
            withCredentials: true
        });
    };
    RestService.prototype.get = function (uri) {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + uri, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.getMap = function (uri) {
        var header = this.createHeaders();
        return this.http.get(index_1.Config.API + uri, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.delete = function (id, uri) {
        var header = this.createHeaders();
        return this.http.delete(index_1.Config.API + uri + "/" + id, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService.prototype.put = function (id, uri, data) {
        var body = "";
        for (var key in data) {
            if (data[key] != null && data[key] != "") {
                if (typeof data[key] == "object")
                    data[key] = JSON.stringify(data[key]);
                body += key + ("=" + data[key] + "&");
            }
        }
        body = body.substring(0, (body.length - 1));
        var header = this.createHeaders();
        return this.http.put(index_1.Config.API + uri + "/" + id, body, {
            headers: header,
            withCredentials: true
        }).map(function (res) {
            var response = res.json();
            return response;
        });
    };
    RestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], RestService);
    return RestService;
}());
exports.RestService = RestService;
//# sourceMappingURL=rest.service.js.map