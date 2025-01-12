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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const service_util_1 = require("./utils/service.util");
const registry_1 = require("./registry/registry");
const getInstance_util_1 = require("./utils/getInstance.util");
let B = class B {
    constructor() {
        this.getxyz = () => {
            return "1234";
        };
        console.log("B instantiated");
    }
};
B = __decorate([
    (0, service_util_1.service)(),
    __metadata("design:paramtypes", [])
], B);
let BMock = class BMock {
    constructor() {
        this.getxyz = () => {
            return "5678";
        };
        console.log("B mock instantiated");
    }
};
BMock = __decorate([
    (0, service_util_1.service)("mock"),
    __metadata("design:paramtypes", [])
], BMock);
const BInterfaceToken = Symbol("BInterface");
let A = class A {
    // b: B;
    constructor(b) {
        this.b = b;
        this.xyz = () => {
            console.log(this); // Debugging the 'this' context
            return this.b.getxyz();
        };
        // this.b = b;
        console.log("A instantiated with B");
    }
};
A = __decorate([
    (0, service_util_1.service)(),
    __param(0, (0, service_util_1.Inject)(BInterfaceToken)),
    __metadata("design:paramtypes", [Object])
], A);
// console.log("xyz", Reflect.getMetadata("design:paramtypes", A));
(0, service_util_1.interface1)(BInterfaceToken, B);
(0, service_util_1.interface1)(BInterfaceToken, BMock);
console.log("Registry", registry_1.ClassRegistry);
const x = (0, getInstance_util_1.getRealInstance)("A");
// const y = getMockInstance("A");
console.log("x", x, typeof x);
// console.log("y", y, typeof y);
console.log("x123", x.b);
// console.log("y123", y.b);
console.log("data", x.xyz());
// console.log("data2", y.xyz());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQW1FO0FBQ25FLGtEQUFvRDtBQUNwRCwrREFBNEU7QUFJNUUsSUFDTSxDQUFDLEdBRFAsTUFDTSxDQUFDO0lBQ0g7UUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FLSixDQUFBO0FBUkssQ0FBQztJQUROLElBQUEsc0JBQU8sR0FBRTs7R0FDSixDQUFDLENBUU47QUFFRCxJQUNNLEtBQUssR0FEWCxNQUNNLEtBQUs7SUFDUDtRQUlBLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDVixPQUFPLE1BQU0sQ0FBQztRQUNsQixDQUFDLENBQUE7UUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkMsQ0FBQztDQUtKLENBQUE7QUFSSyxLQUFLO0lBRFYsSUFBQSxzQkFBTyxFQUFDLE1BQU0sQ0FBQzs7R0FDVixLQUFLLENBUVY7QUFRRCxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFN0MsSUFDTSxDQUFDLEdBRFAsTUFDTSxDQUFDO0lBRUgsUUFBUTtJQUVSLFlBQXFDLENBQW9CO1FBQWIsTUFBQyxHQUFELENBQUMsQ0FBWTtRQUt6RCxRQUFHLEdBQUcsR0FBRyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLCtCQUErQjtZQUNuRCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFBO1FBUEcsY0FBYztRQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUN6QyxDQUFDO0NBTUosQ0FBQTtBQWJLLENBQUM7SUFETixJQUFBLHNCQUFPLEdBQUU7SUFLTyxXQUFBLElBQUEscUJBQU0sRUFBQyxlQUFlLENBQUMsQ0FBQTs7R0FKbEMsQ0FBQyxDQWFOO0FBRUQsbUVBQW1FO0FBRW5FLElBQUEseUJBQVUsRUFBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsSUFBQSx5QkFBVSxFQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUVuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSx3QkFBYSxDQUFDLENBQUM7QUFDdkMsTUFBTSxDQUFDLEdBQUcsSUFBQSxrQ0FBZSxFQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQy9CLGtDQUFrQztBQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM5QixpQ0FBaUM7QUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLDRCQUE0QjtBQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUM3QixpQ0FBaUMifQ==