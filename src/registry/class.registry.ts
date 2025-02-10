export type classParams = { class: Function, type: "real" | "mock", constructor?: Array<Function | string> }

export const ClassRegistry = new Map<string, classParams>();
