import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

// export const getInstance = (className: string): any => {
//   return "";
  // const ClassConstructorData = ClassRegistry.get(className);
  // console.log("ClassConstructorData", ClassConstructorData);
  // if (!ClassConstructorData) {

  //   throw new Error(`Class ${className} not found in registry.`);
  // }

  // const ClassConstructor = ClassConstructorData.real;

  // console.log("ClassConstructor", ClassConstructor);
  // if (!ClassConstructor) {
  //   return;
  // }

  // const paramTypes: any[] = Reflect.getMetadata("design:paramtypes", ClassConstructor) || [];

  // console.log("paramTypes", paramTypes);

  // let dependencies = paramTypes.map((paramType) => {
  //   console.log("paramType", paramType);
  //     if (!paramType) {
  //     throw new Error(`Undefined dependency found for class ${className}`);
  //   }

  //   const concreteType = TypeMap.get(paramType) || paramType;
  //   console.log("concreteType", concreteType);

  //   const dependencyName = concreteType.real.name;

  //   if (!ClassRegistry.has(dependencyName)) {
  //     throw new Error(`Dependency ${dependencyName} not found for class ${className}`);
  //   }

  //   return getInstance(dependencyName);
  // }).filter(x => x);

  // console.log("dependencies", dependencies);

  // return new (ClassConstructor as any)(...dependencies);
// };

export const getInstance = (actualClass: Function): any => {
	const className = actualClass.name;
    const ClassConstructorData = ClassRegistry.get(className);

    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }

    const ClassConstructor = ClassConstructorData.class; // Fix: Use .class instead of .constructor

    if (!ClassConstructor) {
        throw new Error(`Undefined dependency found for class ${className}`);
    }

    const constructorParams = ClassConstructorData.constructor || []; // Ensure it's an array

    const dependencies = constructorParams.map((constructor: symbol | Function) => {
        console.log("constructor", constructor);
        let dependency: Function | null = null;

        if (typeof constructor === "symbol") {
            const mockClassData = TypeMap.get(constructor);
			console.log("MockClassData", mockClassData);
            if (!mockClassData) return;

            const dependencyName = mockClassData.real;
            if (!dependencyName) return;

            const dependencyData = ClassRegistry.get(dependencyName);
            if (!dependencyData) return;

            dependency = dependencyData.class;
        } else {
            dependency = constructor;
        }

        return getInstance(dependency as Function);
    }).filter(Boolean); // Fix: Better filtering

    console.log("dependencies", dependencies);
    return new (ClassConstructor as any)(...dependencies);
}
  