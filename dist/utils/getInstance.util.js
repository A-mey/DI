"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockInstance = exports.getRealInstance = void 0;
require("reflect-metadata");
const registry_1 = require("../registry/registry");
// export const getRealInstance = (className: string): any => {
//   const ClassConstructorData = ClassRegistry.get(className);
//   if (!ClassConstructorData) {
//     throw new Error(`Class ${className} not found in registry.`);
//   }
//   const ClassConstructor = ClassConstructorData.real;
//   // Retrieve constructor parameter types
//   const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
//   console.log("pramTypes", paramTypes);
//   // console.log("Metadata for A:", Reflect.getMetadata("design:paramtypes", ClassConstructor.name));
//   // Log for debugging
//   // console.log(`Resolving dependencies for ${className}:`, paramTypes.map(pt => pt?.name || "undefined"));
//   // Recursively resolve dependencies
//   const dependencies = paramTypes.map((paramType) => {
//     console.log("paramType", paramType);
//     if (!paramType) {
//       throw new Error(`Undefined dependency found for class ${className}`);
//     }
//     const dependencyName = paramType.name;
//     console.log("dependencyName", dependencyName);
//     if (!ClassRegistry.has(dependencyName)) {
//       throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
//     }
//     return getRealInstance(dependencyName);
//   });
//   // Instantiate the class with resolved dependencies
//   return new (ClassConstructor as any)(...dependencies);
// }
const getRealInstance = (className) => {
    const ClassConstructorData = registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.real;
    // Retrieve constructor parameter types
    const paramTypes = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
    // Resolve dependencies
    const dependencies = paramTypes.map((paramType) => {
        if (!paramType) {
            throw new Error(`Undefined dependency found for class ${className}`);
        }
        // Check if paramType corresponds to a token
        const concreteType = registry_1.TypeMap.get(paramType) || paramType;
        const dependencyName = concreteType.name;
        if (!registry_1.ClassRegistry.has(dependencyName)) {
            throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
        }
        return (0, exports.getRealInstance)(dependencyName);
    });
    // Instantiate the class with resolved dependencies
    return new ClassConstructor(...dependencies);
};
exports.getRealInstance = getRealInstance;
const getMockInstance = (className) => {
    const ClassConstructorData = registry_1.ClassRegistry.get(className);
    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }
    const ClassConstructor = ClassConstructorData.mock;
    // Retrieve constructor parameter types
    const paramTypes = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
    console.log("pramTypes", paramTypes);
    // console.log("Metadata for A:", Reflect.getMetadata("design:paramtypes", ClassConstructor.name));
    // Log for debugging
    // console.log(`Resolving dependencies for ${className}:`, paramTypes.map(pt => pt?.name || "undefined"));
    // Recursively resolve dependencies
    const dependencies = paramTypes.map((paramType) => {
        console.log("paramType", paramType);
        if (!paramType) {
            throw new Error(`Undefined dependency found for class ${className}`);
        }
        const dependencyName = paramType.name;
        console.log("dependencyName", dependencyName);
        if (!registry_1.ClassRegistry.has(dependencyName)) {
            throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
        }
        return (0, exports.getMockInstance)(dependencyName);
    });
    // Instantiate the class with resolved dependencies
    return new ClassConstructor(...dependencies);
};
exports.getMockInstance = getMockInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5zdGFuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRJbnN0YW5jZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtREFBOEQ7QUFFOUQsK0RBQStEO0FBQy9ELCtEQUErRDtBQUUvRCxpQ0FBaUM7QUFDakMsb0VBQW9FO0FBQ3BFLE1BQU07QUFFTix3REFBd0Q7QUFFeEQsNENBQTRDO0FBQzVDLGdHQUFnRztBQUVoRywwQ0FBMEM7QUFFMUMsd0dBQXdHO0FBRXhHLHlCQUF5QjtBQUN6QiwrR0FBK0c7QUFFL0csd0NBQXdDO0FBQ3hDLHlEQUF5RDtBQUN6RCwyQ0FBMkM7QUFDM0Msd0JBQXdCO0FBQ3hCLDhFQUE4RTtBQUM5RSxRQUFRO0FBRVIsNkNBQTZDO0FBQzdDLHFEQUFxRDtBQUNyRCxnREFBZ0Q7QUFDaEQsMEZBQTBGO0FBQzFGLFFBQVE7QUFFUiw4Q0FBOEM7QUFDOUMsUUFBUTtBQUVSLHdEQUF3RDtBQUN4RCwyREFBMkQ7QUFDM0QsSUFBSTtBQUVHLE1BQU0sZUFBZSxHQUFHLENBQUMsU0FBaUIsRUFBTyxFQUFFO0lBQ3hELE1BQU0sb0JBQW9CLEdBQUcsd0JBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLFNBQVMseUJBQXlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFFbkQsdUNBQXVDO0lBQ3ZDLE1BQU0sVUFBVSxHQUFVLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFM0YsdUJBQXVCO0lBQ3ZCLE1BQU0sWUFBWSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FB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