import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

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

export const getMockInstance2 = (actualClass: Function) : any=> {
    const className = actualClass.name;

    const ClassConstructorData = ClassRegistry.get(className);
  
    if (!ClassConstructorData) {
      throw new Error(`Class ${className} not found in registry.`);
    }

    const ClassConstructor = ClassConstructorData.constructor;

    if (!ClassConstructor) {
        throw new Error(`Undefined dependency found for class ${className}`);
    }

    // if (ClassConstructor && ClassConstructor.length) {
        const dependencies = ClassConstructor.map((constructor: string | Function) => {
            // if (!constructor) {
            //     throw new Error(`Undefined dependency found for class ${className}`);
            // }
            let dependency: Function | null = null;
            if (typeof constructor === "string") {
                const mockClassData = TypeMap.get(constructor);
                if (!mockClassData) {
                    return;
                }
                const dependencyName = mockClassData.mock || mockClassData.real;
                if (!dependencyName) {
                    return;
                }
                const dependencyData = ClassRegistry.get(dependencyName)
                if (!dependencyData) {
                    return;
                }
                dependency = dependencyData.class;
            } else {
                dependency = constructor
            }
            return getMockInstance2(dependency as Function);
        }).filter(x => x);

    // }
    console.log("dependencies", dependencies);
    return new (ClassConstructor as any)(...dependencies);
}