"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const Interface = (abstractType) => {
    return function (concreteType) {
        if (!abstractType || !concreteType) {
            throw new Error("Both abstractType and concreteType must be provided.");
        }
        // console.log("concreteType.name", concreteType.name);
        const className = class_registry_1.ClassRegistry.get(concreteType.name);
        // console.log("className", className);
        if (className === "") {
            throw new Error("No class found");
        }
        const realClassName = className.real ? className.real : null;
        const mockClassName = className.mock ? className.mock : null;
        const TypeData = typeMap_registry_1.TypeMap.get(abstractType);
        if (!TypeData) {
            typeMap_registry_1.TypeMap.set(abstractType, className);
        }
        else {
            if (realClassName) {
                TypeData.real = realClassName;
            }
            if (mockClassName) {
                TypeData.mock = mockClassName;
            }
        }
        // console.log("TypeMap", TypeMap);
    };
};
exports.Interface = Interface;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW50ZXJmYWNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUF1RDtBQUVoRCxNQUFNLFNBQVMsR0FBRyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtJQUM5QyxPQUFPLFVBQVUsWUFBc0I7UUFDdEMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCx1Q0FBdUM7UUFDdkMsSUFBSSxTQUFTLEtBQUssRUFBRSxFQUFFLENBQUM7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7UUFDRCxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDN0QsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzdELE1BQU0sUUFBUSxHQUFHLDBCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNmLDBCQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0QyxDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFBO1lBQzlCLENBQUM7WUFDRCxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNuQixRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQTtZQUM5QixDQUFDO1FBQ0YsQ0FBQztRQUNELG1DQUFtQztJQUN0QyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUM7QUExQlcsUUFBQSxTQUFTLGFBMEJwQiJ9