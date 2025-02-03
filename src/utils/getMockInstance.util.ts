import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const getMockInstance = (className: string): any => {
    // console.log("classRegistry", ClassRegistry);
    // const ClassConstructorData = ClassRegistry.get(className);
  
    // if (!ClassConstructorData) {
    //   throw new Error(`Class ${className} not found in registry.`);
    // }
  
    // const ClassConstructor = ClassConstructorData.mock || ClassConstructorData.real;
  
    // if (!ClassConstructor) {
    //   return;
    // }
  
    // const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];
  
    // console.log("pramTypes", paramTypes);
  
    // const dependencies = paramTypes.map((paramType) => {
    //   console.log("paramTypes", paramType);
    //     if (!paramType) {
    //     throw new Error(`Undefined dependency found for class ${className}`);
    //   }
  
    //   const concreteType = TypeMap.get(paramType) || paramType;
    //   console.log("concreteType", concreteType);
  
    //   const dependencyName = concreteType.mock.name || concreteType.real.name;
  
    //   if (!ClassRegistry.has(dependencyName)) {
    //     throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    //   }
  
    //   return getMockInstance(dependencyName);
    // }).filter(x => x);
  
    // return new (ClassConstructor as any)(...dependencies);
}