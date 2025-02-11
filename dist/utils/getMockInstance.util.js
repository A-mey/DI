"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockInstance = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
const getMockInstance = (actualClass) => {
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
            if (!mockClassData)
                return;
            const dependencyName = mockClassData.mock || mockClassData.real;
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
        return (0, exports.getMockInstance)(dependency);
    }).filter(Boolean);
    console.log("dependencies", dependencies);
    return new ClassConstructor(...dependencies);
};
exports.getMockInstance = getMockInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TW9ja0luc3RhbmNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZ2V0TW9ja0luc3RhbmNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUF1RDtBQUVoRCxNQUFNLGVBQWUsR0FBRyxDQUF5QyxXQUFjLEVBQW1CLEVBQUU7SUFDdkcsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNuQyxNQUFNLG9CQUFvQixHQUFHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTFELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxTQUFTLHlCQUF5QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDO0lBRXBELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELE1BQU0saUJBQWlCLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQztJQUVqRSxNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUE4QixFQUFFLEVBQUU7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEMsSUFBSSxVQUFVLEdBQW9CLElBQUksQ0FBQztRQUV2QyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sYUFBYSxHQUFHLDBCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhO2dCQUFFLE9BQU87WUFFM0IsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjO2dCQUFFLE9BQU87WUFFNUIsTUFBTSxjQUFjLEdBQUcsOEJBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGNBQWM7Z0JBQUUsT0FBTztZQUU1QixVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDO2FBQU0sQ0FBQztZQUNKLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDN0IsQ0FBQztRQUVELE9BQU8sSUFBQSx1QkFBZSxFQUFDLFVBQWlCLENBQUMsQ0FBQztJQUM5QyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDMUMsT0FBTyxJQUFLLGdCQUFvQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBeENXLFFBQUEsZUFBZSxtQkF3QzFCIn0=