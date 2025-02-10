"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const Interface = (interfaceName) => {
    return function (actualClass) {
        if (!interfaceName || !actualClass) {
            throw new Error("Both abstractType and concreteType must be provided.");
        }
        // console.log("concreteType.name", concreteType.name);
        const className = class_registry_1.ClassRegistry.get(actualClass.name);
        // console.log("className", className);
        if (!className) {
            throw new Error("No class found");
        }
        const realClassName = className.type === "real" ? className.class.name : null;
        const mockClassName = className.type === "mock" ? className.class.name : null;
        const updatedClassName = { real: realClassName, mock: mockClassName };
        const TypeData = typeMap_registry_1.TypeMap.get(interfaceName);
        if (!TypeData) {
            typeMap_registry_1.TypeMap.set(interfaceName, updatedClassName);
        }
        else {
            if (realClassName) {
                TypeData.real = realClassName;
            }
            if (mockClassName) {
                TypeData.mock = mockClassName;
            }
        }
        console.log("TypeMap", typeMap_registry_1.TypeMap);
    };
};
exports.Interface = Interface;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW50ZXJmYWNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUEwRTtBQUVuRSxNQUFNLFNBQVMsR0FBRyxDQUFDLGFBQWtCLEVBQUUsRUFBRTtJQUMvQyxPQUFPLFVBQVUsV0FBcUI7UUFDckMsSUFBSSxDQUFDLGFBQWEsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3BDLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsdURBQXVEO1FBQ3ZELE1BQU0sU0FBUyxHQUFHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0RCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUNsQyxDQUFDO1FBQ0QsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUUsTUFBTSxhQUFhLEdBQUcsU0FBUyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFFOUUsTUFBTSxnQkFBZ0IsR0FBc0IsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQTtRQUN4RixNQUFNLFFBQVEsR0FBRywwQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDZiwwQkFBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM5QyxDQUFDO2FBQU0sQ0FBQztZQUNQLElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFBO1lBQzlCLENBQUM7WUFDRCxJQUFJLGFBQWEsRUFBRSxDQUFDO2dCQUNuQixRQUFRLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQTtZQUM5QixDQUFDO1FBQ0YsQ0FBQztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLDBCQUFPLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUE7QUFDRixDQUFDLENBQUM7QUE1QlcsUUFBQSxTQUFTLGFBNEJwQiJ9