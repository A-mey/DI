"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = exports.Interface = exports.getMockInstance = exports.getInstance = exports.service = void 0;
require("reflect-metadata");
const service_util_1 = require("./utils/service.util");
Object.defineProperty(exports, "service", { enumerable: true, get: function () { return service_util_1.service; } });
const getInstance_util_1 = require("./utils/getInstance.util");
Object.defineProperty(exports, "getInstance", { enumerable: true, get: function () { return getInstance_util_1.getInstance; } });
const getMockInstance_util_1 = require("./utils/getMockInstance.util");
Object.defineProperty(exports, "getMockInstance", { enumerable: true, get: function () { return getMockInstance_util_1.getMockInstance; } });
const interface_util_1 = require("./utils/interface.util");
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return interface_util_1.Interface; } });
const inject_util_1 = require("./utils/inject.util");
Object.defineProperty(exports, "Inject", { enumerable: true, get: function () { return inject_util_1.Inject; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTBCO0FBQzFCLHVEQUErQztBQU10Qyx3RkFOQSxzQkFBTyxPQU1BO0FBTGhCLCtEQUF1RDtBQUtyQyw0RkFMVCw4QkFBVyxPQUtTO0FBSjdCLHVFQUErRDtBQUloQyxnR0FKdEIsc0NBQWUsT0FJc0I7QUFIOUMsMkRBQW1EO0FBR0gsMEZBSHZDLDBCQUFTLE9BR3VDO0FBRnpELHFEQUE2QztBQUVjLHVGQUZsRCxvQkFBTSxPQUVrRCJ9