"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const node_test_1 = require("node:test");
const service_util_1 = require("../utils/service.util");
const inject_util_1 = require("../utils/inject.util");
const getMockInstance_util_1 = require("../utils/getMockInstance.util");
const interface_util_1 = require("../utils/interface.util");
const getInstance_util_1 = require("../utils/getInstance.util");
(0, node_test_1.describe)('Register classes', () => {
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
        (0, inject_util_1.Inject)([BInterfaceToken, D]),
        (0, service_util_1.service)()
    ], E);
    (0, node_test_1.it)('should add and retrive mock classes', () => {
        const y = (0, getMockInstance_util_1.getMockInstance)(E);
        const data2 = y.getXYZ();
        console.log("data2", data2);
        assert_1.default.strictEqual(data2, "5678");
    });
    (0, node_test_1.it)('should add and retrieve real classes', () => {
        const y = (0, getInstance_util_1.getInstance)(E);
        const data2 = y.getXYZ();
        console.log("data2", data2);
        assert_1.default.strictEqual(data2, "1234");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L2luZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIseUNBQW1FO0FBQ25FLHdEQUFnRDtBQUVoRCxzREFBOEM7QUFDOUMsd0VBQWdFO0FBQ2hFLDREQUFvRDtBQUNwRCxnRUFBd0Q7QUFHeEQsSUFBQSxvQkFBUSxFQUFDLGtCQUFrQixFQUFFLEdBQUcsRUFBRTtJQUM5QixNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFJN0MsSUFBTSxDQUFDLEdBQVAsTUFBTSxDQUFDO1FBQ0g7WUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNWLE9BQU8sTUFBTSxDQUFDO1lBQ2xCLENBQUMsQ0FBQTtZQUxHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBS0osQ0FBQTtJQVJLLENBQUM7UUFGTixJQUFBLDBCQUFTLEVBQUMsZUFBZSxDQUFDO1FBQzFCLElBQUEsc0JBQU8sR0FBRTtPQUNKLENBQUMsQ0FRTjtJQUlELElBQU0sS0FBSyxHQUFYLE1BQU0sS0FBSztRQUNQO1lBSUEsV0FBTSxHQUFHLEdBQUcsRUFBRTtnQkFDVixPQUFPLE1BQU0sQ0FBQztZQUNsQixDQUFDLENBQUE7WUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDdkMsQ0FBQztLQUtKLENBQUE7SUFSSyxLQUFLO1FBRlYsSUFBQSwwQkFBUyxFQUFDLGVBQWUsQ0FBQztRQUMxQixJQUFBLHNCQUFPLEVBQUMsTUFBTSxDQUFDO09BQ1YsS0FBSyxDQVFWO0lBT0QsSUFBTSxDQUFDLEdBQVAsTUFBTSxDQUFDO1FBQ0g7WUFJQSxXQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNWLE9BQU8sS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQTtRQUpELENBQUM7S0FLSixDQUFBO0lBUkssQ0FBQztRQUROLElBQUEsc0JBQU8sR0FBRTtPQUNKLENBQUMsQ0FRTjtJQUlELElBQU0sQ0FBQyxHQUFQLE1BQU0sQ0FBQztRQUNILFlBQW9CLENBQUksRUFBUyxDQUFJO1lBQWpCLE1BQUMsR0FBRCxDQUFDLENBQUc7WUFBUyxNQUFDLEdBQUQsQ0FBQyxDQUFHO1lBSXJDLFdBQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQTtZQUVELFdBQU0sR0FBRyxHQUFHLEVBQUU7Z0JBQ1YsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQzNCLENBQUMsQ0FBQTtZQVRHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDO0tBU0osQ0FBQTtJQVpLLENBQUM7UUFGTixJQUFBLG9CQUFNLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDZCxJQUFBLHNCQUFPLEdBQUU7T0FDSixDQUFDLENBWU47SUFJRCxJQUFNLENBQUMsR0FBUCxNQUFNLENBQUM7UUFDSCxZQUFvQixDQUFhLEVBQVMsQ0FBSTtZQUExQixNQUFDLEdBQUQsQ0FBQyxDQUFZO1lBQVMsTUFBQyxHQUFELENBQUMsQ0FBRztZQUk5QyxXQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUE7WUFFRCxXQUFNLEdBQUcsR0FBRyxFQUFFO2dCQUNWLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQixDQUFDLENBQUE7WUFURyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDbEMsQ0FBQztLQVNKLENBQUE7SUFaSyxDQUFDO1FBRk4sSUFBQSxvQkFBTSxFQUFDLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUEsc0JBQU8sR0FBRTtPQUNKLENBQUMsQ0FZTjtJQUVELElBQUEsY0FBRSxFQUFFLHFDQUFxQyxFQUFFLEdBQUcsRUFBRTtRQUM1QyxNQUFNLENBQUMsR0FBRyxJQUFBLHNDQUFlLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUMsQ0FBQTtJQUVGLElBQUEsY0FBRSxFQUFFLHNDQUFzQyxFQUFFLEdBQUcsRUFBRTtRQUM3QyxNQUFNLENBQUMsR0FBRyxJQUFBLDhCQUFXLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzVCLGdCQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNyQyxDQUFDLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQyxDQUFBIn0=