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
console.log("xyz", Reflect.getMetadata("design:paramtypes", A));
(0, service_util_1.interface1)(BInterfaceToken, B);
console.log("Registry", registry_1.ClassRegistry);
const x = (0, getInstance_util_1.getRealInstance)("A");
// const y = getMockInstance("A");
console.log("x", x, typeof x);
// console.log("y", y, typeof y);
console.log("x123", x.b);
// console.log("y123", y.b);
console.log("data", x.xyz());
// console.log("data2", y.xyz());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQW1FO0FBQ25FLGtEQUFvRDtBQUNwRCwrREFBNEU7QUFJNUUsSUFDTSxDQUFDLEdBRFAsTUFDTSxDQUFDO0lBQ0g7UUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FLSixDQUFBO0FBUkssQ0FBQztJQUROLElBQUEsc0JBQU8sR0FBRTs7R0FDSixDQUFDLENBUU47QUFtQkQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTdDLElBQ00sQ0FBQyxHQURQLE1BQ00sQ0FBQztJQUVILFFBQVE7SUFFUixZQUFxQyxDQUFvQjtRQUFiLE1BQUMsR0FBRCxDQUFDLENBQVk7UUFLekQsUUFBRyxHQUFHLEdBQUcsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSwrQkFBK0I7WUFDbkQsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQVBHLGNBQWM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDekMsQ0FBQztDQU1KLENBQUE7QUFiSyxDQUFDO0lBRE4sSUFBQSxzQkFBTyxHQUFFO0lBS08sV0FBQSxJQUFBLHFCQUFNLEVBQUMsZUFBZSxDQUFDLENBQUE7O0dBSmxDLENBQUMsQ0FhTjtBQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUVoRSxJQUFBLHlCQUFVLEVBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBRS9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLHdCQUFhLENBQUMsQ0FBQztBQUN2QyxNQUFNLENBQUMsR0FBRyxJQUFBLGtDQUFlLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDL0Isa0NBQWtDO0FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlDQUFpQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDekIsNEJBQTRCO0FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzdCLGlDQUFpQyJ9