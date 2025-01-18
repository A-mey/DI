"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = exports.interface1 = exports.service = exports.service2 = void 0;
const registry_1 = require("../registry/registry");
const service2 = (target) => {
    const className = target.name;
    if (registry_1.ClassRegistry.has(className)) {
        throw new Error("");
    }
    else {
        // const insertData = classType === "real" ? {real: target, mock: null} : {real: null, mock: target}
        registry_1.ClassRegistry.set(className, target);
    }
};
exports.service2 = service2;
const service = (type) => {
    return function (target) {
        const className = target.name;
        const classType = type ? "mock" : "real";
        if (registry_1.ClassRegistry.has(className)) {
            const classData = registry_1.ClassRegistry.get(className);
            if (classData && classData[classType]) {
                throw new Error();
            }
            else if (classData && !classData[classType]) {
                classData[classType] = target;
            }
        }
        else {
            const insertData = classType === "real" ? { real: target, mock: null } : { real: null, mock: target };
            registry_1.ClassRegistry.set(className, insertData);
        }
    };
};
exports.service = service;
const interface1 = (abstractType, concreteType) => {
    if (!abstractType || !concreteType) {
        throw new Error("Both abstractType and concreteType must be provided.");
    }
    registry_1.TypeMap.set(abstractType, concreteType);
    console.log("TypeMap", registry_1.TypeMap);
};
exports.interface1 = interface1;
const Inject = (token) => {
    return (target, propertyKey, parameterIndex) => {
        const existingTokens = Reflect.getMetadata("design:paramtypes", target) || [];
        console.log("existingTokens", existingTokens);
        existingTokens[parameterIndex] = token;
        Reflect.defineMetadata("design:paramtypes", existingTokens, target);
    };
};
exports.Inject = Inject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlcnZpY2UudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtREFBOEQ7QUFHdkQsTUFBTSxRQUFRLEdBQUcsQ0FBQyxNQUFnQixFQUFRLEVBQUU7SUFDbEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztJQUU5QixJQUFJLHdCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7UUFDakMsTUFBTSxJQUFJLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN0QixDQUFDO1NBQU0sQ0FBQztRQUNQLG9HQUFvRztRQUNwRyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztBQUNGLENBQUMsQ0FBQztBQVRXLFFBQUEsUUFBUSxZQVNuQjtBQUVLLE1BQU0sT0FBTyxHQUFHLENBQUMsSUFBYSxFQUFFLEVBQUU7SUFDeEMsT0FBTyxVQUFVLE1BQWdCO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFBLENBQUMsQ0FBQyxNQUFNLENBQUEsQ0FBQyxDQUFBLE1BQU0sQ0FBQztRQUV0QyxJQUFJLHdCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7WUFDbkMsTUFBTSxTQUFTLEdBQUcsd0JBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDL0MsSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNuQixDQUFDO2lCQUFNLElBQUksU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQy9DLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUE7WUFDOUIsQ0FBQztRQUNELENBQUM7YUFBTSxDQUFDO1lBQ1AsTUFBTSxVQUFVLEdBQUcsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQTtZQUNqRyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDMUMsQ0FBQztJQUNGLENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQztBQWpCVyxRQUFBLE9BQU8sV0FpQmxCO0FBRUssTUFBTSxVQUFVLEdBQUcsQ0FBQyxZQUFpQixFQUFFLFlBQXNCLEVBQUUsRUFBRTtJQUN2RSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbkMsTUFBTSxJQUFJLEtBQUssQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFDRCxrQkFBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsa0JBQU8sQ0FBQyxDQUFDO0FBQ2pDLENBQUMsQ0FBQztBQU5XLFFBQUEsVUFBVSxjQU1yQjtBQUVLLE1BQU0sTUFBTSxHQUFHLENBQUMsS0FBWSxFQUFzQixFQUFFO0lBQzFELE9BQU8sQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxFQUFFO1FBQzdDLE1BQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDOUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN2QyxPQUFPLENBQUMsY0FBYyxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RSxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFQVyxRQUFBLE1BQU0sVUFPakIifQ==