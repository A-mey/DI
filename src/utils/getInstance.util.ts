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

  if (!ClassConstructorData.real) {
    return;
  }

  const ClassConstructor = ClassConstructorData.real;

  // Retrieve constructor parameter types
  const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

  // Resolve dependencies
  let dependencies = paramTypes.map((paramType) => {
    console.log("paramTypes", paramType);
      if (!paramType) {
      throw new Error(`Undefined dependency found for class ${className}`);
    }

    // Check if paramType corresponds to a token
    const concreteType = TypeMap.get(paramType) || paramType;
    console.log("concreteType", concreteType);

    const dependencyName = concreteType.real.name;

    if (!ClassRegistry.has(dependencyName)) {
      throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    }

    return getRealInstance(dependencyName);
  }).filter(x => x);

  console.log("dependencies", dependencies);

  // Instantiate the class with resolved dependencies
  return new (ClassConstructor as any)(...dependencies);
};




export const getMockInstance = (className: string): any => {
  console.log("classRegistry", ClassRegistry);
  const ClassConstructorData = ClassRegistry.get(className);

  if (!ClassConstructorData) {
    throw new Error(`Class ${className} not found in registry.`);
  }

  // if (!ClassConstructorData.mock) {
  //   return;
  // }

  const ClassConstructor = ClassConstructorData.mock || ClassConstructorData.real;

  if (!ClassConstructor) {
    return;
  }

  // Retrieve constructor parameter types
  const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

  console.log("pramTypes", paramTypes);

  // console.log("Metadata for A:", Reflect.getMetadata("design:paramtypes", ClassConstructor.name));

  // Log for debugging
  // console.log(`Resolving dependencies for ${className}:`, paramTypes.map(pt => pt?.name || "undefined"));

  // Recursively resolve dependencies
  const dependencies = paramTypes.map((paramType) => {
    console.log("paramTypes", paramType);
      if (!paramType) {
      throw new Error(`Undefined dependency found for class ${className}`);
    }

    // Check if paramType corresponds to a token
    const concreteType = TypeMap.get(paramType) || paramType;
    console.log("concreteType", concreteType);

    const dependencyName = concreteType.mock.name || concreteType.real.name;

    if (!ClassRegistry.has(dependencyName)) {
      throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    }

    return getMockInstance(dependencyName);
  }).filter(x => x);

  // Instantiate the class with resolved dependencies
  return new (ClassConstructor as any)(...dependencies);
}
  