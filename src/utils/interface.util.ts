import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const Interface = (abstractType: any) => {
	return function (concreteType: Function): void {
	// 	if (!abstractType || !concreteType) {
	// 		throw new Error("Both abstractType and concreteType must be provided.");
	// 	  }
	// 	  // console.log("concreteType.name", concreteType.name);
	// 	  const className = ClassRegistry.get(concreteType.name);
	// 	  // console.log("className", className);
	// 	  if (className === "") {
	// 		  throw new Error("No class found")
	// 	  }
	// 	  const realClassName = className.real ? className.real : null;
	// 	  const mockClassName = className.mock ? className.mock : null;
	// 	  const TypeData = TypeMap.get(abstractType);
	// 	  if (!TypeData) {
	// 		  TypeMap.set(abstractType, className);
	// 	  } else {
	// 		  if (realClassName) {
	// 			  TypeData.real = realClassName
	// 		  }
	// 		  if (mockClassName) {
	// 			  TypeData.mock = mockClassName
	// 		  }
	// 	  }
	// 	  console.log("TypeMap", TypeMap);
	}
};