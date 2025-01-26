import "reflect-metadata";
import { service } from "./utils/service.util";
import { getInstance } from "./utils/getInstance.util";
import { getMockInstance } from "./utils/getMockInstance.util";
import { Interface } from "./utils/interface.util";
import { Inject } from "./utils/inject.util";

export { service, getInstance, getMockInstance, Interface, Inject }


const BInterfaceToken = Symbol("BInterface");

@Interface(BInterfaceToken)
@service()
class B implements BInterface {
    constructor () {
        console.log("B instantiated");
    }

    getxyz = () => {
        return "1234";
    }
}

@Interface(BInterfaceToken)
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


@service()
class A {

    // b: B;

    constructor(@Inject(BInterfaceToken) public b: BInterface) {
        // this.b = b;
        console.log("A instantiated with B");
    }

    xyz = () => {
        return this.b.getxyz();
    }
}

class C {
    constructor (@Inject(BInterfaceToken) public A: BInterface) {
        console.log("C instantiated");
    }

    getXYZ = () => {
        
    }
}

// const x = getInstance("A");
// const y = getMockInstance("A");
// console.log("x", x, typeof x);
// console.log("y", y, typeof y);
// console.log("x123", x.b);
// console.log("y123", y.b);
// console.log("data", x.xyz());
// console.log("data2", y.xyz());

const z = getInstance("C")
