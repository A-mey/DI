"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.service = void 0;
const class_registry_1 = require("../registry/class.registry");
const service = (type) => {
    return function (target) {
        const className = target.name;
        const classType = type ? "mock" : "real";
        if (class_registry_1.ClassRegistry.has(className)) {
            const classData = class_registry_1.ClassRegistry.get(className);
            if (classData && classData[classType]) {
                throw new Error();
            }
            else if (classData && !classData[classType]) {
                classData[classType] = target;
            }
        }
        else {
            const insertData = classType === "real" ? { real: target, mock: null } : { real: null, mock: target };
            class_registry_1.ClassRegistry.set(className, insertData);
        }
        // console.log("ClassRegistry", ClassRegistry);
    };
};
exports.service = service;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlcnZpY2UudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrREFBMkQ7QUFHcEQsTUFBTSxPQUFPLEdBQUcsQ0FBQyxJQUFhLEVBQUUsRUFBRTtJQUN4QyxPQUFPLFVBQVUsTUFBZ0I7UUFDaEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM5QixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQSxDQUFDLENBQUEsTUFBTSxDQUFDO1FBRXRDLElBQUksOEJBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztZQUNuQyxNQUFNLFNBQVMsR0FBRyw4QkFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDdkMsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQ25CLENBQUM7aUJBQU0sSUFBSSxTQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQztnQkFDL0MsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtZQUM5QixDQUFDO1FBQ0QsQ0FBQzthQUFNLENBQUM7WUFDUCxNQUFNLFVBQVUsR0FBRyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBQyxDQUFBO1lBQ2pHLDhCQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBQ0QsK0NBQStDO0lBQ2hELENBQUMsQ0FBQTtBQUNGLENBQUMsQ0FBQztBQWxCVyxRQUFBLE9BQU8sV0FrQmxCIn0=