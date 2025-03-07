import { service } from "./service.util";

export const repository = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a Repository`);
        service(classType)(target);
    };
};