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
    if (!ClassConstructorData.real) {
        return;
    }
    const ClassConstructor = ClassConstructorData.real;
    // Retrieve constructor parameter types
    const paramTypes = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
    // Resolve dependencies
    let dependencies = paramTypes.map((paramType) => {
        console.log("paramTypes", paramType);
        if (!paramType) {
            throw new Error(`Undefined dependency found for class ${className}`);
        }
        // Check if paramType corresponds to a token
        const concreteType = registry_1.TypeMap.get(paramType) || paramType;
        console.log("concreteType", concreteType);
        const dependencyName = concreteType.name;
        if (!registry_1.ClassRegistry.has(dependencyName)) {
            throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
        }
        return (0, exports.getRealInstance)(dependencyName);
    }).filter(x => x);
    console.log("dependencies", dependencies);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5zdGFuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRJbnN0YW5jZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRCQUEwQjtBQUMxQixtREFBOEQ7QUFFOUQsK0RBQStEO0FBQy9ELCtEQUErRDtBQUUvRCxpQ0FBaUM7QUFDakMsb0VBQW9FO0FBQ3BFLE1BQU07QUFFTix3REFBd0Q7QUFFeEQsNENBQTRDO0FBQzVDLGdHQUFnRztBQUVoRywwQ0FBMEM7QUFFMUMsd0dBQXdHO0FBRXhHLHlCQUF5QjtBQUN6QiwrR0FBK0c7QUFFL0csd0NBQXdDO0FBQ3hDLHlEQUF5RDtBQUN6RCwyQ0FBMkM7QUFDM0Msd0JBQXdCO0FBQ3hCLDhFQUE4RTtBQUM5RSxRQUFRO0FBRVIsNkNBQTZDO0FBQzdDLHFEQUFxRDtBQUNyRCxnREFBZ0Q7QUFDaEQsMEZBQTBGO0FBQzFGLFFBQVE7QUFFUiw4Q0FBOEM7QUFDOUMsUUFBUTtBQUVSLHdEQUF3RDtBQUN4RCwyREFBMkQ7QUFDM0QsSUFBSTtBQUVHLE1BQU0sZUFBZSxHQUFHLENBQUMsU0FBaUIsRUFBTyxFQUFFO0lBQ3hELE1BQU0sb0JBQW9CLEdBQUcsd0JBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFFMUQsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxTQUFTLFNBQVMseUJBQXlCLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQy9CLE9BQU87SUFDVCxDQUFDO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7SUFFbkQsdUNBQXVDO0lBQ3ZDLE1BQU0sVUFBVSxHQUFVLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsZ0JBQWdCLENBQUMsSUFBSSxFQUFF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