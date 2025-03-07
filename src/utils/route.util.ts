import { service } from "./service.util";

export const route = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a Route`);
        service(classType)(target);
    };
};