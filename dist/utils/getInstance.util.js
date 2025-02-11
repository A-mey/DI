"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const getInstance = (actualClass) => {
    const className = actualClass.name;
    const ClassConstructorData = class_registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.class;
    if (!ClassConstructor) {
        throw new Error(`Undefined dependency found for class ${className}`);
    }
    const constructorParams = ClassConstructorData.constructor || [];
    const dependencies = constructorParams.map((constructor) => {
        console.log("constructor", constructor);
        let dependency = null;
        if (typeof constructor === "symbol") {
            const mockClassData = typeMap_registry_1.TypeMap.get(constructor);
            console.log("MockClassData", mockClassData);
            if (!mockClassData)
                return;
            const dependencyName = mockClassData.real;
            if (!dependencyName)
                return;
            const dependencyData = class_registry_1.ClassRegistry.get(dependencyName);
            if (!dependencyData)
                return;
            dependency = dependencyData.class;
        }
        else {
            dependency = constructor;
        }
        return (0, exports.getInstance)(dependency);
    }).filter(Boolean);
    console.log("dependencies", dependencies);
    return new ClassConstructor(...dependencies);
};
exports.getInstance = getInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5zdGFuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRJbnN0YW5jZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtEQUEyRDtBQUMzRCxtRUFBdUQ7QUFFaEQsTUFBTSxXQUFXLEdBQUcsQ0FBeUMsV0FBYyxFQUFtQixFQUFFO0lBQ3RHLE1BQU0sU0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDaEMsTUFBTSxvQkFBb0IsR0FBRyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUUxRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLFNBQVMsU0FBUyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxNQUFNLGdCQUFnQixHQUFHLG9CQUFvQixDQUFDLEtBQUssQ0FBQztJQUVwRCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUNwQixNQUFNLElBQUksS0FBSyxDQUFDLHdDQUF3QyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxNQUFNLGlCQUFpQixHQUFHLG9CQUFvQixDQUFDLFdBQVcsSUFBSSxFQUFFLENBQUM7SUFFakUsTUFBTSxZQUFZLEdBQUcsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBOEIsRUFBRSxFQUFFO1FBQzFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksVUFBVSxHQUFvQixJQUFJLENBQUM7UUFFdkMsSUFBSSxPQUFPLFdBQVcsS0FBSyxRQUFRLEVBQUUsQ0FBQztZQUNsQyxNQUFNLGFBQWEsR0FBRywwQkFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN4RCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYTtnQkFBRSxPQUFPO1lBRTNCLE1BQU0sY0FBYyxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUM7WUFDMUMsSUFBSSxDQUFDLGNBQWM7Z0JBQUUsT0FBTztZQUU1QixNQUFNLGNBQWMsR0FBRyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsY0FBYztnQkFBRSxPQUFPO1lBRTVCLFVBQVUsR0FBRyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBQ3RDLENBQUM7YUFBTSxDQUFDO1lBQ0osVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUM3QixDQUFDO1FBRUQsT0FBTyxJQUFBLG1CQUFXLEVBQUMsVUFBaUIsQ0FBQyxDQUFDO0lBQzFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVuQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMxQyxPQUFPLElBQUssZ0JBQW9DLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUE7QUF6Q1ksUUFBQSxXQUFXLGVBeUN2QiJ9