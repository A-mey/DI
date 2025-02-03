import { classParams, ClassRegistry } from "../registry/class.registry";
import { TypeMap } from "../registry/typeMap.registry";

export const service = (classType?: "mock") => {
	return function (target: Function): void {
		const className = target.name;
		const type: "real" | "mock" = classType? "mock":"real";
	
		if (ClassRegistry.has(className)) {
			const classData = ClassRegistry.get(className);
			if (classData && classData.type) {
				throw new Error();
			} else if (classData && !classData.type) {
				classData.type = type
			}
		} else {
			const insertData: classParams = {class: target, type: type, constructor: []};
			ClassRegistry.set(className, insertData);
		}
		console.log("ClassRegistry", ClassRegistry);
	}
};