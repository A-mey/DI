import { service } from "./service.util";

export const cacheStore = (classType?: "mock") => {
    return function (target: Function): void {
        console.log(`Registering ${target.name} as a cache store`);
        service(classType)(target);
    };
};