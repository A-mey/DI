// type Constructor<T = any> = { new (...args: any[]): T };

// type ClassMap<T = any> = { real: T | null; mock: T | null };

// export const ClassRegistry = new Map<string, ClassMap>();
export const ClassRegistry = new Map<string, any>();

// export const ClassRegistry = new Map<string, new (...args: any[]) => any>();

export const TypeMap = new Map<Function, any>();

