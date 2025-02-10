"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = void 0;
const class_registry_1 = require("../registry/class.registry");
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
const Inject = (injectedClassOrInterface) => {
    return function (outerClass) {
        console.log("target", outerClass);
        console.log("className", injectedClassOrInterface);
        console.log("classRegistry", class_registry_1.ClassRegistry);
        const classRegister = class_registry_1.ClassRegistry.get(outerClass.name);
        if (!classRegister) {
            throw new Error("class not found");
        }
        injectedClassOrInterface.forEach((x) => {
            var _a;
            (_a = classRegister.constructor) === null || _a === void 0 ? void 0 : _a.push(x);
        });
        class_registry_1.ClassRegistry.set(outerClass.name, classRegister);
        console.log("classRegistry", class_registry_1.ClassRegistry);
    };
};
exports.Inject = Inject;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0LnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvaW5qZWN0LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0RBQXdFO0FBSXhFLGdFQUFnRTtBQUNoRSxxREFBcUQ7QUFDckQsbUZBQW1GO0FBQ25GLHdEQUF3RDtBQUN4RCw4Q0FBOEM7QUFDOUMsMkVBQTJFO0FBQzNFLGlGQUFpRjtBQUNqRixNQUFNO0FBQ04sS0FBSztBQUVMLDREQUE0RDtBQUM1RCxtREFBbUQ7QUFDbkQsdUNBQXVDO0FBQ3ZDLDBDQUEwQztBQUMxQyxpREFBaUQ7QUFDakQsdUZBQXVGO0FBQ3ZGLDBCQUEwQjtBQUMxQix5Q0FBeUM7QUFDekMsTUFBTTtBQUNOLDBDQUEwQztBQUMxQyx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLHVEQUF1RDtBQUN2RCxpREFBaUQ7QUFDakQsTUFBTTtBQUNOLEtBQUs7QUFFRSxNQUFNLE1BQU0sR0FBRyxDQUFDLHdCQUFrRCxFQUFFLEVBQUU7SUFDNUUsT0FBTyxVQUFVLFVBQW9CO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLHdCQUF3QixDQUFDLENBQUM7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsOEJBQWEsQ0FBQyxDQUFDO1FBQzVDLE1BQU0sYUFBYSxHQUE0Qiw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxLQUFLLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUNwQyxDQUFDO1FBQ0Qsd0JBQXdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBb0IsRUFBRSxFQUFFOztZQUN6RCxNQUFBLGFBQWEsQ0FBQyxXQUFXLDBDQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILDhCQUFhLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsOEJBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQTtBQWZZLFFBQUEsTUFBTSxVQWVsQiJ9