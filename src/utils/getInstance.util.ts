import "reflect-metadata";
import { ClassRegistry, TypeMap } from "../registry/registry";

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

export const getRealInstance = (className: string): any => {
  const ClassConstructorData = ClassRegistry.get(className);

  if (!ClassConstructorData) {
    throw new Error(`Class ${className} not found in registry.`);
  }

  const ClassConstructor = ClassConstructorData.real;

  // Retrieve constructor parameter types
  const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

  // Resolve dependencies
  const dependencies = paramTypes.map((paramType) => {
    if (!paramType) {
      throw new Error(`Undefined dependency found for class ${className}`);
    }

    // Check if paramType corresponds to a token
    const concreteType = TypeMap.get(paramType) || paramType;

    const dependencyName = concreteType.name;

    if (!ClassRegistry.has(dependencyName)) {
      throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    }

    return getRealInstance(dependencyName);
  });

  // Instantiate the class with resolved dependencies
  return new (ClassConstructor as any)(...dependencies);
};




export const getMockInstance = (className: string): any => {
  const ClassConstructorData = ClassRegistry.get(className);

  if (!ClassConstructorData) {
    throw new Error(`Class ${className} not found in registry.`);
  }

  const ClassConstructor = ClassConstructorData.mock;

  // Retrieve constructor parameter types
  const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

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
    if (!ClassRegistry.has(dependencyName)) {
      throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    }

    return getMockInstance(dependencyName);
  });

  // Instantiate the class with resolved dependencies
  return new (ClassConstructor as any)(...dependencies);
}
  