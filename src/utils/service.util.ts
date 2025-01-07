import { ClassRegistry, TypeMap } from "../registry/registry";
type Token = string | Symbol;

export const service2 = (target: Function): void => {
	const className = target.name;
  
	if (ClassRegistry.has(className)) {
	  throw new Error("");
	} else {
		// const insertData = classType === "real" ? {real: target, mock: null} : {real: null, mock: target}
		ClassRegistry.set(className, target);
	}
};

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
	}
};

export const interface1 = (abstractType: any, concreteType: Function) => {
	if (!abstractType || !concreteType) {
	  throw new Error("Both abstractType and concreteType must be provided.");
	}
	TypeMap.set(abstractType, concreteType);
};

export const Inject = (token: Token): ParameterDecorator => {
	return (target, propertyKey, parameterIndex) => {
	  const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
	  existingTokens[parameterIndex] = token;
	  Reflect.defineMetadata("design:paramtypes", existingTokens, target);
	};
};