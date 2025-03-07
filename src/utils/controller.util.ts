import { service } from "./service.util";

export const controller = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a Controller`);
        service(classType)(target);
    };
};