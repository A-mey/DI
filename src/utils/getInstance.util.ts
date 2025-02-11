import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const getInstance = (actualClass: Function): any => {
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
    }).filter(Boolean);

    console.log("dependencies", dependencies);
    return new (ClassConstructor as any)(...dependencies);
}
  