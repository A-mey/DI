import { ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

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