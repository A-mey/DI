"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstance = void 0;
const getInstance = (className) => {
    return "";
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
};
exports.getInstance = getInstance;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0SW5zdGFuY2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRJbnN0YW5jZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdPLE1BQU0sV0FBVyxHQUFHLENBQUMsU0FBaUIsRUFBTyxFQUFFO0lBQ3BELE9BQU8sRUFBRSxDQUFDO0lBQ1YsNkRBQTZEO0lBQzdELDZEQUE2RDtJQUM3RCwrQkFBK0I7SUFFL0Isa0VBQWtFO0lBQ2xFLElBQUk7SUFFSixzREFBc0Q7SUFFdEQscURBQXFEO0lBQ3JELDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osSUFBSTtJQUVKLDhGQUE4RjtJQUU5Rix5Q0FBeUM7SUFFekMscURBQXFEO0lBQ3JELHlDQUF5QztJQUN6Qyx3QkFBd0I7SUFDeEIsNEVBQTRFO0lBQzVFLE1BQU07SUFFTiw4REFBOEQ7SUFDOUQsK0NBQStDO0lBRS9DLG1EQUFtRDtJQUVuRCw4Q0FBOEM7SUFDOUMsd0ZBQXdGO0lBQ3hGLE1BQU07SUFFTix3Q0FBd0M7SUFDeEMscUJBQXFCO0lBRXJCLDZDQUE2QztJQUU3Qyx5REFBeUQ7QUFDM0QsQ0FBQyxDQUFDO0FBekNXLFFBQUEsV0FBVyxlQXlDdEIifQ==