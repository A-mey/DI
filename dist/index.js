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
// const BInterfaceToken = Symbol("BInterface");
// @Interface(BInterfaceToken)
// @service()
// class B implements BInterface {
//     constructor () {
//         console.log("B instantiated");
//     }
//     getxyz = () => {
//         return "1234";
//     }
// }
// @Interface(BInterfaceToken)
// @service("mock")
// class BMock implements BInterface {
//     constructor () {
//         console.log("B mock instantiated");
//     }
//     getxyz = () => {
//         return "5678";
//     }
// }
// interface BInterface {
//     getxyz(): string
// }
// @service()
// class A {
//     // b: B;
//     constructor(@Inject(BInterfaceToken) public b: BInterface) {
//         // this.b = b;
//         console.log("A instantiated with B");
//     }
//     xyz = () => {
//         return this.b.getxyz();
//     }
// }
// const x = getInstance("A");
// const y = getMockInstance("A");
// console.log("x", x, typeof x);
// console.log("y", y, typeof y);
// console.log("x123", x.b);
// console.log("y123", y.b);
// console.log("data", x.xyz());
// console.log("data2", y.xyz());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNEJBQTBCO0FBQzFCLHVEQUErQztBQU10Qyx3RkFOQSxzQkFBTyxPQU1BO0FBTGhCLCtEQUF1RDtBQUtyQyw0RkFMVCw4QkFBVyxPQUtTO0FBSjdCLHVFQUErRDtBQUloQyxnR0FKdEIsc0NBQWUsT0FJc0I7QUFIOUMsMkRBQW1EO0FBR0gsMEZBSHZDLDBCQUFTLE9BR3VDO0FBRnpELHFEQUE2QztBQUVjLHVGQUZsRCxvQkFBTSxPQUVrRDtBQUdqRSxnREFBZ0Q7QUFFaEQsOEJBQThCO0FBQzlCLGFBQWE7QUFDYixrQ0FBa0M7QUFDbEMsdUJBQXVCO0FBQ3ZCLHlDQUF5QztBQUN6QyxRQUFRO0FBRVIsdUJBQXVCO0FBQ3ZCLHlCQUF5QjtBQUN6QixRQUFRO0FBQ1IsSUFBSTtBQUVKLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsc0NBQXNDO0FBQ3RDLHVCQUF1QjtBQUN2Qiw4Q0FBOEM7QUFDOUMsUUFBUTtBQUVSLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsUUFBUTtBQUNSLElBQUk7QUFJSix5QkFBeUI7QUFDekIsdUJBQXVCO0FBQ3ZCLElBQUk7QUFHSixhQUFhO0FBQ2IsWUFBWTtBQUVaLGVBQWU7QUFFZixtRUFBbUU7QUFDbkUseUJBQXlCO0FBQ3pCLGdEQUFnRDtBQUNoRCxRQUFRO0FBRVIsb0JBQW9CO0FBQ3BCLGtDQUFrQztBQUNsQyxRQUFRO0FBQ1IsSUFBSTtBQUVKLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIsNEJBQTRCO0FBQzVCLGdDQUFnQztBQUNoQyxpQ0FBaUMifQ==