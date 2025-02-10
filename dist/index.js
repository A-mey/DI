"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const service_util_1 = require("./utils/service.util");
const getMockInstance_util_1 = require("./utils/getMockInstance.util");
const interface_util_1 = require("./utils/interface.util");
const inject_util_1 = require("./utils/inject.util");
// export { service, getInstance, getMockInstance, Interface, Inject }
const BInterfaceToken = Symbol("BInterface");
let B = class B {
    constructor() {
        this.getxyz = () => {
            return "1234";
        };
        console.log("B instantiated");
    }
};
B = __decorate([
    (0, interface_util_1.Interface)(BInterfaceToken),
    (0, service_util_1.service)()
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
    (0, interface_util_1.Interface)(BInterfaceToken),
    (0, service_util_1.service)("mock")
], BMock);
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
let D = class D {
    constructor() {
        this.getPqr = () => {
            return "PQR";
        };
    }
};
D = __decorate([
    (0, service_util_1.service)()
], D);
let C = class C {
    constructor(b, d) {
        this.b = b;
        this.d = d;
        this.getXYZ = () => {
            return this.b.getxyz();
        };
        this.getPQR = () => {
            return this.d.getPqr();
        };
        console.log("C instantiated");
    }
};
C = __decorate([
    (0, inject_util_1.Inject)([B, D]),
    (0, service_util_1.service)()
], C);
let E = class E {
    constructor(b, d) {
        this.b = b;
        this.d = d;
        this.getXYZ = () => {
            return this.b.getxyz();
        };
        this.getPQR = () => {
            return this.d.getPqr();
        };
        console.log("C instantiated");
    }
};
E = __decorate([
    (0, inject_util_1.Inject)(["BInterfaceToken", D]),
    (0, service_util_1.service)()
], E);
// const x = getInstance("A");
const y = (0, getMockInstance_util_1.getMockInstance2)(C);
// console.log("x", x, typeof x);
console.log("y", y, typeof y);
// console.log("x123", x.b);
console.log("y123", y.b);
// console.log("data", x.xyz());
console.log("data2", y.getXYZ());
// const z = getInstance("C");
// console.log("z", z, typeof z);
// console.log("data", z.getXYZ());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw0QkFBMEI7QUFDMUIsdURBQStDO0FBRS9DLHVFQUFnRTtBQUNoRSwyREFBbUQ7QUFDbkQscURBQTZDO0FBRTdDLHNFQUFzRTtBQUd0RSxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFJN0MsSUFBTSxDQUFDLEdBQVAsTUFBTSxDQUFDO0lBQ0g7UUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FLSixDQUFBO0FBUkssQ0FBQztJQUZOLElBQUEsMEJBQVMsRUFBQyxlQUFlLENBQUM7SUFDMUIsSUFBQSxzQkFBTyxHQUFFO0dBQ0osQ0FBQyxDQVFOO0FBSUQsSUFBTSxLQUFLLEdBQVgsTUFBTSxLQUFLO0lBQ1A7UUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxNQUFNLENBQUM7UUFDbEIsQ0FBQyxDQUFBO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7Q0FLSixDQUFBO0FBUkssS0FBSztJQUZWLElBQUEsMEJBQVMsRUFBQyxlQUFlLENBQUM7SUFDMUIsSUFBQSxzQkFBTyxFQUFDLE1BQU0sQ0FBQztHQUNWLEtBQUssQ0FRVjtBQU9ELGFBQWE7QUFDYixZQUFZO0FBRVosZUFBZTtBQUVmLG1FQUFtRTtBQUNuRSx5QkFBeUI7QUFDekIsZ0RBQWdEO0FBQ2hELFFBQVE7QUFFUixvQkFBb0I7QUFDcEIsa0NBQWtDO0FBQ2xDLFFBQVE7QUFDUixJQUFJO0FBR0osSUFBTSxDQUFDLEdBQVAsTUFBTSxDQUFDO0lBQ0g7UUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxLQUFLLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBSkQsQ0FBQztDQUtKLENBQUE7QUFSSyxDQUFDO0lBRE4sSUFBQSxzQkFBTyxHQUFFO0dBQ0osQ0FBQyxDQVFOO0FBSUQsSUFBTSxDQUFDLEdBQVAsTUFBTSxDQUFDO0lBQ0gsWUFBb0IsQ0FBSSxFQUFTLENBQUk7UUFBakIsTUFBQyxHQUFELENBQUMsQ0FBRztRQUFTLE1BQUMsR0FBRCxDQUFDLENBQUc7UUFJckMsV0FBTSxHQUFHLEdBQUcsRUFBRTtZQUNWLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzQixDQUFDLENBQUE7UUFFRCxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQVRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0NBU0osQ0FBQTtBQVpLLENBQUM7SUFGTixJQUFBLG9CQUFNLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDZCxJQUFBLHNCQUFPLEdBQUU7R0FDSixDQUFDLENBWU47QUFJRCxJQUFNLENBQUMsR0FBUCxNQUFNLENBQUM7SUFDSCxZQUFvQixDQUFhLEVBQVMsQ0FBSTtRQUExQixNQUFDLEdBQUQsQ0FBQyxDQUFZO1FBQVMsTUFBQyxHQUFELENBQUMsQ0FBRztRQUk5QyxXQUFNLEdBQUcsR0FBRyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQTtRQUVELFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFBO1FBVEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7Q0FTSixDQUFBO0FBWkssQ0FBQztJQUZOLElBQUEsb0JBQU0sRUFBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLElBQUEsc0JBQU8sR0FBRTtHQUNKLENBQUMsQ0FZTjtBQUVELDhCQUE4QjtBQUM5QixNQUFNLENBQUMsR0FBRyxJQUFBLHVDQUFnQixFQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzlCLGlDQUFpQztBQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUM5Qiw0QkFBNEI7QUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pCLGdDQUFnQztBQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUVqQyw4QkFBOEI7QUFDOUIsaUNBQWlDO0FBQ2pDLG1DQUFtQyJ9