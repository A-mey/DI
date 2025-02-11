export type classParams = {
    class: Function;
    type: "real" | "mock";
    constructor?: Array<Function | symbol>;
};
export declare const ClassRegistry: Map<string, classParams>;
