import { ClassRegistry } from "../registry/class.registry";
import { mockRealInterface, TypeMap } from "../registry/typeMap.registry";

export const Interface = (interfaceName: symbol) => {
	console.log("type", typeof interfaceName);
	return function (actualClass: Function): void {
		if (!interfaceName || !actualClass) {
			throw new Error("Both abstractType and concreteType must be provided.");
		  }
		  // console.log("concreteType.name", concreteType.name);
		  const className = ClassRegistry.get(actualClass.name);
		  // console.log("className", className);
		  if (!className) {
			  throw new Error("No class found")
		  }
		  const realClassName = className.type === "real" ? className.class.name : null;
		  const mockClassName = className.type === "mock" ? className.class.name : null;

		  const updatedClassName: mockRealInterface = { real: realClassName, mock: mockClassName }
		  const TypeData = TypeMap.get(interfaceName);
		  if (!TypeData) {
			  TypeMap.set(interfaceName, updatedClassName);
		  } else {
			  if (realClassName) {
				  TypeData.real = realClassName
			  }
			  if (mockClassName) {
				  TypeData.mock = mockClassName
			  }
		  }
		  console.log("TypeMap", TypeMap);
	}
};