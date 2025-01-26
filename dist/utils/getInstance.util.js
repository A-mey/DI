"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const getInstance = (className) => {
    const ClassConstructorData = class_registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.real;
    if (!ClassConstructor) {
        return;
    }
    const paramTypes = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
    let dependencies = paramTypes.map((paramType) => {
        console.log("paramTypes", paramType);
        if (!paramType) {
            throw new Error(`Undefined dependency found for class ${className}`);
        }
        const concreteType = typeMap_registry_1.TypeMap.get(paramType) || paramType;
        console.log("concreteType", concreteType);
        const dependencyName = concreteType.real.name;
        if (!class_registry_1.ClassRegistry.has(dependencyName)) {
            throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
        }
        return (0, exports.getInstance)(dependencyName);
    }).filter(x => x);
    console.log("dependencies", dependencies);
    return new ClassConstructor(...dependencies);
};
exports.getInstance = getInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5zdGFuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRJbnN0YW5jZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEyRDtBQUMzRCxtRUFBdUQ7QUFFaEQsTUFBTSxXQUFXLEdBQUcsQ0FBQyxTQUFpQixFQUFPLEVBQUU7SUFDcEQsTUFBTSxvQkFBb0IsR0FBRyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUUxQixNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsU0FBUyx5QkFBeUIsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQztJQUVuRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN0QixPQUFPO0lBQ1QsQ0FBQztJQUVELE1BQU0sVUFBVSxHQUFVLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFM0YsSUFBSSxZQUFZLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1FBQzlDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZFLENBQUM7UUFFRCxNQUFNLFlBQVksR0FBRywwQkFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxTQUFTLENBQUM7UUFDekQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFFMUMsTUFBTSxjQUFjLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFOUMsSUFBSSxDQUFDLDhCQUFhLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxjQUFjLGNBQWMsd0JBQXdCLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVELE9BQU8sSUFBQSxtQkFBVyxFQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRWxCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBRTFDLE9BQU8sSUFBSyxnQkFBd0IsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0FBQ3hELENBQUMsQ0FBQztBQXJDVyxRQUFBLFdBQVcsZUFxQ3RCIn0=