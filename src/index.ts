import "reflect-metadata";
import { Inject, interface1, service } from "./utils/service.util";
import { ClassRegistry } from "./registry/registry";
import { getMockInstance, getRealInstance } from "./utils/getInstance.util";



@service()
class B implements BInterface {
    constructor () {
        console.log("B instantiated");
    }

    getxyz = () => {
        return "1234";
    }
}

@service("mock")
class BMock implements BInterface {
    constructor () {
        console.log("B mock instantiated");
    }

    getxyz = () => {
        return "5678";
    }
}



interface BInterface {
    getxyz(): string
}

const BInterfaceToken = Symbol("BInterface");

@service()
class A {

    // b: B;

    constructor(@Inject(BInterfaceToken) public b: BInterface) {
        // this.b = b;
        console.log("A instantiated with B");
    }

    xyz = () => {
        console.log(this);  // Debugging the 'this' context
        return this.b.getxyz();
    }
}

// console.log("xyz", Reflect.getMetadata("design:paramtypes", A));

interface1(BInterfaceToken, B);
interface1(BInterfaceToken, BMock);

// console.log("Registry", ClassRegistry);
const x = getRealInstance("A");
const y = getMockInstance("A");
console.log("x", x, typeof x);
console.log("y", y, typeof y);
console.log("x123", x.b);
console.log("y123", y.b);
console.log("data", x.xyz());
console.log("data2", y.xyz());