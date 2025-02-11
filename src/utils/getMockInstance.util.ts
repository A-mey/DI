import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const getMockInstance = <T extends new (...args: any[]) => any> (actualClass: T): InstanceType<T> => {
    const className = actualClass.name;
    const ClassConstructorData = ClassRegistry.get(className);

    if (!ClassConstructorData) {
        throw new Error(`Class ${className} not found in registry.`);
    }

    const ClassConstructor = ClassConstructorData.class;

    if (!ClassConstructor) {
        throw new Error(`Undefined dependency found for class ${className}`);
    }

    const constructorParams = ClassConstructorData.constructor || [];

    const dependencies = constructorParams.map((constructor: symbol | Function) => {
        console.log("constructor", constructor);
        let dependency: Function | null = null;

        if (typeof constructor === "symbol") {
            const mockClassData = TypeMap.get(constructor);
            if (!mockClassData) return;

            const dependencyName = mockClassData.mock || mockClassData.real;
            if (!dependencyName) return;

            const dependencyData = ClassRegistry.get(dependencyName);
            if (!dependencyData) return;

            dependency = dependencyData.class;
        } else {
            dependency = constructor;
        }

        return getMockInstance(dependency as any);
    }).filter(Boolean);

    console.log("dependencies", dependencies);
    return new (ClassConstructor as InstanceType<T>)(...dependencies);
};