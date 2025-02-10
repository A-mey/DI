export type classParams = {
    class: Function;
    type: "real" | "mock";
    constructor?: Array<Function | string>;
};
export declare const ClassRegistry: Map<string, classParams>;
