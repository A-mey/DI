import { classParams, ClassRegistry } from "../registry/class.registry";

export const Inject = (injectedClassOrInterface: Array<Function | symbol>) => {
	return function (outerClass: Function): void  {
		console.log("target", outerClass);
		console.log("className", injectedClassOrInterface);
		console.log("classRegistry", ClassRegistry);
		const classRegister: classParams | undefined = ClassRegistry.get(outerClass.name);
		if (!classRegister) {
			throw new Error("class not found");
		}
		injectedClassOrInterface.forEach((x: Function | symbol) => {
			classRegister.constructor?.push(x);
		});
		ClassRegistry.set(outerClass.name, classRegister);
		console.log("classRegistry", ClassRegistry);
	};
}