"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockInstance = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const getMockInstance = (className) => {
    console.log("classRegistry", class_registry_1.ClassRegistry);
    const ClassConstructorData = class_registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.mock || ClassConstructorData.real;
    if (!ClassConstructor) {
        return;
    }
    const paramTypes = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
    console.log("pramTypes", paramTypes);
    const dependencies = paramTypes.map((paramType) => {
        console.log("paramTypes", paramType);
        if (!paramType) {
            throw new Error(`Undefined dependency found for class ${className}`);
        }
        const concreteType = typeMap_registry_1.TypeMap.get(paramType) || paramType;
        console.log("concreteType", concreteType);
        const dependencyName = concreteType.mock.name || concreteType.real.name;
        if (!class_registry_1.ClassRegistry.has(dependencyName)) {
            throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
        }
        return (0, exports.getMockInstance)(dependencyName);
    }).filter(x => x);
    return new ClassConstructor(...dependencies);
};
exports.getMockInstance = getMockInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TW9ja0luc3RhbmNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZ2V0TW9ja0luc3RhbmNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUF1RDtBQUVoRCxNQUFNLGVBQWUsR0FBRyxDQUFDLFNBQWlCLEVBQU8sRUFBRTtJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSw4QkFBYSxDQUFDLENBQUM7SUFDNUMsTUFBTSxvQkFBb0IsR0FBRyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUMxQixNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsU0FBUyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLElBQUksSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFFaEYsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDdEIsT0FBTztJQUNULENBQUM7SUFFRCxNQUFNLFVBQVUsR0FBVSxPQUFPLENBQUMsV0FBVyxDQUFDLG1CQUFtQixFQUFFLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBRTNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBRXJDLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyx3Q0FBd0MsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUN2RSxDQUFDO1FBRUQsTUFBTSxZQUFZLEdBQUcsMEJBQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksU0FBUyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBRTFDLE1BQU0sY0FBYyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhFLElBQUksQ0FBQyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO1lBQ3ZDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxjQUFjLHdCQUF3QixTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLENBQUM7UUFFRCxPQUFPLElBQUEsdUJBQWUsRUFBQyxjQUFjLENBQUMsQ0FBQztJQUN6QyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVsQixPQUFPLElBQUssZ0JBQXdCLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUE7QUFyQ1ksUUFBQSxlQUFlLG1CQXFDM0IifQ==