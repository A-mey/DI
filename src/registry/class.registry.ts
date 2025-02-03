export type classParams = { class: Function, type: "real" | "mock", constructor?: Function [] }

export const ClassRegistry = new Map<string, classParams>();
