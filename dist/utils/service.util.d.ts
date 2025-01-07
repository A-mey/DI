type Token = string | Symbol;
export declare const service2: (target: Function) => void;
export declare const service: (type?: "mock") => (target: Function) => void;
export declare const interface1: (abstractType: any, concreteType: Function) => void;
export declare const Inject: (token: Token) => ParameterDecorator;
export {};
