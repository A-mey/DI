import { ClassRegistry, TypeMap } from "../registry/registry";
type Token = string | Symbol;

// export const service2 = (target: Function): void => {
// 	const className = target.name;
  
// 	if (ClassRegistry.has(className)) {
// 	  throw new Error("");
// 	} else {
// 		// const insertData = classType === "real" ? {real: target, mock: null} : {real: null, mock: target}
// 		ClassRegistry.set(className, target);
// 	}
// };

export const service = (type?: "mock") => {
	return function (target: Function): void {
		const className = target.name;
		const classType = type? "mock":"real";
	
		if (ClassRegistry.has(className)) {
		const classData = ClassRegistry.get(className);
		if (classData && classData[classType]) {
			throw new Error();
		} else if (classData && !classData[classType]) {
			classData[classType] = target
		}
		} else {
			const insertData = classType === "real" ? {real: target, mock: null} : {real: null, mock: target}
			ClassRegistry.set(className, insertData);
		}
		// console.log("ClassRegistry", ClassRegistry);
	}
};

export const interface1 = (abstractType: any, concreteType: Function) => {
	if (!abstractType || !concreteType) {
	  throw new Error("Both abstractType and concreteType must be provided.");
	}
	// console.log("concreteType.name", concreteType.name);
	const className = ClassRegistry.get(concreteType.name);
	// console.log("className", className);
	if (className === "") {
		throw new Error("No class found")
	}
	const realClassName = className.real ? className.real : null;
	const mockClassName = className.mock ? className.mock : null;
	const TypeData = TypeMap.get(abstractType);
	if (!TypeData) {
		TypeMap.set(abstractType, className);
	} else {
		if (realClassName) {
			TypeData.real = realClassName
		}
		if (mockClassName) {
			TypeData.mock = mockClassName
		}
	}
	// console.log("TypeMap", TypeMap);
};

export const Inject = (token: Token): ParameterDecorator => {
	return (target, propertyKey, parameterIndex) => {
	  const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
	//   console.log("existingTokens", existingTokens);
	  existingTokens[parameterIndex] = token;
	  Reflect.defineMetadata("design:paramtypes", existingTokens, target);
	};
};