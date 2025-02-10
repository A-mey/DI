"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const class_registry_1 = require("../registry/class.registry");
const service = (classType) => {
    return function (target) {
        const className = target.name;
        const type = classType ? "mock" : "real";
        if (class_registry_1.ClassRegistry.has(className)) {
            const classData = class_registry_1.ClassRegistry.get(className);
            if (classData && classData.type) {
                throw new Error();
            }
            else if (classData && !classData.type) {
                classData.type = type;
            }
        }
        else {
            const insertData = { class: target, type: type, constructor: [] };
            class_registry_1.ClassRegistry.set(className, insertData);
        }
        console.log("ClassRegistry", class_registry_1.ClassRegistry);
    };
};
exports.service = service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlcnZpY2UudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBd0U7QUFHakUsTUFBTSxPQUFPLEdBQUcsQ0FBQyxTQUFrQixFQUFFLEVBQUU7SUFDN0MsT0FBTyxVQUFVLE1BQWdCO1FBQ2hDLE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDOUIsTUFBTSxJQUFJLEdBQW9CLFNBQVMsQ0FBQSxDQUFDLENBQUMsTUFBTSxDQUFBLENBQUMsQ0FBQSxNQUFNLENBQUM7UUFFdkQsSUFBSSw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO1lBQ2xDLE1BQU0sU0FBUyxHQUFHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDakMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ25CLENBQUM7aUJBQU0sSUFBSSxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3pDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFBO1lBQ3RCLENBQUM7UUFDRixDQUFDO2FBQU0sQ0FBQztZQUNQLE1BQU0sVUFBVSxHQUFnQixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFDLENBQUM7WUFDN0UsOEJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSw4QkFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQyxDQUFBO0FBQ0YsQ0FBQyxDQUFDO0FBbEJXLFFBQUEsT0FBTyxXQWtCbEIifQ==