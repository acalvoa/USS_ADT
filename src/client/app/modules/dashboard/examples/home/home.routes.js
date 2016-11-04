"use strict";
var index_1 = require('./index');
exports.HomeRoutes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: index_1.HomeComponent
    }
];
//# sourceMappingURL=home.routes.js.map