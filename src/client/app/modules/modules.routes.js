"use strict";
var index_1 = require('./login/index');
var index_2 = require('./signup/index');
var index_3 = require('./dashboard/index');
exports.ModulesRoutes = index_3.DashboardRoutes.concat(index_1.LoginRoutes, index_2.SignupRoutes);
//# sourceMappingURL=modules.routes.js.map