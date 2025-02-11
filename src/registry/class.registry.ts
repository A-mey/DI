export type classParams = { class: Function, type: "real" | "mock", constructor?: Array<Function | symbol> }

export const ClassRegistry = new Map<string, classParams>();
