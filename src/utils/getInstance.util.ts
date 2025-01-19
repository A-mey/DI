import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const getInstance = (className: string): any => {
  const ClassConstructorData = ClassRegistry.get(className);

  if (!ClassConstructorData) {

    throw new Error(`Class ${className} not found in registry.`);
  }

  const ClassConstructor = ClassConstructorData.real;

  if (!ClassConstructor) {
    return;
  }

  const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

  let dependencies = paramTypes.map((paramType) => {
    console.log("paramTypes", paramType);
      if (!paramType) {
      throw new Error(`Undefined dependency found for class ${className}`);
    }

    const concreteType = TypeMap.get(paramType) || paramType;
    console.log("concreteType", concreteType);

    const dependencyName = concreteType.real.name;

    if (!ClassRegistry.has(dependencyName)) {
      throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
    }

    return getInstance(dependencyName);
  }).filter(x => x);

  console.log("dependencies", dependencies);

  return new (ClassConstructor as any)(...dependencies);
};
  