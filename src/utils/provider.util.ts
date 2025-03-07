import { service } from "./service.util";

export const provider = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a Provider`);
        service(classType)(target);
    };
};