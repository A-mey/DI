import { service } from "./service.util";

export const dao = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a dao`);
        service(classType)(target);
    };
};