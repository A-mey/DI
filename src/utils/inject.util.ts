import { classParams, ClassRegistry } from "../registry/class.registry";

type Token = string | Symbol;

// export const Inject = (token: Token): ParameterDecorator => {
// 	return (target, propertyKey, parameterIndex) => {
// 		const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
// 		//   console.log("existingTokens", existingTokens);
// 	  	existingTokens[parameterIndex] = token;
// 	  	Reflect.defineMetadata("design:paramtypes", existingTokens, target);
// 		console.log("paramtypes", Reflect.getMetadata("design:paramtypes", target));
// 	};
// };

// export const InjectClass = (innerClass: Function []) => {
// 	return function (outerClass: Function): void  {
// 		console.log("target", outerClass);
// 		console.log("className", innerClass);
// 		console.log("classRegistry", ClassRegistry);
// 		const classRegister: classParams | undefined = ClassRegistry.get(outerClass.name);
// 		if (!classRegister) {
// 			throw new Error("class not found");
// 		}
// 		innerClass.forEach((x: Function) => {
// 			classRegister.constructor?.push(x);
// 		});
// 		ClassRegistry.set(outerClass.name, classRegister);
// 		console.log("classRegistry", ClassRegistry);
// 	};
// };

export const Inject = (injectedClassOrInterface: Array<Function | string>) => {
	return function (outerClass: Function): void  {
		console.log("target", outerClass);
		console.log("className", injectedClassOrInterface);
		console.log("classRegistry", ClassRegistry);
		const classRegister: classParams | undefined = ClassRegistry.get(outerClass.name);
		if (!classRegister) {
			throw new Error("class not found");
		}
		injectedClassOrInterface.forEach((x: Function | string) => {
			classRegister.constructor?.push(x);
		});
		ClassRegistry.set(outerClass.name, classRegister);
		console.log("classRegistry", ClassRegistry);
	};
}