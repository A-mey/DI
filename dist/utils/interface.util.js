"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const Interface = (interfaceName) => {
    console.log("type", typeof interfaceName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW50ZXJmYWNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUEwRTtBQUVuRSxNQUFNLFNBQVMsR0FBRyxDQUFDLGFBQXFCLEVBQUUsRUFBRTtJQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxPQUFPLGFBQWEsQ0FBQyxDQUFDO0lBQzFDLE9BQU8sVUFBVSxXQUFxQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFDRCx1REFBdUQ7UUFDdkQsTUFBTSxTQUFTLEdBQUcsOEJBQWEsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELHVDQUF1QztRQUN2QyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ2xDLENBQUM7UUFDRCxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM5RSxNQUFNLGFBQWEsR0FBRyxTQUFTLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUU5RSxNQUFNLGdCQUFnQixHQUFzQixFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFBO1FBQ3hGLE1BQU0sUUFBUSxHQUFHLDBCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNmLDBCQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlDLENBQUM7YUFBTSxDQUFDO1lBQ1AsSUFBSSxhQUFhLEVBQUUsQ0FBQztnQkFDbkIsUUFBUSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUE7WUFDOUIsQ0FBQztZQUNELElBQUksYUFBYSxFQUFFLENBQUM7Z0JBQ25CLFFBQVEsQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFBO1lBQzlCLENBQUM7UUFDRixDQUFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsMEJBQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQztBQTdCVyxRQUFBLFNBQVMsYUE2QnBCIn0=