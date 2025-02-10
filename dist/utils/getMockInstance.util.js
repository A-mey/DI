"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockInstance2 = void 0;
const class_registry_1 = require("../registry/class.registry");
const typeMap_registry_1 = require("../registry/typeMap.registry");
// export const getMockInstance = (className: string): any => {
//     console.log("classRegistry", ClassRegistry);
//     const ClassConstructorData = ClassRegistry.get(className);
//     if (!ClassConstructorData) {
//       throw new Error(`Class ${className} not found in registry.`);
//     }
//     const ClassConstructor = ClassConstructorData.mock || ClassConstructorData.real;
//     // const dependencyName = mockClassData.mock || mockClassData.real;
//     //             if (!dependencyName) {
//     //                 return;
//     //             }
//     if (!ClassConstructor) {
//       return;
//     }
//     const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
//     console.log("pramTypes", paramTypes);
//     const dependencies = paramTypes.map((paramType) => {
//       console.log("paramTypes", paramType);
//         if (!paramType) {
//         throw new Error(`Undefined dependency found for class ${className}`);
//       }
//       const concreteType = TypeMap.get(paramType) || paramType;
//       console.log("concreteType", concreteType);
//       const dependencyName = concreteType.mock.name || concreteType.real.name;
//       if (!ClassRegistry.has(dependencyName)) {
//         throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
//       }
//       return getMockInstance(dependencyName);
//     }).filter(x => x);
//     return new (ClassConstructor as any)(...dependencies);
// }
// export const getMockInstance2 = (actualClass: Function) : any=> {
//     const className = actualClass.name;
//     const ClassConstructorData = ClassRegistry.get(className);
//     if (!ClassConstructorData) {
//       throw new Error(`Class ${className} not found in registry.`);
//     }
//     const ClassConstructor = ClassConstructorData.constructor;
//     if (!ClassConstructor) {
//         throw new Error(`Undefined dependency found for class ${className}`);
//     }
//     // if (ClassConstructor && ClassConstructor.length) {
//         const dependencies = ClassConstructor.map((constructor: string | Function) => {
//             // if (!constructor) {
//             //     throw new Error(`Undefined dependency found for class ${className}`);
//             // }
//             console.log("constructor", constructor);
//             let dependency: Function | null = null;
//             if (typeof constructor === "string") {
//                 const mockClassData = TypeMap.get(constructor);
//                 if (!mockClassData) {
//                     return;
//                 }
//                 const dependencyName = mockClassData.mock || mockClassData.real;
//                 if (!dependencyName) {
//                     return;
//                 }
//                 const dependencyData = ClassRegistry.get(dependencyName)
//                 if (!dependencyData) {
//                     return;
//                 }
//                 dependency = dependencyData.class;
//             } else {
//                 dependency = constructor
//             }
//             return getMockInstance2(dependency as Function);
//         }).filter(x => x);
//     // }
//     console.log("dependencies", dependencies);
//     return new (ClassConstructor as any)(...dependencies);
// }
const getMockInstance2 = (actualClass) => {
    const className = actualClass.name;
    const ClassConstructorData = class_registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.class; // Fix: Use .class instead of .constructor
    if (!ClassConstructor) {
        throw new Error(`Undefined dependency found for class ${className}`);
    }
    const constructorParams = ClassConstructorData.constructor || []; // Ensure it's an array
    const dependencies = constructorParams.map((constructor) => {
        console.log("constructor", constructor);
        let dependency = null;
        if (typeof constructor === "string") {
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
        return (0, exports.getMockInstance2)(dependency);
    }).filter(Boolean); // Fix: Better filtering
    console.log("dependencies", dependencies);
    return new ClassConstructor(...dependencies);
};
exports.getMockInstance2 = getMockInstance2;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TW9ja0luc3RhbmNlLnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvZ2V0TW9ja0luc3RhbmNlLnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQTJEO0FBQzNELG1FQUF1RDtBQUV2RCwrREFBK0Q7QUFDL0QsbURBQW1EO0FBQ25ELGlFQUFpRTtBQUVqRSxtQ0FBbUM7QUFDbkMsc0VBQXNFO0FBQ3RFLFFBQVE7QUFFUix1RkFBdUY7QUFFdkYsMEVBQTBFO0FBQzFFLDRDQUE0QztBQUM1QyxpQ0FBaUM7QUFDakMsdUJBQXVCO0FBRXZCLCtCQUErQjtBQUMvQixnQkFBZ0I7QUFDaEIsUUFBUTtBQUVSLGtHQUFrRztBQUVsRyw0Q0FBNEM7QUFFNUMsMkRBQTJEO0FBQzNELDhDQUE4QztBQUM5Qyw0QkFBNEI7QUFDNUIsZ0ZBQWdGO0FBQ2hGLFVBQVU7QUFFVixrRUFBa0U7QUFDbEUsbURBQW1EO0FBRW5ELGlGQUFpRjtBQUVqRixrREFBa0Q7QUFDbEQsNEZBQTRGO0FBQzVGLFVBQVU7QUFFVixnREFBZ0Q7QUFDaEQseUJBQXlCO0FBRXpCLDZEQUE2RDtBQUM3RCxJQUFJO0FBRUosb0VBQW9FO0FBQ3BFLDBDQUEwQztBQUUxQyxpRUFBaUU7QUFFakUsbUNBQW1DO0FBQ25DLHNFQUFzRTtBQUN0RSxRQUFRO0FBRVIsaUVBQWlFO0FBRWpFLCtCQUErQjtBQUMvQixnRkFBZ0Y7QUFDaEYsUUFBUTtBQUVSLDREQUE0RDtBQUM1RCwwRkFBMEY7QUFDMUYscUNBQXFDO0FBQ3JDLDJGQUEyRjtBQUMzRixtQkFBbUI7QUFDbkIsdURBQXVEO0FBQ3ZELHNEQUFzRDtBQUN0RCxxREFBcUQ7QUFDckQsa0VBQWtFO0FBQ2xFLHdDQUF3QztBQUN4Qyw4QkFBOEI7QUFDOUIsb0JBQW9CO0FBQ3BCLG1GQUFtRjtBQUNuRix5Q0FBeUM7QUFDekMsOEJBQThCO0FBQzlCLG9CQUFvQjtBQUNwQiwyRUFBMkU7QUFDM0UseUNBQXlDO0FBQ3pDLDhCQUE4QjtBQUM5QixvQkFBb0I7QUFDcEIscURBQXFEO0FBQ3JELHVCQUF1QjtBQUN2QiwyQ0FBMkM7QUFDM0MsZ0JBQWdCO0FBQ2hCLCtEQUErRDtBQUMvRCw2QkFBNkI7QUFFN0IsV0FBVztBQUNYLGlEQUFpRDtBQUNqRCw2REFBNkQ7QUFDN0QsSUFBSTtBQUVHLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxXQUFxQixFQUFPLEVBQUU7SUFDM0QsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNuQyxNQUFNLG9CQUFvQixHQUFHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBRTFELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxLQUFLLENBQUMsU0FBUyxTQUFTLHlCQUF5QixDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVELE1BQU0sZ0JBQWdCLEdBQUcsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsMENBQTBDO0lBRS9GLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsd0NBQXdDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELE1BQU0saUJBQWlCLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxJQUFJLEVBQUUsQ0FBQyxDQUFDLHVCQUF1QjtJQUV6RixNQUFNLFlBQVksR0FBRyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUE4QixFQUFFLEVBQUU7UUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDeEMsSUFBSSxVQUFVLEdBQW9CLElBQUksQ0FBQztRQUV2QyxJQUFJLE9BQU8sV0FBVyxLQUFLLFFBQVEsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sYUFBYSxHQUFHLDBCQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxhQUFhO2dCQUFFLE9BQU87WUFFM0IsTUFBTSxjQUFjLEdBQUcsYUFBYSxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDO1lBQ2hFLElBQUksQ0FBQyxjQUFjO2dCQUFFLE9BQU87WUFFNUIsTUFBTSxjQUFjLEdBQUcsOEJBQWEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGNBQWM7Z0JBQUUsT0FBTztZQUU1QixVQUFVLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQztRQUN0QyxDQUFDO2FBQU0sQ0FBQztZQUNKLFVBQVUsR0FBRyxXQUFXLENBQUM7UUFDN0IsQ0FBQztRQUVELE9BQU8sSUFBQSx3QkFBZ0IsRUFBQyxVQUFzQixDQUFDLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsd0JBQXdCO0lBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzFDLE9BQU8sSUFBSyxnQkFBd0IsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQztBQXhDVyxRQUFBLGdCQUFnQixvQkF3QzNCIn0=